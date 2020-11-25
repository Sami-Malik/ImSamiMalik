import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Profile,
    ProfileImg,
    Username,
    Userbio,
    About,
    Socials,
} from "./AppStyles";
import { db } from "./firebase";



function Sidebar() {

	const [bio, setBio] = useState([]);

		useEffect(() => {
			const unsubscribe = db
				.collection("bio")
				.onSnapshot((snapshot) => {
					setBio(snapshot.docs.map((doc) => doc.data()));
				});
			return () => {
				unsubscribe();
			};
		}, []);


    return (
		<>
			{bio.map((bio) => (
			
					<div className="sidebar">
		            <Profile>
		                <ProfileImg />
		                <Username>
		                    <span>Sami Malik</span>
		                    <div>
		                        <a
		                            href={bio.github}
		                            rel="noopener noreferrer"
		                            aria-label="Github"
		                        >
		                            @imsamimalik
		                        </a>
		                    </div>
		                </Username>
		                <Userbio>FullStack Web Developer</Userbio>
		                <About>
		                    <span>
		                        <i className="fas fa-link"></i> &nbsp;
		                        <a
		                            href={bio.webLink}
		                            rel="noopener noreferrer"
		                            aria-label="Web"
		                        >
		                            {bio.webName}
		                        </a>
		                    </span>
		                    <span>
		                        <Link
		                            to="/create"
		                            rel="noopener noreferrer"
		                            aria-label="Map"
		                        >
		                            <i className="fas fa-map-marker-alt"></i>
		                        </Link>
		                        &nbsp;&nbsp; Mars
		                    </span>
		                    <span>
		                        <i className="fas fa-user-tie"></i> &nbsp; <a
		                            href={bio.fiverr}
		                            rel="noopener noreferrer"
		                            aria-label="Web"
		                        >Available for
		                        hire</a>
		                    </span>
		                    <Socials>
		                        <span>
		                            <a
		                                href={bio.twitter}
		                                rel="noopener noreferrer"
		                                target="_blank"
		                                className="socials twitter"
		                                aria-label="Twitter"
		                            >
		                                <i className="fab fa-twitter"></i>
		                            </a>
		                        </span>
		                        <span>
		                            <a
		                                href={`mailto:${bio.email}`}
		                                rel="noopener noreferrer"
		                                target="_blank"
		                                className="socials email"
		                                aria-label="Email"
		                            >
		                                <i className="fa fa-at"></i>
		                            </a>
		                        </span>
		                        <span>
		                            <a
		                                href={bio.linkedin}
		                                rel="noopener noreferrer"
		                                target="_blank"
		                                className="socials linkedin"
		                                aria-label="Linkedin"
		                            >
		                                <i className="fab fa-linkedin-in"></i>
		                            </a>
		                        </span>
		                        <span>
		                            <a
		                                href={bio.instagram}
		                                rel="noopener noreferrer"
		                                target="_blank"
		                                className="socials instagram"
		                                aria-label="Instagram"
		                            >
		                                <i className="fab fa-instagram"></i>
		                            </a>
		                        </span>
		                    </Socials>
		                </About>
		            </Profile>
		        </div>
			))}
	</>
        
   	);
}

export default Sidebar;
