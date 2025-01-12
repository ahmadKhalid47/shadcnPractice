"use client";

export default function Experience() {
  return (
    <div className="w-full">
      <h1 className="w-fit mx-auto text-4xl text-gray-400 mt-3 lg:mt-10 tracking-widest uppercase">
        experience
      </h1>
      <div className="w-full mt-12 lg:mt-24 bg-red-60 h-fit flex flex-col justify-start items-center">
        <span className="mx-auto bg-white px-4 py-1 rounded-md">
          January 2025
        </span>
        <div className="w-full h-fit flex justify-center items-center bg-green-60 relative py-4">
          <div className="h-full w-2 bg-white translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%]"></div>
          <div className="w-full flex justify-between items-center gap- bg-green-40">
            <div className="bg-orange-60 w-[40%] text-end text-lg">
              May 2024 - January 2025
            </div>
            <div className="bg-orange-60 w-[40%] ">
              <h2 className="text-xl xs:text-2xl font-bold  text-center lg:text-start">
                Soft Enterprise
              </h2>
              <p
                className="text-sm xs:text-base text-center lg:text-justify xl:text-start pt-2 w-full xl:w-[60%] pe-2"
                style={{ lineHeight: "140%" }}
              >
                During this period, I worked as a Junior
                <i className="font-bold"> MERN Stack Developer </i>
                and contributed to several projects, primarily focused on client
                and company CRM systems as well as SaaS applications. I played a
                key role in optimizing the performance of these applications,
                ensuring they were scalable and efficient. I consistently
                leveraged the latest technologies and best practices in web
                development to deliver high-quality solutions. Additionally, I
                collaborated with cross-functional teams to implement innovative
                features, enhance user experiences, and maintain robust
                application security standards.{" "}
              </p>
            </div>
          </div>
          <div className="w-fit h-fit  translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%]">
            <div className="w-fit h-fit relative">
              <div className="w-5 h-5 bg-foreground border-4 border-white rounded-full translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%]"></div>
              <div className="w-40 h-1 bg-white rounded-full "></div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center items-center bg-green-60 relative py-4">
          <div className="h-full w-2 bg-white translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%]"></div>
          <div className="w-full flex justify-between items-center gap- bg-green-40">
            <div className="bg-orange-60 w-[40%] text-end text-lg">
              February 2024 - May 2024
            </div>
            <div className="bg-orange-60 w-[40%] ">
              <h2 className="text-xl xs:text-2xl font-bold  text-center lg:text-start">
                Soft Enterprise
              </h2>
              <p
                className="text-sm xs:text-base text-center lg:text-justify xl:text-start pt-2 w-full xl:w-[60%] pe-2"
                style={{ lineHeight: "140%" }}
              >
                Earlier, I worked as a
                <i className="font-bold"> MERN Stack Intern</i>, where I
                developed a Company Proposal Manager application and gained
                hands-on experience with modern tools and frameworks. During
                this time, I also expanded my skill set by learning and
                implementing Next.js, further enhancing my proficiency in
                building dynamic and efficient web applications.{" "}
              </p>
            </div>
          </div>
          <div className="w-fit h-fit  translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%]">
            <div className="w-fit h-fit relative">
              <div className="w-5 h-5 bg-foreground border-4 border-white rounded-full translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%]"></div>
              <div className="w-40 h-1 bg-white rounded-full "></div>
            </div>
          </div>
        </div>
        <span className="mx-auto bg-white px-4 py-1 rounded-md">
          February 2024
        </span>
      </div>
    </div>
  );
}
