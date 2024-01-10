import Link from "next/link";
import Image from "next/image";
import { mont } from "../fonts";

interface TestimonialInterface {
    content: string;
    source: string;
    url?: string;
    imgUrl?: string;
}

const testimonialsJson: TestimonialInterface[] = [
    {
        content: "\"Fundamental\" for tracking finances. As good as WhatsApp for containing awkwardness.",
        source: "Financial Times",
        url: "https://www.ft.com/content/8ccd6f0e-18bb-11e9-b93e-f4351a53f1c3",
        imgUrl: "https://www.splitwise.com/assets/home_page/logos/ft.png"
    },
    {
        content: "Life hack for group trips. Amazing tool to use when traveling with friends! Makes life so easy!!",
        source: "Ahab S, iOS"
    },
    {
        content: "Makes it easy to split everything from your dinner bill to rent.",
        source: "NY Times",
        url: "https://www.nytimes.com/2018/08/28/smarter-living/money-finance-apps-tools.html",
        imgUrl: "https://www.splitwise.com/assets/home_page/logos/nyt.png",
    },
    {
        content: "So amazing to have this app manage balances and help keep money out of relationships. love it!",
        source: "Haseena C, Android",
    },
    {
        content: "I never fight with roommates over bills because of this genius expense-splitting app",
        source: "Business Insider",
        url: "https://www.businessinsider.com.au/best-apps-for-splitting-expenses-friends-2017-3",
        imgUrl: "https://www.splitwise.com/assets/home_page/logos/bi.png",
    },
    {
        content: "I use it everyday. I use it for trips, roommates, loans. I love splitwise.",
        source: "Trickseyus, iOS",
    }
];

export default function Testimonials() {
    return <div className="container mx-auto mt-16 px-8">
        <div className="flex flex-wrap">
            {
                testimonialsJson.map((e, i) =>
                    <Testimonial
                        key={i}
                        content={e.content}
                        source={e.source}
                        imgUrl={e.imgUrl}
                        url={e.url}
                    />)
            }
        </div>
    </div>
}


function Testimonial({ content, source, imgUrl = "", url = "" }: TestimonialInterface) {
    return <div className="md:w-1/2 lg:w-1/3 md:px-2">
        {
            url ? <Link href={url} target="_blank" prefetch={false}><Component /></Link> : <Component />
        }

    </div>


    function Component() {
        return <div className="border border-grey-lightest shadow rounded flex flex-col justify-between px-6 pt-7 pb-4 h-[178px] lg:h-[220px]">
            <p className={`text-lg ${mont.className}`}>{content}</p>
            <div className="h-12 flex items-center">
                {imgUrl ? <Image alt="source" fill src={imgUrl} className="mr-4 rounded !h-12 !w-12 !static" /> : null}
                <span className="italic text-lg">{source}</span>
            </div>
        </div>
    }
}