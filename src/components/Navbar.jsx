import React, { useEffect,useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import axios from "axios";
import { useNavigate,NavLink } from "react-router-dom";

import avatar from "../data/avatar.jpg";
import {  Notification, NotifyProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }

    const token =localStorage.getItem('token');
        
        const config = {
        method: 'get',
        url: 'http://10.220.5.65:8090/api/v1/user/init-info',
        headers: { 
            'Authorization': 'Bearer '+token, 
            'Content-Type': 'application/json', 
        },
        };

        axios(config)
        .then(function (response) {
        setData(response.data.result);
        // console.log(JSON.stringify(response.data.result));
        })
        .catch(function (error) {
        console.log(error);
        });
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  // ----------------------
  const [data,setData] = useState('');
  const navigate = useNavigate();
  const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login")
  }
  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <NavButton
          title="Logout"
          customFunc={handleLogout}
          color={currentColor}
          icon={<FiLogOut />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg h-[42px]"
            onClick={() => handleClick("notifyprofile")}
          >
            {/* <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            /> */}
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Admin
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.notification && <Notification />}
        {isClicked.notifyprofile && <NotifyProfile />}
      </div>
    </div>
  );
};

export default Navbar;
