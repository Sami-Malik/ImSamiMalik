import React from "react";
import { Link } from "react-router-dom";
import {
    Profile,
    ProfileImg,
    Username,
    Userbio,
    About,
    Socials,
} from "./AppStyles";

function Sidebar() {
    return (
        <div className="sidebar">
            <Profile>
                <ProfileImg />
                <Username>
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
                </Username>
                <Userbio>FullStack Web Developer</Userbio>
                <About>
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
                        <Link
                            to="/create"
                            rel="noopener noreferrer"
                            aria-label="Map"
                        >
                            <i className="fas fa-map-marker-alt"></i>
                        </Link>
                        &nbsp; Mars
                    </span>
                    <span>
                        <i className="fas fa-user-tie"></i> &nbsp; Available for
                        hire
                    </span>
                    <Socials>
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
                    </Socials>
                </About>
            </Profile>
        </div>
    );
}

export default Sidebar;
