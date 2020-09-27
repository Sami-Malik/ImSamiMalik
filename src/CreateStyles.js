import styled from "styled-components";

export const CreateDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    width: 460px;
    height: auto;
    background-color: #4caf50;
    padding: 40px 20px;
    border-radius: 5px;
    button,
    input,
    progress {
        margin-top: 20px;
        height: 20px;
        width: 300px;
        outline: 0;
    }
    input {
        padding: 12px 20px;
        border: none;
        border-radius: 5px;
        outline: 0;
    }
    input[type="number"],
    input[type="text"] {
        border-bottom: 2px solid red;
    }
    button {
        background-color: #03a9f4;
        height: 50px !important;
        color: #fff;
        font-size: 18px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-top: 5rem !important;
        &:hover {
            background-color: #007cb6;
        }
        &:disabled {
            background-color: #5cc1ef;
        }
        &:hover:disabled {
            background-color: #5cc1ef;
        }
    }
    .file {
        position: relative;
        display: inline-block;
        cursor: pointer !important;
        height: 2.5rem;
        margin-top: 1rem;
    }
    .file input {
        min-width: 14rem;
        margin: 0;
        opacity: 0;
    }
    .file-custom {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1;
        height: 1.5rem;
        padding: 0.5rem 1rem;
        line-height: 1.5;
        color: #555;
        background-color: #fff;
        border: 0.1rem solid #ddd;
        border-bottom: 0.1rem solid red;
        border-radius: 0.25rem;
        box-shadow: inset 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .file-custom:before {
        position: absolute;
        top: -0.075rem;
        right: -0.075rem;
        bottom: -0.075rem;
        z-index: 6;
        display: block;
        content: "Browse";
        height: 1.5rem;
        padding: 0.5rem 1rem;
        line-height: 1.5;
        color: #555;
        background-color: #eee;
        border: none;
        border-radius: 0 0.25rem 0.25rem 0;
    }
    .file input:focus ~ .file-custom {
        box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #0074d9;
    }
    .progress {
        display: inline-block;
        height: 1rem;
    }
    .progress[value] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 0;
        color: #0074d9;
    }
    .progress[value]::-webkit-progress-bar {
        background-color: #eee;
        border-radius: 0.2rem;
    }
    .progress[value]::-webkit-progress-value {
        background-color: #0074d9;
        border-top-left-radius: 0.2rem;
        border-bottom-left-radius: 0.2rem;
    }
    .progress[value="100"]::-webkit-progress-value {
        border-top-right-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
    }
    @-moz-document url-prefix() {
        .progress[value] {
            background-color: #eee;
            border-radius: 0.2rem;
        }
        .progress[value]::-moz-progress-bar {
            background-color: #0074d9;
            border-top-left-radius: 0.2rem;
            border-bottom-left-radius: 0.2rem;
        }
        .progress[value="100"]::-moz-progress-bar {
            border-top-right-radius: 0.2rem;
            border-bottom-right-radius: 0.2rem;
        }
    }
    .select {
        position: relative;
        display: inline-block;
        color: #555;
        width: 300px;
        margin-top: 25px;
    }
    .select select {
        display: inline-block;
        width: 100%;
        margin: 0;
        padding: 0.5rem 2.25rem 0.5rem 1rem;
        line-height: 1.5;
        color: #000;
        background-color: #eee;
        border: 0;
        border-radius: 0.25rem;
        cursor: pointer;
        outline: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .select select:focus:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }
    .select:after {
        position: absolute;
        top: 50%;
        right: 1.25rem;
        display: inline-block;
        content: "";
        width: 0;
        height: 0;
        margin-top: -0.15rem;
        pointer-events: none;
        border-top: 0.35rem solid;
        border-right: 0.35rem solid transparent;
        border-bottom: 0.35rem solid transparent;
        border-left: 0.35rem solid transparent;
    }
    .select select:focus {
        box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #0074d9;
    }
    .select select:active {
        color: #fff;
        background-color: #0074d9;
    }
    .select select::-ms-expand {
        display: none;
    }
    @-moz-document url-prefix() {
        .select select {
            text-indent: 0.01px;
            text-overflow: "";
            padding-right: 1rem;
        }
        .select option {
            background-color: #fff;
        }
    }
    @media screen and (min-width: 0\0) {
        .select select {
            z-index: 1;
            padding: 0.5rem 1.5rem 0.5rem 1rem;
        }
        .select:after {
            z-index: 5;
        }
        .select:before {
            position: absolute;
            top: 0;
            right: 1rem;
            bottom: 0;
            z-index: 2;
            content: "";
            display: block;
            width: 1.5rem;
            background-color: #eee;
        }
        .select select:active,
        .select select:focus,
        .select select:hover {
            color: #555;
            background-color: #eee;
        }
    }
`;
export const GoogleBtn = styled.div`
    margin-top: 100px;
    width: 184px;
    height: 42px;
    background-color: #4285f4;
    border-radius: 2px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
    transform: scale(2);
    &:hover {
        box-shadow: 0 0 6px #4285f4;
    }
    &:active {
        background: #1669f2;
    }
    .google-icon-wrapper {
        position: absolute;
        margin-top: 1px;
        margin-left: 1px;
        width: 40px;
        height: 40px;
        border-radius: 2px;
        background-color: #fff;
    }
    .google-icon {
        position: absolute;
        margin-top: 11px;
        margin-left: 11px;
        width: 18px;
        height: 18px;
    }
    .btn-text {
        float: right;
        margin: 11px 11px 0 0;
        color: #fff;
        font-size: 14px;
        letter-spacing: 0.2px;
        font-family: Roboto;
    }
`;
export const Alert = styled.div`
    margin-top: 30px;
    padding: 10px;
    background-color: #03a9f4;
    color: #fff;
    width: 300px;
    margin-bottom: -51px;
    border-radius: 5px;
`;
