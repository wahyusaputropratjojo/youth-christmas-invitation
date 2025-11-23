import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="font-mono">
      <Link
        href="https://www.instagram.com/opos___/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="space-y-1 p-4">
          <p className="text-[8px]">Design and Developed by</p>
          <div className="flex justify-between font-bold text-xs">
            <p>Wahyu Saputro Pratjojo</p>
            <p>@opos___</p>
          </div>
        </div>
      </Link>
    </footer>
  );
}
