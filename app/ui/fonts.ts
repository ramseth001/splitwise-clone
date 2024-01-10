import { Lato, Montserrat } from "next/font/google";

export const mont = Montserrat({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal"]
})

export const lato = Lato({
    subsets: ['latin'],
    weight: ["100", "300", "400", "700"],
    style: ["normal", "italic"]
})
