import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import YoutubeLogo from "../../public/images/youtube-navbar-logo.png";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import profilePic from "../../public/images/profile-pic.jpg";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className="parent-navbar-div flex justify-between px-8 py-2 fixed top-0 bg-white z-50 w-[100%]">
      <div className="flex gap-2 items-center ">
        <RxHamburgerMenu className="text-xl cursor-pointer" />
        <img src={YoutubeLogo} className="w-28 cursor-pointer" alt="" />
      </div>
      <div className="w-[35%] flex items-center ">
        <div className="input-box py-2 w-[100%] flex border rounded-l-full">
          <input
            type="text"
            className="w-[99%] ml-auto pl-3 outline-none"
            placeholder="Search"
          />
        </div>
        <button className="border rounded-r-full py-2 px-4 bg-gray-100 ">
          <CiSearch size={"24px"} />
        </button>
        <MdKeyboardVoice
          size={"42px"}
          className=" ml-4 rounded-[50%] border p-1 bg-gray-50 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex gap-6 items-center">
        <RiVideoAddLine
          size={"39px"}
          className=" border bg-gray-50 hover:bg-gray-200 cursor-pointer rounded-full p-2"
        />
        <IoMdNotificationsOutline
          size={"39px"}
          className=" border bg-gray-50 hover:bg-gray-200 cursor-pointer rounded-full p-2"
        />
        <Avatar src={profilePic} size="38" round={true} />
      </div>
    </div>
  );
};

export default Navbar;
