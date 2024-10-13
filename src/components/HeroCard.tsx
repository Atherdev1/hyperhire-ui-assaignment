import Image from "next/image";
import market from "../images/market.svg";
import ProfileCarousel from "./ProfileCarousel";

type Props = {};

const HeroCard = (props: Props) => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col">
        
        <div className="hidden xl:flex">
          <div className="w-3/5">
            <div className="grid grid-rows-4 grid-cols-[40%,60%] gap-0 items-start">
              <div className="p-4 text-right text-yellow-300 font-black">
                FadeIn after title and subtitle shown(delay 300ms)
              </div>
              <div className="p-4">
                <button className="text-cyan-500 bg-white border-none rounded-[4px] text-[18px] font-black px-4 py-2">
                  풀타임, 파트타임
                </button>
              </div>
              <div className="p-4 text-right text-yellow-300 font-black">
                FadeInUp(duration 500ms)
              </div>
              <div className="p-4">
                <p className="text-[48px] font-black text-white px-4">
                  최고의 실력을 가진 <br />
                  외국인 인재를 찾고 계신가요?
                </p>
              </div>
              <div className="p-4 text-right text-yellow-300 font-black">
                FadeInUp(500ms)
              </div>
              <div className="p-4">
                <p className="text-[24px] font-black text-white px-4 mb-4">
                  법률 및 인사관리 부담없이 <br /> 1주일 이내에 원격으로
                  채용해보세요.
                </p>
                <p className="text-[24px] font-black text-white px-4">
                  개발자가 필요하신가요?
                </p>
              </div>
              <div className="p-4 text-right text-yellow-300 font-black">
                fade in 3 at once(500ms)
              </div>
              <div className="p-4">
                <div className="flex">
                  <div className="flex-1 px-4">
                    <hr className="w-full h-1 bg-white border-none" />
                    <p className="text-[18px] font-black text-white px-4">
                      평균 월 120만원
                    </p>
                    <p className="text-[16px] font-bold text-white px-4">
                      임금을 해당 국가를 기준
                      <br />
                      으로 계산합니다.
                    </p>
                  </div>
                  <div className="flex-1 px-4">
                    <hr className="w-full h-1 bg-white border-none" />
                    <p className="text-[18px] font-black text-white px-4">
                      평균 월 120만원
                    </p>
                    <p className="text-[16px] font-bold text-white px-4">
                      임금을 해당 국가를 기준
                      <br />
                      으로 계산합니다.
                    </p>
                  </div>
                  <div className="flex-1 px-4">
                    <hr className="w-full h-1 bg-white border-none" />
                    <p className="text-[18px] font-black text-white px-4">
                      평균 월 120만원
                    </p>
                    <p className="text-[16px] font-bold text-white px-4">
                      임금을 해당 국가를 기준
                      <br />
                      으로 계산합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 p-4">
            <ProfileCarousel />
          </div>
        </div>
       
        <div className="xl:hidden flex flex-col items-center p-4">
          <p className="text-[28px] font-black text-white text-center mb-4">
            최고의 실력을 가진 <br />
            외국인 인재를 찾고 계신가요?
          </p>
          <p className="text-[20px] font-black text-white text-center mb-4">
            법률 및 인사관리 부담없이 <br /> 1주일 이내에 원격으로 채용해보세요.
          </p>
          <div className="w-full">
            <ProfileCarousel />
          </div>
        </div>

        <div className="flex">
        
          <div className="w-[24%] p-4 hidden xl:block">
            <div className="p-4 text-right text-yellow-300 font-black">
              FadeInUp (duration 500ms)
            </div>
          </div>

         
          <div className="w-full xl:w-[76%] p-4">
            <div className="flex overflow-x-auto gap-[10px] no-scrollbar">
              <div className="bg-white bg-opacity-20 rounded-[16px] p-4 border-none flex items-center gap-x-4 min-w-[300px]">
                <div className="w-[60px] h-[60px] bg-white bg-opacity-40 rounded-[16px] flex justify-center items-center">
                  <Image
                    src={market}
                    alt="Centered Image"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="text-[24px] font-black text-white">해외 마케팅</p>
              </div>

              <div className="bg-white bg-opacity-20 rounded-[16px] p-4 border-none flex items-center gap-x-4 min-w-[300px]">
                <div className="w-[60px] h-[60px] bg-white bg-opacity-40 rounded-[16px] flex justify-center items-center">
                  <Image
                    src={market}
                    alt="Centered Image"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="text-[24px] font-black text-white">해외 마케팅</p>
              </div>

              <div className="bg-white bg-opacity-20 rounded-[16px] p-4 border-none flex items-center gap-x-4 min-w-[300px]">
                <div className="w-[60px] h-[60px] bg-white bg-opacity-40 rounded-[16px] flex justify-center items-center">
                  <Image
                    src={market}
                    alt="Centered Image"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="text-[24px] font-black text-white">해외 마케팅</p>
              </div>

              <div className="bg-white bg-opacity-20 rounded-[16px] p-4 border-none flex items-center gap-x-4 min-w-[300px]">
                <div className="w-[60px] h-[60px] bg-white bg-opacity-40 rounded-[16px] flex justify-center items-center">
                  <Image
                    src={market}
                    alt="Centered Image"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="text-[24px] font-black text-white">해외 마케팅</p>
              </div>

              <div className="bg-white bg-opacity-20 rounded-[16px] p-4 border-none flex items-center gap-x-4 min-w-[300px]">
                <div className="w-[60px] h-[60px] bg-white bg-opacity-40 rounded-[16px] flex justify-center items-center">
                  <Image
                    src={market}
                    alt="Centered Image"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="text-[24px] font-black text-white">해외 마케팅</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
