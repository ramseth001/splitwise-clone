import Image from "next/image"
import { mont } from "../fonts"

const coreList = [
    "Add groups and friends",
    "Split expenses, record debts",
    "Equal or unequal splits",
    "Split by % or shares",
    "Calculate total balances",
    "Suggested repayments",
    "Simplify debts",
    "Recurring expenses",
    "Offline mode",
    "Cloud sync",
    "Spending totals",
    "Categorize expenses",
    "Easy CSV exports",
    "7+ languages",
    "100+ currencies",
    "Payment integrations",
];

const proList = [
    "A totally ad-free experience",
    "Currency conversion",
    "Receipt scanning",
    "Itemization",
    "Charts and graphs",
    "Expense search",
    "Save default splits",
    "Early access to new features",
];

const featureList = [
    ...coreList.map(e => ({
        type: 1,
        value: e
    })),
    ...proList.map(e => ({
        type: 2,
        value: e
    })),
]

export default function FeatureList() {
    return <div className="container mx-auto text-charcoal px-8">
        <h2 className={`text-center my-12 text-2xl lg:text-3.5xl ${mont.className} font-bold`}>The whole nine yards</h2>
        <ul className="mt-4 columns-2 md:columns-3 text-sm md:text-xl">
            {
                featureList.map((e, i) =>
                    <li key={i} className="block break-inside-avoid">
                        <div className="my-4 flex items-center first:mt-0">
                            {
                                e.type === 1 ?
                                    <Image
                                        className="inline-block h-[21px] w-[21px] mr-[4px]"
                                        src={"https://assets.splitwise.com/assets/core/core-feature.svg"}
                                        width={21}
                                        height={21}
                                        alt="list-icon" />
                                    :
                                    <Image
                                        className="inline-block h-[18px] w-[22px] mr-[4px]"
                                        src={"https://assets.splitwise.com/assets/pro/pro-feature.svg"}
                                        width={18}
                                        height={22}
                                        alt="list-icon" />
                            }
                            <span>{e.value}</span>
                        </div>
                    </li>)
            }
        </ul>
        <div className="flex items-center justify-center text-xs mt-8">
            <div className="flex items-center justify-center">
                <Image
                    className="inline-block h-[21px] w-[21px] mr-[4px]"
                    src={"https://assets.splitwise.com/assets/core/core-feature.svg"}
                    width={21}
                    height={21}
                    alt="list-icon" />
                <span className="ml-1 mr-6 text-charcoal lg:text-xl">Core features</span>
            </div>
            <div className="flex items-center justify-center">
                <Image
                    className="inline-block h-[18px] w-[22px] mr-[4px]"
                    src={"https://assets.splitwise.com/assets/pro/pro-feature.svg"}
                    width={18}
                    height={22}
                    alt="list-icon" />
                <span className="ml-1 mr-6 text-charcoal lg:text-xl">Pro features</span>
            </div>
        </div>
    </div>
}