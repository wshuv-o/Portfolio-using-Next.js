import React, { ReactNode, useState, useEffect } from "react";
import { SideBar } from "../SideBar/SideBar";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [isHero, setIsHero] = useState(true);
  const [heroHeader, setHeroHeader] = useState(275);
  const [notHeroHeader, setNotHeroHeader] = useState(80);

  const handleScroll = (event: { currentTarget: { scrollTop: number } }) => {
    const height = window.innerHeight;
    if (event.currentTarget.scrollTop > height / 2) {
      setIsHero(false);
    } else {
      setIsHero(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setHeroHeader(0); // Update the hero header number for screens with a maximum width of 1000
        setNotHeroHeader(0);
      } else {
        setHeroHeader(275); // Reset the hero header number for screens larger than 1000
        setNotHeroHeader(80);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="relative duration-300"
      style={{ paddingLeft: isHero ? `${heroHeader}px` : `${notHeroHeader}px` }}
    >
      <header
        className="absolute top-0 left-0 h-screen overflow-auto scrollbar-hide bg-gray-800 text-white duration-300"
        style={{ width: isHero ? `${heroHeader}px` : `${notHeroHeader}px` }}
      >
        <SideBar isHero={isHero}></SideBar>
      </header>
      <main onScroll={handleScroll} className="w-full h-screen overflow-auto scrollbar-hide">
        {children}
      </main>
    </div>
  );
};
