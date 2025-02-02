import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col gap-16 p-4 lg:p-24 pb-0 lg:pb-0">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="ACME Institute Logo"
          priority
          width={322}
          height={58}
          className="w-80 h-14"
        />
      </Link>
      <p className="border-[#DDDDDD] pb-4 border-b font-bold text-[#363B5C] text-md">
        - BLOG
      </p>
    </header>
  );
};

export default Header;
