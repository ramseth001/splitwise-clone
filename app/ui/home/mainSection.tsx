"use client"

import { useState, useEffect, useRef } from "react"
import styles from "./mainSection.module.css"
import { mont } from "@/app/fonts";
import Link from "next/link";

enum State {
    Plane,
    House,
    Heart,
    Any
}

export default function MainSection() {

    const [iconState, setIconState] = useState<State>(State.Plane);
    const stateIntervalRef = useRef<NodeJS.Timeout>();

    useEffect(() => {

        stateIntervalRef.current = setInterval(() => {

            setIconState(prevState => {

                updateClasses(prevState);

                switch (prevState) {
                    case State.Plane:
                        return State.House;
                    case State.House:
                        return State.Heart;
                    case State.Heart:
                        return State.Any;
                    case State.Any:
                        return State.Plane;
                }
            })

        }, 7000);

        return () => clearInterval(stateIntervalRef.current);
    }, []);

    function onSmallIconClick(localState: State) {
        setIconState(localState);
        updateClasses(localState);
        clearInterval(stateIntervalRef.current);
    }

    function updateClasses(previousState: State) {

        const planeTextElement: Element = document.getElementsByClassName("text-plane")[0];
        const anyTextElement: Element = document.getElementsByClassName("text-any")[0];
        const houseTextElement: Element = document.getElementsByClassName("text-house")[0];
        const heartTextElement: Element = document.getElementsByClassName("text-heart")[0];

        const planeIconElement: Element = document.getElementsByClassName("sm-plane")[0];
        const anyIconElement: Element = document.getElementsByClassName("sm-any")[0];
        const houseIconElement: Element = document.getElementsByClassName("sm-house")[0];
        const heartIconElement: Element = document.getElementsByClassName("sm-heart")[0];

        const allTextElements = [planeTextElement, anyTextElement, houseTextElement, heartTextElement];
        const allIconElements = [planeIconElement, anyIconElement, houseIconElement, heartIconElement];

        const signUpButton: HTMLElement | null = document.getElementById("btn-sign-up-main");

        let prevTextElement: Element;
        let newTextElement: Element;

        let prevIconElement: Element;
        let newIconElement: Element;

        let buttonCssClass;
        let buttonBackgroundColor: string;

        switch (previousState) {
            case State.Plane:
                prevTextElement = planeTextElement;
                newTextElement = houseTextElement;

                prevIconElement = planeIconElement;
                newIconElement = houseIconElement;

                buttonCssClass = "teal-to-purple";
                buttonBackgroundColor = "bg-purple-550";

                break;
            case State.House:
                prevTextElement = houseTextElement;
                newTextElement = heartTextElement;

                prevIconElement = houseIconElement;
                newIconElement = heartIconElement;

                buttonCssClass = "purple-to-red";
                buttonBackgroundColor = "bg-red-550";

                break;
            case State.Heart:
                prevTextElement = heartTextElement;
                newTextElement = anyTextElement;

                prevIconElement = heartIconElement;
                newIconElement = anyIconElement;

                buttonCssClass = "red-to-teal";
                buttonBackgroundColor = "bg-teal"

                break;
            case State.Any:
                prevTextElement = anyTextElement;
                newTextElement = planeTextElement;

                prevIconElement = anyIconElement;
                newIconElement = planeIconElement;

                buttonCssClass = "teal-to-teal";
                buttonBackgroundColor = "bg-teal"

                break;
            default:
                return;
        }

        // text color
        prevTextElement.classList.remove(`${styles["fade-in"]}`);
        prevTextElement.classList.add(`${styles["fade-out"]}`);

        setTimeout(() => {
            allTextElements.forEach(e => e.classList.add("hidden"))

            newTextElement.classList.remove("hidden");
            newTextElement.classList.add(`${styles["fade-in"]}`);

            prevTextElement.classList.remove(`${styles["fade-out"]}`);
        }, 1000)

        // sign up button
        prevIconElement.classList.remove(`${styles["fade-in-icon"]}`);
        prevIconElement.classList.add(`${styles["fade-out-icon"]}`);

        setTimeout(() => {

            allIconElements.forEach(e => e.classList.add("opacity-40"))
            newIconElement.classList.remove("opacity-40");
            newIconElement.classList.add(`${styles["fade-in-icon"]}`);

            prevIconElement.classList.remove(`${styles["fade-out-icon"]}`);
        }, 2000)

        // button
        if (signUpButton) {
            signUpButton.classList.remove(styles["teal-to-purple"], styles["purple-to-red"], styles["red-to-teal"], styles["teal-to-teal"]);
            signUpButton.classList.remove("bg-teal", "bg-purple-550", "bg-red-550")
            signUpButton.classList.add(`${styles[buttonCssClass]}`);

            setTimeout(() => {
                signUpButton.classList.add(buttonBackgroundColor)
            }, 2000);
        }
    }

    return <main className="bg-facets">
        <div className="lg:flex">
            <div className="hidden xl:block xl:w-1/12"></div>
            <div className="lg:w-5/12 xl:w-4/12">
                <div>
                    <h2 className="text-center text-3xl lg:text-left lg:text-4xl text-charcoal font-bold leading-tight pt-8 lg:pt-0">

                        <span>
                            Less stress when sharing expenses&nbsp;
                            <span className={`text-plane text-teal ${styles["animated"]}`}>on trips.</span>
                            <span className={`text-house text-purple-550 hidden ${styles["animated"]}`}>with housemates.</span>
                            <span className={`text-heart text-red-550 hidden ${styles["animated"]}`}>with your partner.</span>
                            <span className={`text-any text-teal hidden ${styles["animated"]}`}>with anyone.</span>
                        </span>

                    </h2>
                    <ul className="flex items-center justify-center lg:justify-start mt-4">
                        <li onClick={() => { onSmallIconClick(State.Any) }} className={`${styles["sm-icon"]} sm-plane text-teal ${styles["animate-slow"]}`}>
                            <svg className="fill-current w-9 lg:w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 35">
                                <path d="M7.844 0L1.961 3.5l11.766 7 3.922 2.333L9.805 17.5 3.922 14 0 16.333l3.922 2.334 1.961 1.166L3.922 21l1.961 1.167V24.5l1.961-1.167v7L11.766 28v-7l7.844-4.667V35l3.922-2.333 1.96-1.167v-7l1.962-1.167V21l-1.961 1.167v-2.334l1.96-1.166v-2.334l-1.96 1.167v-4.667l5.883-3.5L35.298 7V4.667L33.337 3.5l-9.805 5.833L19.61 7l1.961-1.167-1.961-1.166-1.961 1.166-1.961-1.166 1.96-1.167-1.96-1.167L13.727 3.5z"></path>
                            </svg>
                        </li>
                        <li className={`${styles["sm-icon"]} sm-house text-purple-550 opacity-40 ${styles["animate-slow"]}`}>
                            <svg className="fill-current w-9 lg:w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32">
                                <path d="M27.736 15.229V31.02H20.56V22.6h-7.177v8.423H6.207V15.228l7.176-4.211 3.588-2.106 10.765 6.317zm-.03-6.335l5.412 3.176v2.106H29.53l-12.559-7.37-12.558 7.37H.824V12.07l16.147-9.475 7.177 4.211V.49h3.557v8.405z"></path>
                            </svg>
                        </li>
                        {/* sm:!-mb-[9px] */}
                        <li className={`${styles["sm-icon"]} sm-heart text-red-550 !-mb-[3px] opacity-40 ${styles["animate-slow"]}`}>
                            <svg className="fill-current w-9 lg:w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 29">
                                <path d="M15.163 4.311L7.653-.043.143 4.311v15.237l15.02 8.707 15.02-8.707V4.311l-7.51-4.354z"></path>
                            </svg>
                        </li>
                        <li className={`${styles["sm-icon"]} sm-any text-grey-600 opacity-40 ${styles["animate-slow"]}`}>
                            <svg className="fill-current w-9 lg:w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 30">
                                <path d="M11.673.979v9.055L3.519 5.506.461 10.6l8.154 4.528-8.154 4.527L3.52 24.75l8.154-4.528v9.056h6.115V20.22l8.154 4.528L29 19.655l-8.154-4.527L29 10.6l-3.058-5.094-8.154 4.528V.979z"></path>
                            </svg>
                        </li>
                    </ul>
                    <div>
                        <p className="text-lg my-6 max-w-xs leading-5">Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
                        <Link href={"/signup"}>
                            <button id="btn-sign-up-main" className={`bg-teal text-white rounded shadow px-16 py-4 inline-block ${mont.className} ${styles["animate-slow"]} button-hover`}>Sign up</button>
                        </Link>
                        <p className="mt-8 text-charcoal text-sm flex h-4 items-center">
                            Free for <Link prefetch={false} className="inline-flex items-center h-4" href="https://apps.apple.com/us/app/splitwise/id458023433">
                                <svg className="inline fill-current mx-1" xmlns="http://www.w3.org/2000/svg" width="13" height="15">
                                    <path d="M10.628 7.968c.03 2.268 2.064 3.033 2.064 3.062-.03.057-.324 1.077-1.091 2.126-.649.936-1.327 1.815-2.389 1.843-1.032 0-1.386-.595-2.566-.595-1.21 0-1.563.567-2.566.595-1.003.029-1.77-.992-2.448-1.9C.305 11.23-.728 7.827.659 5.53a3.877 3.877 0 0 1 3.215-1.871c1.032-.029 1.976.652 2.595.652.62 0 1.77-.794 2.979-.68.501 0 1.947.17 2.86 1.474-.058.056-1.71.964-1.68 2.864zM8.68 2.41c-.56.624-1.475 1.106-2.33 1.05-.118-.851.325-1.759.826-2.326C7.737.51 8.71.028 9.477 0c.118.879-.265 1.758-.796 2.41z"></path>
                                </svg>
                                <span>iPhone</span>
                            </Link>, <Link prefetch={false} className="inline-flex items-center h-4" href="https://play.google.com/store/apps/details?id=com.Splitwise.SplitwiseMobile">
                                <svg className="inline fill-current mx-1" xmlns="http://www.w3.org/2000/svg" width="14" height="16">
                                    <path d="M2.68 12a.67.67 0 0 0 .67.667h.671V15c0 .553.449 1 1.005 1 .556 0 1.005-.447 1.005-1v-2.333h1.34V15c0 .553.45 1 1.006 1s1.005-.447 1.005-1v-2.333h.67c.369 0 .67-.3.67-.667V5.334h-8.04V12zM1.006 5.334C.45 5.334 0 5.78 0 6.334V11a1 1 0 0 0 1.005 1 1 1 0 0 0 1.005-1V6.334c0-.553-.449-1-1.005-1zm11.393 0c-.556 0-1.005.447-1.005 1V11a1 1 0 0 0 1.005 1 1 1 0 0 0 1.005-1V6.334c0-.553-.449-1-1.005-1zM9.068 1.44l.874-.87a.33.33 0 0 0 0-.47.335.335 0 0 0-.473 0l-.991.983a4.012 4.012 0 0 0-3.562.003L3.92.097a.335.335 0 0 0-.472 0 .33.33 0 0 0 0 .47l.878.874A3.998 3.998 0 0 0 2.68 4.667h8.042a3.98 3.98 0 0 0-1.656-3.226zm-.691 1.892c.185 0 .335-.15.335-.333a.334.334 0 0 0-.335-.333.334.334 0 0 0-.335.333c0 .184.15.333.335.333zm-3.35 0c.184 0 .334-.15.334-.333a.334.334 0 0 0-.335-.333.334.334 0 0 0-.335.333c0 .184.15.333.335.333z"></path>
                                </svg>
                                <span>Android</span>
                            </Link>,&nbsp;and web.
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:w-7/12"></div>
        </div>
    </main>
}