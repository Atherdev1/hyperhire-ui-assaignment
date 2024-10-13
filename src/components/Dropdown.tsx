"use client";

import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("채용");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative hidden lg:block">
      <button
        onClick={toggleDropdown}
        className="text-white px-4 py-2 rounded-md flex items-center"
      >
        {selectedOption}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06 0L10 10.91l3.71-3.7a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md  ring-1 ring-black ring-opacity-5">
          <div className="py-2 bg-white">
            <a
              href="#"
              onClick={() => handleOptionClick("해외 개발자 원격 채용")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              해외 개발자 원격 채용
            </a>
            <a
              href="#"
              onClick={() =>
                handleOptionClick("외국인 원격 채용 (비개발 직군)")
              }
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              외국인 원격 채용 (비개발 직군)
            </a>
            <hr className="my-2" />
            <a
              href="#"
              onClick={() => handleOptionClick("한국어 가능 외국인 채용")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              한국어 가능 외국인 채용
            </a>
            <a
              href="#"
              onClick={() => handleOptionClick("채용")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              채용
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
