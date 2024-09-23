import { Link } from "react-router-dom";
import DFYN from "../assets/DFYN.png";
import NITRO from '../assets/NITRO.png'
import NITROEXPLORER from '../assets/NITROEXPLORER.png'
import github from "../assets/github.svg";
import link from "../assets/link.svg";

const Projects = [
  {
    projectName: "DFYN Exchange",
    image: DFYN,
    description:
      "DFYN Exchange is a decentralized exchange built on the Ethereum blockchain. It allows users to trade cryptocurrencies with each other in a secure and transparent manner.",
    githubLink: "",
    hostedLink: "https://exchange.dfyn.network/",
  },
  {
    projectName: "Router Nitro Explorer | Track Cross-chain Transaction on Nitro",
    image: NITROEXPLORER,
    description:
      "Build a tool to visualize and track cross-chain transactions on Nitro, providing a graphical representation for easy monitoring and analysis",
    githubLink: "",
    hostedLink: "https://app.routernitro.com/",
  },
  {
    projectName: "Router Nitro: Cross-chain bridge powered by Router Chain",
    image: NITRO,
    description:
      "Enable fast, efficient cross-chain swaps with optimized gas usage, low fees, and quick transaction finality.",
    githubLink: "",
    hostedLink: "",
  },
];

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center pt-24 pb-9 lg:pt-32">
          <span className="font-semibold block my-5">Portfolio</span>
          <h1 className="text-3xl lg:text-5xl font-bold my-5 text-center lg:text-start break-words">
            Selected projects
          </h1>
          {Projects &&
            Projects.map((project, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center bg-white shadow-2xl pb-4 my-12 lg:pb-0 lg:flex-row sm:w-[70%]"
              >
                <div
                  className={`h-56 w-full lg:h-[60vh] lg:basis-2/3
                  ${index % 2 == 0 ? "lg:order-2 " : ""}`}
                >
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-contain px-2"
                  />
                </div>

                <div className="flex flex-col text-center px-5 lg:basis-1/2 lg:px-5 lg:py-9">
                  <h2 className="text-2xl font-bold my-5 lg:text-3xl lg:my-7">
                    {project.projectName}
                  </h2>
                  <p className="text-gray-600 my-5">{project.description}</p>
                  <div className="flex justify-center gap-x-4 lg:gap-x-9 my-5">
                    <Link
                      to={project.githubLink}
                      className="flex gap-2 items-center font-semibold"
                    >
                      Code <img src={github} alt="" className="w-7 h-7" />
                    </Link>
                    <Link
                      to={project.hostedLink}
                      className="flex gap-2 items-center font-semibold"
                    >
                      Demo <img src={link} alt="" className="w-7 h-7" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
