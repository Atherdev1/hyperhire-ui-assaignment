"use client";
import { useState } from "react";
import profile from "../images/profile.svg";
import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ProfileCard = () => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto h-full">
        <div className="relative flex justify-center">
          <Image
            src={profile}
            alt="Profile Image"
            className="rounded-full w-24 h-24 object-cover"
          />
        </div>

        <div className="text-center mt-10">
          <h2 className="text-xl font-bold">Abhishek Gupta</h2>
          <p className="text-blue-500 font-semibold mt-1">마케팅 • 2y+</p>
        </div>

        <div className="flex flex-wrap justify-center mt-16 space-x-2">
          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
            마케팅 콘텐츠 제작
          </span>
          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
            인스타그램 관리
          </span>
          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
            트위터 관리
          </span>
          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
            블로그 글 작성
          </span>
        </div>
      </div>
    );
  };

  const slides = [
    {
      url: "https://via.placeholder.com/800x400?text=Slide+1",
      alt: "Slide 1",
    },
    {
      url: "https://via.placeholder.com/800x400?text=Slide+2",
      alt: "Slide 2",
    },
    {
      url: "https://via.placeholder.com/800x400?text=Slide+3",
      alt: "Slide 3",
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full h-4/6">
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <ProfileCard />
            </div>
          ))}
        </div>
      </div>

      <div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2  text-white px-4 py-2 rounded-md"
        >
          &#10094;
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2  text-white px-4 py-2 rounded-md"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
