const About = () => {
  return (
    <section className="section" id="about">
      <div className="relative h-screen container mx-auto">
        <div className="w-full items-center pt-24 lg:w-[72%] lg:mx-auto lg:pt-48">
          <div className="w-full flex flex-col lg:flex-row">
            {/* Image area */}
            <div className="w-full h-52 lg:w-1/3 lg:h-[24rem] overflow-hidden bg-gradient-to-r from-orange-500 to-violet-500">
              {/* <img
                src={profile}
                alt=""
                className="relative scale-[2.1] top-20 -rotate-6"
              /> */}
            </div>

            {/* text */}
            <div className="flex flex-col items-center px-4 lg:pl-9 lg:items-start lg:w-2/3">
              <span className="font-semibold block my-5">About Me</span>
              <h1 className="text-3xl font-bold break-words my-5 text-center lg:text-start lg:text-5xl">
                Full-Stack & Blockchain Developer based in Delhi, India.
              </h1>
              <p className="text-center lg:text-start text-gray-600">
                Hi I&apos;m a seasoned Full-stack Developer and Blockchain
                Developer with over 5 years of experience. Based in Delhi,
                India, I&apos;m passionate about building robust, scalable
                solutions that merge cutting-edge technology with user-friendly
                design. My expertise spans web and blockchain development,
                creating innovative applications that drive digital
                transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
