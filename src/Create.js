import React, { useState, useEffect } from "react";

import {
    CreateDiv,
    Form,
    GoogleBtn,
    Alert,
    AdminPopup,
    Button,
    FormContainer,
} from "./CreateStyles";

import { storage, db, auth, provider } from "./firebase";
import { Link } from "react-router-dom";

function Create() {
    const [name, setName] = useState("");
    const [framework, setFramework] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [id, setId] = useState(0);
    const [filename, setFilename] = useState("Choose File...");
    const [project, setProject] = useState("work");
    const [user, setUser] = useState("");
    const [successToggle, setSuccessToggle] = useState(false);
    const [email] = useState(process.env.REACT_APP_SQ);
    const [wrongUser, setWrongUser] = useState(false);
    const [adminPhoto, setAdminPhoto] = useState("");
    const [xDialog, setXDialog] = useState(true);

    useEffect(() => {
        document.title = "Create - Sami Malik - Portfolio";
    }, []);

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                setUser(result.user.email);
                if (user !== process.env.REACT_APP_SQ) {
                    setXDialog(true);
                }
                setWrongUser(true);
                localStorage.setItem(
                    "imsamimalikSecurityId",
                    JSON.stringify(result.user.uid)
                );

                localStorage.setItem(
                    "adminPhoto",
                    JSON.stringify(result.user.photoURL)
                );
                setAdminPhoto(result.user.photoURL);
            })
            .catch((err) => alert(err.message));
    };

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            setFilename(e.target.files[0].name);
        }
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshpot) => {
                const progress = Math.round(
                    (snapshpot.bytesTransferred / snapshpot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        db.collection(project).add({
                            id: +id,
                            title: name,
                            imgUrl: url,
                            framework: framework,
                            link: link,
                        });
                        setTimeout(() => {
                            setSuccessToggle(true);
                        }, 1);
                        setTimeout(() => {
                            setSuccessToggle(false);
                        }, 1500);
                        setImage("");
                        setName("");
                        setLink("");
                        setFramework("");
                        setId(id);
                        setProgress(0);
                        setFilename("Choose File...");
                    });
            }
        );
    };
    const signOut = () => {
        auth.signOut().then(console.log("signed out."));
        localStorage.removeItem("imsamimalikSecurityId");
        localStorage.removeItem("adminPhoto");
        setUser("");
        setXDialog(false);
    };
    return (
        <CreateDiv>
            {JSON.parse(localStorage.getItem("imsamimalikSecurityId")) ===
                process.env.REACT_APP_UID ||
            user === process.env.REACT_APP_SQ ? (
                <>
                    <AdminPopup onClick={signOut}>
                        <span>
                            Hi <b style={{ color: "limegreen" }}>imsamimalik</b>
                            !
                        </span>
                        <img
                            src={
                                adminPhoto ||
                                JSON.parse(localStorage.getItem("adminPhoto"))
                            }
                            alt="imsamimalik"
                        />
                    </AdminPopup>
                    <FormContainer>
                        <Form className="form" onSubmit={handleUpload}>
                            <input
                                onChange={(e) => setId(e.target.value)}
                                value={id}
                                type="number"
                                min="0"
                                max="1000"
                                placeholder="Enter id"
                                required
                            />
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                placeholder="Enter title"
                                required
                            />
                            <input
                                onChange={(e) => setFramework(e.target.value)}
                                value={framework}
                                type="text"
                                placeholder="Enter framework"
                                required
                            />
                            <input
                                onChange={(e) => setLink(e.target.value)}
                                value={link}
                                type="text"
                                placeholder="Enter link"
                                required
                            />
                            <label className="file">
                                <input
                                    onChange={handleChange}
                                    type="file"
                                    required
                                />
                                <span className="file-custom">{filename}</span>
                            </label>
                            <progress
                                className="progress"
                                value={progress}
                                max="100"
                            />
                            <div className="select">
                                <select
                                    value={project}
                                    onChange={(e) => setProject(e.target.value)}
                                >
                                    <option value="web">Web</option>
                                    <option value="work">Work</option>
                                </select>
                            </div>
                            {successToggle && <Alert>Item added</Alert>}
                            <button
                                disabled={
                                    !name ||
                                    !framework ||
                                    !id ||
                                    !link ||
                                    !image
                                }
                            >
                                Submit
                            </button>
                        </Form>
                    </FormContainer>
                </>
            ) : (
                <GoogleBtn onClick={signIn}>
                    <div className="google-icon-wrapper">
                        <img
                            className="google-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="google logo"
                        />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with Google</b>
                    </p>
                </GoogleBtn>
            )}
            {user !== email && wrongUser && xDialog ? (
                <h1 className="invalidUser" style={{ marginTop: "60px" }}>
                    You're not authorized to access this page.
                </h1>
            ) : (
                ""
            )}
            <Link to="/" rel="noopener noreferrer" aria-label="Back">
                <Button>
                    <img
                        src="https://img.icons8.com/cotton/344/circled-left--v2.png"
                        alt="Back"
                    />
                    {/* https://www.flaticon.com/svg/static/icons/svg/93/93634.svg */}
                </Button>
            </Link>
        </CreateDiv>
    );
}

export default Create;
