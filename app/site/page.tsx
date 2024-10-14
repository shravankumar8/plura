
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { SignedOut, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
export default function Home() {
  return (
    <>
      <div className="relative pt-36 items-center justify-center flex  flex-col  text-white h-full w-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]  bg-slate-950">
        <div className="absolute  bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_3px,transparent_3px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:104px_104px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <p className="mt-[500px] text-center"> Run your agency in one place</p>

        <div className="bg-gradient-to-r from-sky-500 to-slate-400 text-transparent bg-clip-text relative">
          <h1 className="text-9xl  font-bold text-center md:text-[300px]">
            PLURA
          </h1>
        </div>
        <div className="flex justify-center items-center relative">
          <CardContainer className="">
            <CardBody className="  group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-full  mx-auto h-auto  ">
              <CardItem
                translateZ="100"
                className="min-w-[300px] sm:min-w-[500px] md:min-w-[800px] lg:min-w-[1000px] xl:min-w-[1200px] max-w-[1200px] w-full mt-4"
              >
                <div className=" rounded-t-3xl p-1 bg-gradient-to-t from-blue-700 to-pink-400  justify-center  ">
                  <Image
                    className=" rounded-t-3xl "
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
