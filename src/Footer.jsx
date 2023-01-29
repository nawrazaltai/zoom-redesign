import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const socialIcons = [
  {
    icon: <FaFacebookF />,
    id: 1,
  },
  { icon: <FaTwitter />, id: 2 },
  {
    icon: <FaLinkedinIn />,
    id: 3,
  },
  { icon: <FaInstagram />, id: 4 },
  { icon: <FaYoutube />, id: 5 },
];

const footerLinks = ["About", "Download", "Sales", "Support"];

export default function Footer() {
  return (
    <div className="flex flex-col bg-gray-600 pt-8">
      <section className="flex justify-center gap-3 w-full pb-1">
        {socialIcons.map((icon) => {
          return (
            <p
              key={icon.id}
              className="text-gray-600 text-lg rounded-2xl bg-stone-100 p-2"
            >
              {icon.icon}
            </p>
          );
        })}
      </section>
      <ul className="flex justify-center items-center">
        {footerLinks.map((link) => {
          return (
            <li key={link} className="text-stone-100 font-light p-3 text-base">
              {link}
            </li>
          );
        })}
      </ul>
      <p className="text-xs text-center text-stone-100 pt-5 pb-8">
        Copyright ©2023 Zoom Video Communications, Inc. All rights reserved.
      </p>
    </div>
  );
}
