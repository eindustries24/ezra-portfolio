import Image from "next/image";
import Link from "next/link";

export default function Credits() {
  return (
    <div className="flex flex-col sm:flex-row items-center md:justify-between w-full bg-primary-content rounded-2xl px-10">
      <div className="relative aspect-video w-56 h-auto">
        <Link
          href="https://community.the-efa.org/member/ezralc"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src="/efa-logo.png"
            alt="EFA Logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="relative aspect-video w-56 h-auto">
        <Link
          href="https://www.upwork.com/freelancers/ezralc"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src="/upwork-logo.png"
            alt="Upwork Logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="relative aspect-video w-56 h-auto">
        <Link
          href="https://www.palladiapictures.com/about"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src="/palladialogo.png"
            alt="Palladia Logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
    </div>
  );
}
