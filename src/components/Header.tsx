import Image from "next/image";
import logo from "../images/logo.svg";
import Dropdown from "./Dropdown";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="h-16 p-3 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex justify-between items-center w-9/12">
          <Image src={logo} alt="brand_logo" width={160} />
          <div className="flex gap-x-4">
            <Dropdown />
            <span className="text-base text-white font-black hidden lg:block">
              해외 개발자 활용 서비스
            </span>
          </div>

          <button className="bg-white text-blue-700 font-black px-2 py-1 border-0 rounded hidden lg:block">
            문의하기
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
