import React from "react";
import { Navbar } from "./Components/NavBar";

interface Props {
  children: React.ReactNode;
}

const BodyWithRedux: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full bg-yellow-500 h-fit">
      <Navbar />
      <div className="bg-green-300 h-[110vh] w-full mt-8">{children}</div>
    </div>
  );
};

export default BodyWithRedux;
