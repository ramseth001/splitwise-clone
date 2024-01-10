import FooterImage from "@/public/images/footer1.svg"
import GooglePlay from "@/public/images/icons/google-play.svg"
import AppStore from "@/public/images/icons/app-store.svg"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return <div className="mt-20">
        <div className="mx-auto text-grey-light lg:flex lg:max-w-5xl px-8">
            <div className="text-sm flex w-full justify-between lg:justify-start">
                <div className="lg:pr-8">
                    <p className="font-bold text-teal mb-1">Splitwise</p>
                    <ul className="leading-normal">
                        <li>About</li>
                        <li>Press</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                        <li>Calculators</li>
                        <li>API</li>
                    </ul>
                </div>
                <Separator />
                <div className="lg:px-8">
                    <p className="font-bold text-orange-400 mb-1">Account</p>
                    <ul className="leading-normal">
                        <li>Log in</li>
                        <li>Sign up</li>
                        <li>Reset password</li>
                        <li>Settings</li>
                        <li>Splitwise Pro</li>
                        <li>Splitwise Pay</li>
                    </ul>
                </div>
                <Separator />
                <div className="lg:pl-8">
                    <p className="font-bold text-charcoal-400 mb-1">More</p>
                    <ul className="leading-normal">
                        <li>Contact us</li>
                        <li>FAQ</li>
                        <li>Terms of Service</li>
                        <li>Privacy policy</li>
                        <li className="mt-2">
                            <Link prefetch={false} href="https://twitter.com/splitwise" className="pr-1 inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" className="fill-current inline">
                                    <path d="M23.536 3.116a9.826 9.826 0 0 1-2.776.761 4.872 4.872 0 0 0 2.126-2.675 9.986 9.986 0 0 1-3.073 1.163 4.834 4.834 0 0 0-8.238 4.404c-4.018-.19-7.58-2.12-9.964-5.037a4.738 4.738 0 0 0-.654 2.432c0 1.68.855 3.157 2.15 4.025a4.819 4.819 0 0 1-2.19-.606v.06a4.837 4.837 0 0 0 3.878 4.743 4.909 4.909 0 0 1-2.174.084 4.85 4.85 0 0 0 4.524 3.357 9.696 9.696 0 0 1-5.995 2.068c-.384 0-.766-.022-1.15-.065A13.751 13.751 0 0 0 7.425 20c8.896 0 13.755-7.365 13.755-13.742 0-.205 0-.413-.015-.619a9.763 9.763 0 0 0 2.417-2.504l-.046-.02z"></path>
                                </svg>
                            </Link>
                            <Link prefetch={false} href="https://facebook.com/splitwise" className="pr-1 inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" className="fill-current inline">
                                    <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path>
                                </svg>
                            </Link>
                            <Link prefetch={false} href="https://www.instagram.com/splitwise/" className="pl-1 inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="fill-current inline">
                                    <path d="M10 0C7.283 0 6.944.013 5.877.06 4.813.11 4.087.278 3.45.525a4.897 4.897 0 0 0-1.772 1.153A4.88 4.88 0 0 0 .525 3.45C.277 4.088.109 4.812.06 5.877.01 6.944 0 7.283 0 10c0 2.717.012 3.056.06 4.123.05 1.064.217 1.79.465 2.427a4.904 4.904 0 0 0 1.153 1.772 4.89 4.89 0 0 0 1.772 1.153c.638.247 1.363.416 2.427.465 1.067.05 1.406.06 4.123.06 2.717 0 3.056-.013 4.123-.06 1.064-.05 1.79-.218 2.427-.465a4.915 4.915 0 0 0 1.772-1.153c.555-.556.899-1.113 1.153-1.772.247-.638.416-1.363.465-2.427.05-1.067.06-1.406.06-4.123 0-2.717-.013-3.056-.06-4.123-.05-1.064-.218-1.79-.465-2.427a4.908 4.908 0 0 0-1.153-1.772A4.872 4.872 0 0 0 16.55.525C15.913.278 15.187.109 14.123.06 13.056.01 12.717 0 10 0zm0 1.8c2.67 0 2.987.013 4.042.06.975.045 1.504.207 1.856.345.468.18.8.398 1.151.747.35.35.566.682.747 1.15.136.352.3.881.344 1.856.047 1.055.058 1.372.058 4.042s-.012 2.987-.061 4.042c-.051.975-.214 1.504-.351 1.855-.187.469-.4.8-.75 1.152a3.12 3.12 0 0 1-1.15.747c-.35.137-.887.3-1.862.344-1.062.047-1.374.058-4.049.058-2.676 0-2.988-.012-4.05-.061-.975-.051-1.512-.214-1.862-.351-.475-.187-.8-.4-1.15-.75a3.036 3.036 0 0 1-.75-1.15c-.137-.35-.299-.887-.35-1.862-.037-1.05-.05-1.374-.05-4.037s.013-2.988.05-4.05c.051-.975.213-1.512.35-1.862.175-.475.4-.8.75-1.15.35-.35.675-.575 1.15-.75.35-.138.875-.3 1.85-.35 1.063-.038 1.375-.05 4.05-.05L10 1.8zm0 3.065a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.332 3.332 0 1 1 0-6.666 3.332 3.332 0 1 1 0 6.666zm6.538-8.67a1.2 1.2 0 0 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"></path>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center my-6 lg:mt-0">
                    <Link href="https://play.google.com/store/apps/details?id=com.Splitwise.SplitwiseMobile" className="mr-1">
                        <Image width={141} height={42} alt="download on google play" src={GooglePlay} />
                    </Link>
                    <Link href="https://apps.apple.com/us/app/splitwise/id458023433" className="ml-1">
                        <Image width={141} height={42} alt="download on google play" src={AppStore} />
                    </Link>
                </div>
                <p className="text-sm">Cloned by Sethuraman Srinivasan</p>
            </div>
        </div>
        <Image className="w-full" src={FooterImage} alt="footer image" />
    </div>
}

function Separator() {

    return <div className="h-30 border-r hidden lg:block border-gray-300">
    </div>
}