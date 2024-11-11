import { useState } from "react";
import { Button } from "@material-tailwind/react";

import MyNavbar from "@components/Navbar/MyNavbar";
import NavList from "@components/Navbar/NavList";
import HeroSection from "./components/HeroSection";

import "./About.css";

function About() {
  const name = "Muhammad Fatihul Iqmal";
  const tech = "Fullstack Web Developer";

  const [count, setCount] = useState(0);

  return (
    <>
      <MyNavbar>
        <NavList active={"about"} />
      </MyNavbar>
      <div className="content">
        <HeroSection name={name} tech={tech} />

        <Button
          variant="outlined"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default About;
