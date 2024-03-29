import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Logo />

        <p>2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
