"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePic from "../public/IMG-20241208-WA0041.jpg";
export default function Home() {
  return (
    <div className="w-full">
      <h1 className="w-fit mx-auto text-4xl text-gray-400 mt-3 lg:mt-10 tracking-widest uppercase">
        ABOUT
      </h1>
      <div className="w-full flex lg:flex-row flex-col justify-center lg:justify-start items-center mt-12 lg:mt-24 gap-5">
        <Avatar className="w-52 h-52 rounded-md">
          <AvatarImage
            className="object-cover rounded-3xl"
            src={profilePic.src}
          />
          <AvatarFallback className="rounded-3xl">
            Profile Picture
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl xs:text-3xl font-bold  text-center lg:text-start">
            Ahmad Raza
          </h2>
          <p
            className="text-md xs:text-lg text-center lg:text-justify xl:text-start pt-2 w-full xl:w-[600px] pe-2"
            style={{ lineHeight: "140%" }}
          >
            I am a passionate MERN stack developer with one year of hands-on
            experience building and deploying dynamic web applications. Having
            worked on various MERN stack projects, I have gained valuable skills
            in creating user-friendly and efficient solutions. Currently, I am
            in my 5th semester of studies, constantly enhancing my knowledge and
            expertise in web development to deliver innovative and reliable
            applications.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
