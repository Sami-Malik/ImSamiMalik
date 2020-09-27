import styled from "styled-components";

export const Profile = styled.div`
    width: 24vw;
    padding: 4vh 3vw;
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    background: var(--background-image) center center;
    background-size: cover !important;
    background-repeat: no-repeat;
    position: fixed;
    color: #fff !important;

    div {
        font-weight: 700;
        margin: 1.5vh 0;
    }

    @media (max-width: 800px) {
        width: 90vw;
        padding: 4vh 5vw;
        height: 60vh;
        text-align: center;
        position: relative;
    }
`;
export const ProfileImg = styled.div`
    width: 180px;
    height: 180px;
    min-width: 180px;
    min-height: 180px;
    max-width: 180px;
    max-height: 180px;
    border-radius: 5px;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/imsamimalik.appspot.com/o/static%2Flogo.png?alt=media&token=1e9a5947-371c-4252-9a3b-599b850abde0);
    background-size: cover !important;
    background-repeat: no-repeat !important;
    @media (max-width: 800px) {
        width: 120px;
        height: 120px;
        min-width: 120px;
        min-height: 120px;
        max-width: 120px;
        max-height: 120px;
        margin: 0 auto !important;
    }
`;
export const Username = styled.div`
    font-size: 18px;
    font-weight: 700;
    span {
        font-size: 24px;
    }
    a {
        color: #fff !important;
        text-decoration: none;
        font-weight: 700;
        &:hover {
            text-decoration: underline;
        }
    }
`;
export const Userbio = styled.div`
    font-size: 26px;
    font-family: Questrial, sans-serif;
    width: 100%;
`;

export const About = styled.div`
    font-size: 18px;
    font-family: Questrial, sans-serif;
    a {
        color: #fff !important;
        text-decoration: none;
        font-weight: 700;
        &:hover {
            text-decoration: underline;
        }
    }
    span {
        margin: 1vh 0;
        display: block;
        @media (max-width: 990px) {
            margin: 1vh 10px;
        }
        i {
            font-size: 16px;
        }
    }
`;
export const FooterDiv = styled.div`
    width: 100%;
    padding: 8vh 0;
    text-align: center;
    a {
        color: var(--text-color) !important;
        text-decoration: none;
        font-family: Questrial, sans-serif;
        font-weight: 700;
    }
`;
export const PlaceholderDiv = styled.div`
    background-color: #000;
    width: 363px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(16px + (24 - 16) * (100vw - 400px) / (800 - 400));
    letter-spacing: 10px;
    span {
        filter: blur(2px);
    }
    @media (max-width: 990px) {
        width: 290px !important;
    }
    @media (max-width: 1230px) {
        width: 295px !important;
    }
`;
export const Display = styled.div`
    width: 64vw;
    padding: 4vh 3vw;
    height: 92vh;
    display: inline-block;
    padding-left: 33vw;
    h1 {
        font-size: 50px;
        color: var(--text-color);
        font-weight: 700;
        font-family: Questrial, sans-serif;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: #fff;
    }
    @media (max-width: 800px) {
        width: 90vw;
        padding: 4vh 5vw;
        height: auto;
        display: inline-block;
        padding-left: 5vw;
    }
`;
export const WorkDiv = styled.div`
    margin: 2vh 0;
    padding: 4vh 0 !important;
    @media (max-width: 800px) {
        margin: 0;
    }
`;
export const Projects = styled.div`
    margin-left: -15px;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    a {
        width: calc(49% - 30px);
        display: flex;
        text-decoration: none;
    }

    section {
        width: 100%;
        padding: 2.5vh 5%;
        margin: 1vh 0;
        display: inline-block;
        border-radius: 5px;
        color: var(--text-color);
        border: 1px solid #000;
        box-shadow: 0 0 0 #000;
        transition: 0.4s ease-in-out;
        transform: scale(1);
        overflow: hidden;
        &:hover {
            cursor: pointer;
            border: 1px solid #000;
            box-shadow: 0 15px 35px #000;
            transform: scale(1.03);
        }
    }
    .post_img img {
        width: 100%;
    }
    .section_title {
        font-size: 24px;
        font-weight: 700;
        margin: 1vh 0;
        padding: 0 1px;
        word-wrap: break-word;
    }
    .about_section {
        font-size: 18px;
        font-family: Questrial, sans-serif;
        margin: 2vh 0;
        font-weight: 700;
        word-wrap: break-word;
    }
    .bottom_section {
        margin: 1vh 0;
        font-size: 14px;
        word-wrap: break-word;
    }
    .bottom_section span {
        margin-right: 20px;
        font-weight: 700;
        color: #9e9e9e;
    }
    .bottom_section span i {
        font-size: 15px;
    }
    @media (max-width: 800px) {
        margin-left: 0;
        a {
            width: 100%;
            max-width: 330px;
            margin-bottom: 20px;
        }
        section {
            width: 88%;
        }
    }
`;
export const Socials = styled.div`
    color: #fff;
    text-decoration: none;
    margin: 3vh 0 !important;
    span {
        display: inline-block !important;
        margin-right: 2vw !important;
        font-weight: 400 !important;
        a {
            font-weight: 400 !important;
        }
    }
`;
