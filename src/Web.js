import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import Placeholder from "./Placeholder";
import { db } from "./firebase";

function Web() {
    const [web, setWeb] = useState([]);

    useEffect(() => {
        const unsubscribe = db
            .collection("web")
            .orderBy("id", "asc")
            .onSnapshot((snapshot) => {
                setWeb(snapshot.docs.map((doc) => doc.data()));
            });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div className="projects" id="work_section">
            {web.map((item) => (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                >
                    <section>
                        <div className="post_img">
                            <LazyLoad
                                height={170}
                                offset={-1}
                                once={true}
                                throttle={true}
                                placeholder={<Placeholder />}
                            >
                                <img
                                    loading="lazy"
                                    src={item.imgUrl}
                                    alt={item.title}
                                />
                            </LazyLoad>
                        </div>
                        <div className="about_section">
                            <div className="section_title">{item.title}</div>
                        </div>
                        <div className="bottom_section">
                            <span>
                                <i className="fas fa-code"></i>&nbsp;
                                {item.framework}
                            </span>
                        </div>
                    </section>
                </a>
            ))}
        </div>
    );
}

export default Web;
