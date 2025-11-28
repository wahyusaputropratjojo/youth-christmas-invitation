import Image from "next/image";
import Link from "next/link";
import Profile from "@/public/profile.webp";

export function Footer() {
	return (
		<footer>
			<div className="flex items-center justify-between p-4">
				<div className="flex items-center gap-2">
					<Image
						alt="Wahyu Saputro Pratjojo - Profile"
						className="size-12 rounded-full border-2 border-[#234940]"
						src={Profile}
					/>
					<div>
						<p className="font-medium text-[8px]">Designed and Developed by</p>
						<p className="font-bold text-sm">Wahyu Saputro Pratjojo</p>
						<p className="font-medium text-[8px]">@opos___</p>
					</div>
				</div>
				<div></div>
				<Link
					href="https://www.instagram.com/opos___/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<button
						className="h-8 cursor-pointer rounded-full bg-[#234940] px-3 font-bold text-[#f2efe6] text-sm"
						type="button"
					>
						Follow
					</button>
				</Link>
			</div>
		</footer>
	);
}
