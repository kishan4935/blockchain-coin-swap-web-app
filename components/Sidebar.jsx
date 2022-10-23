import Link from "next/link";
import { RiLayoutGridFill } from "react-icons/ri";
import { AiFillSignal, AiOutlineAreaChart, BsBack } from "react-icons/ai";
import { IoIosWallet, IoMdSettings, } from "react-icons/io";
import { IoRibbon, IoLogInOutline, IoLogOutOutline } from "react-icons/io5";

import logo from '../public/logo.png'
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="h-screen bg-dark-secondary text-white flex flex-col justify-between items-center py-6">
      <div className="cursor-pointer">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="text-3xl">
        <ul className="flex flex-col gap-y-10 ">
          <li className="bg-primary-color p-3 rounded cursor-pointer">
            <Link href="/">
              <RiLayoutGridFill />
            </Link>
          </li>
          <li className="p-3 rounded hover:text-primary-color active:bg-primary-color active:text-white cursor-pointer">
            <Link href="#">
              <AiFillSignal />
            </Link>
          </li>
          <li className="p-3 rounded hover:text-primary-color active:bg-primary-color active:text-white cursor-pointer">
            <Link href="#">
              <AiOutlineAreaChart />
            </Link>
          </li>
          <li className="p-3 rounded hover:text-primary-color active:bg-primary-color active:text-white cursor-pointer">
            <Link href="/wallet">
              <IoIosWallet />
            </Link>
          </li>
          <li className="p-3 rounded hover:text-primary-color active:bg-primary-color active:text-white cursor-pointer">
            <Link href="#">
              <IoRibbon />
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-3xl">
        <ul className="flex flex-col gap-y-10">
          <li className="p-3 rounded cursor-pointer">
            <Link href="#">
              <IoMdSettings />
            </Link>
          </li>
          <li className="p-3 rounded cursor-pointer">
            <Link href="#">
              <IoLogInOutline />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;