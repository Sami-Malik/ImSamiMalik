import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
}
body {
    margin: 0;
    padding: 0;
    width: 100vw;
    background: var(--bg-color);
    color: var(--text-color);
    max-width: 100vw;
    overflow-x: hidden;
    align-items: center;
    font-family: Poppins, sans-serif;
}
*,
div,
img,
section,
span {
    cursor: url(https://firebasestorage.googleapis.com/v0/b/imsamimalik.appspot.com/o/static%2Fcursor10.png?alt=media&token=a8ab8be3-9623-436d-8c35-637a25c75d73),
        default !important;
}
a {
    cursor: url(https://firebasestorage.googleapis.com/v0/b/imsamimalik.appspot.com/o/static%2Fcursor10.png?alt=media&token=a8ab8be3-9623-436d-8c35-637a25c75d73),
        pointer !important;
}
::-webkit-scrollbar-thumb {
    border-radius: 20px;
}
@media (max-width: 990px) {

    * {
        cursor: default !important;
    }

}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-track {
    background: var(--bg-color);
}
::-webkit-scrollbar-thumb {
    background: var(--text-color);
}
:root {
    --bg-color: #0a0a0a;
    --text-color: #fff;
    --blog-gray-color: #b4b4b4;
    --background-image: linear-gradient(90deg, rgba(10, 10, 10, 0.3), #0a0a0a),
        url(https://firebasestorage.googleapis.com/v0/b/imsamimalik.appspot.com/o/static%2Fbg.webp?alt=media&token=c6577dde-392b-4f57-9c73-ae9e545eaf25);
    --background-background: linear-gradient(
            0deg,
            rgba(10, 10, 10, 1),
            rgba(68, 29, 29, 0.6)
        ),
        url(https://firebasestorage.googleapis.com/v0/b/imsamimalik.appspot.com/o/static%2Fbg.webp?alt=media&token=c6577dde-392b-4f57-9c73-ae9e545eaf25)
            center center fixed;
    --height: 50vh;
}
@media (max-width: 800px) {
	:root {
        --background-image: linear-gradient(
                0deg,
                rgba(10, 10, 10, 1),
                rgba(10, 10, 10, 0)
            ),
            url(https://firebasestorage.googleapis.com/v0/b/imsamimalik.appspot.com/o/static%2Fbg.webp?alt=media&token=c6577dde-392b-4f57-9c73-ae9e545eaf25) !important;
    }
}
::selection {
    color: var(--bg-color);
    background: var(--text-color);
}

`;

export default GlobalStyle;
