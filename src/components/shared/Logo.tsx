import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38} />
    </Link>
  );
};

export default Logo;
