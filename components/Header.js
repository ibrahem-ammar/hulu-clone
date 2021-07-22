import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon,BadgeCheckIcon,CollectionIcon,LightningBoltIcon,SearchIcon,UserIcon } from "@heroicons/react/outline";

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row items-center justify-between p-5 h-auto">
            {/* LEFT  */}
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="home" Icon={HomeIcon} />
                <HeaderItem title="trending" Icon={LightningBoltIcon} />
                <HeaderItem title="verified" Icon={BadgeCheckIcon} />
                <HeaderItem title="collections" Icon={CollectionIcon} />
                <HeaderItem title="search" Icon={SearchIcon} />
                <HeaderItem title="account" Icon={UserIcon} />
            </div>
            {/* RIGHT */}

            <Image
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
                className="object-contain"
            />
        </header>
    )
}
