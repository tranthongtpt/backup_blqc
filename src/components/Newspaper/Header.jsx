import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from "react-scroll";

import { WiNightAltCloudyHigh } from "react-icons/wi";

function Header() {

    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);

    return (
        <header
            className={
                "fixed top-0 w-full z-30 bg-white-500 transition-all " 
            }>
                
            <div class={"min-h-[60px] flex justify-between items-center max-w-screen-xl mx-auto sm:px-4 h-full" +
                (scrollActive ? " hidden" : "")}>
                <div class="flex flex-wrap justify-center items-center -ml-3 -mr-3">
                    <span class="text-slate-400 text-xs relative leading-[1.8] py-0 px-[13px] transition-all items-center justify-start flex-wrap flex">
                        <span>
                            Viet nam, Quảng Bình
                        </span>
                        <WiNightAltCloudyHigh />
                        <span>
                            HI 58° LO 56°
                        </span>
                    </span>
                </div>
                <div class="wrap-logo">
                    {/* <!-- Logo desktop -->		 */}
                    <div class="logo">
                        <h1 class="font-extrabold text-transparent text-[2.25rem] bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
                            Trang tin tức
                        </h1>
                    </div>
                </div>
                <div class="-ml-1 -mr-1 items-center text-slate-400 text-xs relative leading-[1.8] py-0 px-[13px] transition-all">
                    <Link href='/login'>
                            Đăng nhập
                    </Link>
                </div>
            </div>

            {/* <!--  --> */}
            <div className={"shadow-md border-t-1" +
                (scrollActive ? "pt-0 bg-white" : "") }>
                <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto py-3 sm:py-4 ">
                    <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center justify-between">
                        <LinkScroll
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("about");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "about"
                                    ? " text-orange-500 animation-active "
                                    : " text-black-500 hover:text-orange-500 ")
                            }
                        >
                            Thời sự
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="feature"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("feature");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "feature"
                                    ? " text-orange-500 animation-active "
                                    : " text-black-500 hover:text-orange-500 ")
                            }
                        >
                            Góc nhìn
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="pricing"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("pricing");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "pricing"
                                    ? " text-orange-500 animation-active "
                                    : " text-black-500 hover:text-orange-500 ")
                            }
                        >
                            Thế giới
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="testimoni"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("testimoni");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "testimoni"
                                    ? " text-orange-500 animation-active "
                                    : " text-black-500 hover:text-orange-500 ")
                            }
                        >
                            Thông báo
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="testimoni"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("testimoni");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "testimoni"
                                    ? " text-orange-500 animation-active "
                                    : " text-black-500 hover:text-orange-500 ")
                            }
                        >
                            Danh sách đơn vị
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="testimoni"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("testimoni");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "testimoni"
                                    ? " text-orange-500 animation-active "
                                    : " text-black-500 hover:text-orange-500 ")
                            }
                        >
                            Danh sách phóng viên
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="testimoni"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("testimoni");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "testimoni"
                                    ? " text-orange-500 animation-active "
                                    : " text-black-500 hover:text-orange-500 ")
                            }
                        >
                            Liên hệ
                        </LinkScroll>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;