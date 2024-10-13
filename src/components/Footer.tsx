import Image from "next/image";
import colorLogo from "../images/color-logo.svg";
import code from "../images/code.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col p-8 xl:pl-52 lg:pr-0 mt-10 py-8">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[30%] p-4">
          <Image src={colorLogo} alt="brand_logo" />
          <p className="text-[14px] font-black text-black mt-2">
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해
            <br />
            드립니다.
          </p>
          <p
            className="text-[13px] font-black mt-4"
            style={{ color: "#5E626F" }}
          >
            010-0000-0000
          </p>
          <p
            className="text-[13px] font-black mt-4"
            style={{ color: "#5E626F" }}
          >
            aaaaa@naver.com
          </p>
        </div>
        <div className="w-full md:w-[70%] p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-[12px] p-4 border-0 shadow-md">
              <div className="w-[40px] h-[40px] bg-[#EFF1F6] flex justify-center items-center">
                <Image src={code} alt="brand_logo" />
              </div>
              <p
                className="text-[14px] font-black mt-2"
                style={{ color: "#343741" }}
              >
                해외 개발자 원격 채용
              </p>
              <p
                className="text-[14px] font-black mt-3"
                style={{ color: "##5E626F" }}
              >
                바로가기
              </p>
            </div>
            <div className="bg-white rounded-[12px] p-4 border-0 shadow-md">
              <div className="w-[40px] h-[40px] bg-[#EFF1F6] flex justify-center items-center">
                <Image src={code} alt="brand_logo" />
              </div>
              <p
                className="text-[14px] font-black mt-2"
                style={{ color: "#343741" }}
              >
                해외 개발자 원격 채용
              </p>
              <p
                className="text-[14px] font-black mt-3"
                style={{ color: "##5E626F" }}
              >
                바로가기
              </p>
            </div>
            <div className="bg-white rounded-[12px] p-4 border-0 shadow-md">
              <div className="w-[40px] h-[40px] bg-[#EFF1F6] flex justify-center items-center">
                <Image src={code} alt="brand_logo" />
              </div>
              <p
                className="text-[14px] font-black mt-2"
                style={{ color: "#343741" }}
              >
                해외 개발자 원격 채용
              </p>
              <p
                className="text-[14px] font-black mt-3"
                style={{ color: "##5E626F" }}
              >
                바로가기
              </p>
            </div>
            <div className="bg-white rounded-[12px] p-4 border-0 shadow-md">
              <div className="w-[40px] h-[40px] bg-[#EFF1F6] flex justify-center items-center">
                <Image src={code} alt="brand_logo" />
              </div>
              <p
                className="text-[14px] font-black mt-2"
                style={{ color: "#343741" }}
              >
                해외 개발자 원격 채용
              </p>
              <p
                className="text-[14px] font-black mt-3"
                style={{ color: "##5E626F" }}
              >
                바로가기
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap  gap-y-8 mt-10 p-4">
        <div className="w-full sm:w-1/2 md:w-1/4">
          <p className="text-[12px] font-black">상호명</p>
          <p className="text-[13px] font-black mt-4">하이퍼하이어</p>
          <p
            className="text-[13px] font-black mt-4"
            style={{ color: "#5E626F" }}
          >
            Hyperhire India Private Limited
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4">
          <p className="text-[12px] font-black">상호명</p>
          <p className="text-[13px] font-black mt-4">하이퍼하이어</p>
          <p
            className="text-[13px] font-black mt-4"
            style={{ color: "#5E626F" }}
          >
            Hyperhire India Private Limited
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4">
          <p className="text-[12px] font-black">상호명</p>
          <p className="text-[13px] font-black mt-4">하이퍼하이어</p>
          <p
            className="text-[13px] font-black mt-4"
            style={{ color: "#5E626F" }}
          >
            Hyperhire India Private Limited
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4">
          <p className="text-[12px] font-black">상호명</p>
          <p className="text-[13px] font-black mt-4">하이퍼하이어</p>
          <p
            className="text-[13px] font-black mt-4"
            style={{ color: "#5E626F" }}
          >
            D-138, Street number 11, Jagjeet Nagar,
            <br /> North East Delhi, New Delhi, 110053 India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
