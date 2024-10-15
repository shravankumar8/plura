import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative pt-36 items-center justify-center flex  flex-col dark:text-white text-black h-full w-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] dark:bg-slate-900 bg-white-950">
        <div className="absolute   bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_3px,transparent_3px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:104px_104px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <p className="mt-[500px] text-center"> Run your agency in one place</p>

        <div className="bg-gradient-to-r from-sky-800 to-slate-600 dark:from-sky-500  dark:to-slate-400 text-transparent bg-clip-text relative">
          <h1 className="text-9xl  font-bold text-center md:text-[300px]">
            PLURA
          </h1>
        </div>

        <div className="flex justify-center items-center relative">
          <CardContainer className="">
            <CardBody className="  group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  w-full  mx-auto h-auto  ">
              <CardItem
                translateZ="100"
                className="min-w-[300px] sm:min-w-[500px] md:min-w-[800px] lg:min-w-[1000px] xl:min-w-[1200px] max-w-[1200px] w-full mt-4"
              >
                <div className=" rounded-t-3xl p-1 bg-gradient-to-t from-blue-700 to-pink-400  justify-center  ">
                  <Image
                    className=" invert-[.90] dark:invert-0 transition-transform duration-300 rounded-t-3xl "
                    src={"/assets/preview.png"}
                    height={1200}
                    width={1200}
                    alt="banner img"
                  />
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </>
  );
}
