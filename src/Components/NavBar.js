import React, { useEffect } from "react";
import "./NavBar.css";
import {
  Link,
  Text,
  useModal,
  Switch,
  changeTheme,
  useTheme,
} from "@nextui-org/react";
import Contact from "./Contact";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = () => {
  const { isDark } = useTheme();
  const { visible, setVisible } = useModal(false);
  const [scrolled, setScrolled] = React.useState(false);

  // This function handles the change of theme,
  // when the state of the dark mode switch changes
  const handleChange = () => {
    const nextTheme = isDark ? "light" : "dark";
    window.localStorage.setItem("data-theme", nextTheme);
    changeTheme(nextTheme);
  };

  // This function is called constantly when events is happening.
  // It changes the "scrolled" state, so that
  // the style of the nav bar changes dynamically
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  // Depends whether the screen is scrolled,
  // the css classes used by the navebar changes dynamically
  let x = ["navbar"];
  if (scrolled) {
    x.push("scrolled");
  }

  // This function is used to handle scroll to a specific section
  // in the homepage when a button in the Nav Bar is clicked
  const scollTo = (targetId) => {
    const anchor = document.querySelector(targetId);
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const openContactModal = () => {
    setVisible(true);
  };

  return (
    <header className={x.join(" ")}>
      <Text h2 css={{ color: "White" }}>
        Picasso Gallery
      </Text>

      <div className="flex flex-row flex-wrap items-end">
        <Switch
          color="secondary"
          checked={!isDark}
          onChange={handleChange}
          iconOn={<HiSun />}
          iconOff={<HiMoon />}
        />
        <Link className="mx-2" onClick={() => scollTo("#ExhibitionsTarget")}>
          Exhibitions
        </Link>
        <Link className="mx-2" onClick={() => scollTo("#ArtistsTarget")}>
          Artists
        </Link>
        <Link className="mx-2" onClick={() => scollTo("#AvailableWorkTarget")}>
          Works
        </Link>
        <Link className="mx-2" onClick={openContactModal}>
          Contact
        </Link>
      </div>
      <Contact isVisible={visible} setVisible={setVisible} />
    </header>
  );
};
export default Navbar;
