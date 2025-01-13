"use client";

import Image from "next/image";
import next from "@/public/next-js.svg";
import react from "@/public/react.svg";
import javascript from "@/public/logo-javascript.svg";
import typescript from "@/public/typescript.svg";
import html from "@/public/html-1.svg";
import css from "@/public/css-3.svg";
import tailwind from "@/public/tailwind-css-2.svg";
import bootstrap from "@/public/bootstrap-5-1.svg";
import nodejs from "@/public/nodejs-3.svg";
import mongodb from "@/public/mongodb-icon-1.svg";
import mySql from "@/public/mysql-logo-pure.svg";
import redux from "@/public/redux.svg";
import git from "@/public/git-icon.svg";
import github from "@/public/github-icon-1.svg";
import materialUi from "@/public/material-ui-1.svg";
import shadCn from "@/public/shadcn-ui-seeklogo.svg";

const skillsObj = [
  {
    src: next.src,
    text: "Next Js",
  },
  {
    src: react.src,
    text: "React Js",
  },
  {
    src: redux.src,
    text: "redux",
  },
  {
    src: javascript.src,
    text: "Javascript",
  },
  {
    src: typescript.src,
    text: "typescript",
  },
  {
    src: html.src,
    text: "html",
  },
  {
    src: css.src,
    text: "css",
  },
  {
    src: tailwind.src,
    text: "tailwind",
  },
  {
    src: bootstrap.src,
    text: "bootstrap",
  },
  {
    src: nodejs.src,
    text: "node js",
  },
  {
    src: mongodb.src,
    text: "mongodb",
  },
  {
    src: mySql.src,
    text: "mySql",
  },
  {
    src: git.src,
    text: "git",
  },
  {
    src: github.src,
    text: "github",
  },
  {
    src: materialUi.src,
    text: "material Ui",
  },
  {
    src: shadCn.src,
    text: "shadcn ui",
  },
];

export default function Skills() {
  return (
    <div className="w-full">
      <h1 className="main-heading">
        SKILLS
      </h1>
      <div className="w-full flex lg:flex-row flex-col justify-center lg:justify-start items-center mt-12 lg:mt-24 gap-5">
        <div className="w-full h-full grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {skillsObj.map((item, key) => (
            <Boxes key={key} src={item.src} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Props {
  src: string;
  text: string;
}

function Boxes({ text, src }: Props) {
  return (
    <div className="pt-6 p-5 flex flex-col justify-between items-center gap-4 bg-white rounded-lg">
      <Image
        src={src}
        alt="Next js"
        width={0}
        height={50}
        className="h-[50px] w-auto"
      />
      <h4 className="text-lg bg-red-70 font-normal bg-green-40 leading-none capitalize">
        {text}
      </h4>
    </div>
  );
}
