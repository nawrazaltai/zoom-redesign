import {
  FaGraduationCap,
  FaBriefcaseMedical,
  FaBoxOpen,
  FaTag,
} from "react-icons/fa";
import { BsCurrencyDollar, BsBank2 } from "react-icons/bs";
import { useState, useEffect } from "react";
import Card from "./Card";

const cards = [
  { title: "Education", icon: <FaGraduationCap /> },
  { title: "Financial Services", icon: <BsCurrencyDollar /> },
  { title: "Government", icon: <BsBank2 /> },
  { title: "Healthcare", icon: <FaBriefcaseMedical /> },
  { title: "Manufacturing", icon: <FaBoxOpen /> },
  { title: "Retail", icon: <FaTag /> },
];

const words = ["connect", "create", "innovate"];

export default function MainContent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = () => setIndex((i) => i + 1);

    const id = setInterval(tick, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="flex flex-col mt-7 lg:w-full">
      <div className="lg:flex lg:flex-col lg:w-full lg:-mt-5">
        <div className="lg:flex lg:flex-col lg:h-full lg:w-full">
          <div className="lg:flex  lg:h-12/12 ">
            <section className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:mt-7 lg:w-full lg:pl-2">
              <h1 className="font-bold w-full pl-3 text-4xl font-open-sans text-navy md:text-5xl md:w-full lg:text-6xl lg:tracking-wide lg:w-full lg:pl-2">
                One platform to{" "}
                <span className="text-zoom-blue">
                  {words[index % words.length]}
                </span>
              </h1>
              <p className="mt-2 pl-3 text-base font-medium leading-5 text-slate-700 md:mt-4 md:pr-3 lg:text-2xl lg:pt-2 lg:pb-2 lg:w-full">
                Bring teams together, reimagine workspaces, engage new
                audiences, and delight your customers — all on the Zoom platform
                you know and love.
              </p>
            </section>
          </div>

          <div className="lg:flex">
            <section className="flex mt-5 flex-col lg:w-full lg:h-full ">
              <article className="flex p-4 font-bold border-b-2 border-slate-100 bg-sky-200 items-center justify-between w-full md:justify-around lg:flex lg:border-b-white lg:items-center lg:p-7 lg:border-b-2 lg:gap-5 lg:w-auto">
                <h2 className="text-blue-800 text-lg tracking-wide md:text-2xl lg:text-3xl lg:whitespace-nowrap">
                  Virtual Meetings
                </h2>
                <img
                  className=" w-36 md:w-44 lg:w-52"
                  src="/groupVideo.svg"
                  alt="Virtual meeting illustration"
                />
              </article>
              <article className="flex p-4 font-bold items-center justify-between bg-sky-200 w-full md:justify-around lg:flex lg:items-center lg:p-10 lg:gap-5 lg:w-auto">
                <img
                  className="w-44 md:w-48 lg:w-52"
                  src="/conferenceCall.svg"
                  alt="Virtual team chat illustration"
                />
                <h2 className="text-blue-800 text-lg mr-4 tracking-wide md:text-2xl lg:mr-0 lg:text-3xl lg:whitespace-nowrap">
                  Team Chat
                </h2>
              </article>
            </section>
          </div>
        </div>

        <section className="flex p-7 justify-center gap-3 w-full bg-gradient-to-r from-violet-700 via-blue-700 to-violet-700 md:p-12 lg:p-12 lg:gap-8">
          <button className=" font-semibold border-2 border-white text-white p-3 rounded md:p-5 lg:p-6 lg:text-xl">
            Plans & Pricing
          </button>
          <button className=" bg-white font-semibold text-blue-700 p-3 rounded md:p-5 lg:p-6 lg:text-xl">
            Sign Up, It's Free
          </button>
        </section>
      </div>

      <section className="bg-navy mt-12 flex flex-col pt-3 md:flex-row md:justify-start">
        <img
          className="flex m-auto w-80 md:absolute z-10 md:w-96 md:-mt-14 lg:w-96 lg:-mt-12 lg:absolute lg:ml-14"
          src="/zoom-product-wheel.png"
          alt=""
        />
        <div className="flex flex-col pb-3 md:gap-2 md:pt-5 md:items-start md:justify-center md:w-1/2 md:ml-auto md:mr-8 lg:mr-1/2 lg:justify-center lg:gap-6">
          <h2 className="text-white text-xl font-bold pl-8 font-open-sans tracking-wide md:text-2xl">
            Make work less work
          </h2>
          <span className="text-white pl-8 pr-5 mt-3">
            Securely connect and collaborate so you can work better together.
            Simple to manage and delightful to use, Zoom powers the modern
            workforce.
          </span>
          <a
            className=" text-left text-white pl-8 mt-3 font-bold pb-5 hover:text-sky-400"
            href="#"
          >
            Disover the Possibilities
          </a>
        </div>
      </section>

      <section className="flex flex-col p-3 pt-8 md:mt-14 md:flex-row md:justify-between md:items-center lg:justify-center lg:mt-24 lg:mb-24 lg:gap-40">
        <div className="md:flex md:flex-col md:items-start md:justify-start md:pl-3">
          <h2 className="text-navy font-bold text-xl md:w-80 md:pb-1 lg:text-3xl">
            Powering organizations across industries and geographies
          </h2>
          <p className="text-navy pt-4 md:w-80 lg:text-xl">
            Zoom helps consolidate communications, connect people, and
            collaborate better together in the boardroom, classroom, operating
            room, and everywhere in between.
          </p>
        </div>
        <div className=" grid gap-2 grid-cols-2 grid-rows-3 pt-5 md:pr-3">
          {cards.map((card) => {
            return <Card key={card.title} props={card} />;
          })}
        </div>
      </section>
      <article className="flex flex-col pt-12 pb-12 bg-zoom-blue items-center mt-5">
        <h2 className="font-extrabold text-2xl text-white">
          Ready to get started?
        </h2>
        <button className=" bg-teal-300 text-navy text-base font-semibold w-1/2 p-2 mt-5 rounded">
          Sign Up, It's Free
        </button>
        <button className="text-base font-semibold border-2 w-1/2 border-white text-white p-2 mt-3 rounded">
          Plans & Pricing
        </button>
      </article>
    </main>
  );
}
