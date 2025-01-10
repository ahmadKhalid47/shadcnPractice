import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Github, Linkedin } from "lucide-react";

export function Navbar() {
  return (
    <div className="w-full h-fit sticky top-2 flex justify-between items-center">
      <SidebarTrigger />
      <div className="flex justify-start items-center gap-3">
        <a
          href="https://drive.google.com/file/d/1yMEWbeH8t8gUJfA2SD9V0CaRXLVAjfzg/view?usp=drive_link"
          target="_blank"
        >
          <Button>Resume</Button>
        </a>
        <a
          href="https://www.linkedin.com/in/ahmadraza47/"
          target="_blank"
          className="hover:text-white"
        >
          <Linkedin />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmadraza47/"
          target="_blank"
          className="hover:text-white"
        >
          <Github />
        </a>
      </div>
    </div>
  );
}
