import React from "react";

function Sidebar() {
    return (
        <div className="sidebar">
            <div id="profile">
                <div id="profile_img"></div>
                <div id="username">
                    <span>Sami Malik</span>
                    <div>
                        <a
                            href="https://github.com/sami-malik"
                            rel="noopener noreferrer"
                            aria-label="Github"
                        >
                            @sami-malik
                        </a>
                    </div>
                </div>
                <div id="userbio">FullStack Web Developer</div>
                <div id="about">
                    <span>
                        <i className="fas fa-link"></i> &nbsp;
                        <a
                            href="https://imsamimalik.web.app/"
                            rel="noopener noreferrer"
                            aria-label="Web"
                        >
                            imsamimalik.web.app/
                        </a>
                    </span>
                    <span>
                        <a
                            href="./create"
                            rel="noopener noreferrer"
                            aria-label="Map"
                        >
                            <i className="fas fa-map-marker-alt"></i>
                        </a>
                        &nbsp; Mars
                    </span>
                    <span>
                        <i className="fas fa-user-tie"></i> &nbsp; Available for
                        hire
                    </span>
                    <div className="socials">
                        <span>
                            <a
                                href="https://www.twitter.com/imsamimalik"
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
                                href="mailto:salaarwali.malik@gmail.com"
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
                                href="https://www.linkedin.com/in/sami-malik-4663651a8/"
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
                                href="https://www.instagram.com/imsamimalik/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="socials instagram"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
