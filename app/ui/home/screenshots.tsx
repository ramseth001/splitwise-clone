import { mont } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

interface ScreenshotDetailsInterface {
    title: string,
    subtitle: string,
    image: string,
    backgroundColor: string,
}

const screenshotsDetailsArray: ScreenshotDetailsInterface[] = [
    {
        title: "Track balances",
        subtitle: "Keep track of shared expenses, balances, and who owes who.",
        image: "https://www.splitwise.com/assets/home_page/fixtures/asset1@2x.png",
        backgroundColor: "charcoal",
    },
    {
        title: "Organize expenses",
        subtitle: "Split expenses with any group: trips, housemates, friends, and family.",
        image: "https://www.splitwise.com/assets/home_page/fixtures/asset2@2x.png",
        backgroundColor: "teal",
    },
    {
        title: "Add expenses easily",
        subtitle: "Quickly add expenses on the go before you forget who paid.",
        image: "https://www.splitwise.com/assets/home_page/fixtures/asset3@2x.png",
        backgroundColor: "orange-400",
    },
    {
        title: "Pay friends back",
        subtitle: "Settle up with a friend and record any cash or online payment.",
        image: "https://www.splitwise.com/assets/home_page/fixtures/asset4@2x.png",
        backgroundColor: "charcoal",
    },
];


export default function Screenshots() {
    return <div className="lg:flex lg:flex-wrap">
        {
            screenshotsDetailsArray.map(e => <Screenshot key={e.title} object={e} />)
        }
        <div className="bg-purple-600 flex flex-col lg:flex-row pt-8 text-white w-full bg-facets">
            <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
                <h2 className={`text-2xl text-center ${mont.className} mx-auto`}>Get even more with PRO</h2>
                <p className="text-center text-lg mt-2 mb-4 mx-auto px-8 max-w-sm">Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!</p>
                <div className="flex my-5 lg:my-4">
                    <Link href={"/signup"} className={`mx-auto py-2 px-10 py-3 border border-white shadow rounded ${mont.className} font-semibold bg-charcoal-trans button-hover`}>Sign up</Link>
                </div>
            </div>
            <div className="lg:w-1/2">
                <div className="w-64 lg:w-80 mx-auto">
                    <Image src="https://www.splitwise.com/assets/home_page/fixtures/asset5@2x.png" alt="Get even more with PRO" fill className="!static" />
                </div>
            </div>
        </div>
    </div>
}

function Screenshot(props: { object: ScreenshotDetailsInterface }) {

    const obj = props.object;

    return <div className={`bg-${obj.backgroundColor} flex flex-col align-center h-full pt-8 text-white w-full lg:w-1/2 bg-facets`}>
        <div>
            <h2 className={`text-2xl text-center ${mont.className} mx-auto`}>{obj.title}</h2>
            <p className="text-center text-lg mt-2 mb-9 mx-auto px-8 max-w-sm">{obj.subtitle}</p>
        </div>
        <div className="w-64 lg:w-80 mx-auto">
            <Image src={obj.image} alt={obj.title} fill className="!static" />
        </div>
    </div>
}