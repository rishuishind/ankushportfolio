
const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container h-full mx-auto">
        <div className="w-full items-center pt-24 lg:w-[72%] lg:mx-auto lg:pt-48">
          <div className="w-full flex flex-col lg:flex-row">
            {/* contact info */}
            <div className="w-full flex flex-col text-center py-5 mb-5 lg:mb-0 lg:text-start lg:items-start">
              <h1 className="font-bold text-4xl lg:text-5xl">Contact</h1>
              <div className="my-5">
                <p className="font-bold text-lg my-2">Phone Number</p>
                <a href="tel:+918826709142">+91 98722 92227</a>
              </div>

              <div>
                <p className="font-bold text-lg my-2">Email</p>
                <a href="mailto:rishabhsharma2348@gmail.com">
                  kumarankush14398@gmail.com
                </a>
              </div>
            </div>

            {/* form */}
            <div className="w-full flex flex-col items-center px-4 my-5 lg:my-0 lg:items-start">
              <form className="relative">
                <h1 className="font-bold text-2xl lg:text-4xl">
                  Leave your contact info - hear from me the same day!
                </h1>

                <div className="my-5 lg:my-7">
                  <label
                    htmlFor="name"
                    className="font-semibold tracking-wide block"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="outline-0 block px-3 w-full h-[3rem] bg-transparent border-b-black border-b-2"
                    placeholder="Your Name"
                  />
                </div>
                <div className="my-5 lg:my-7">
                  <label
                    htmlFor="phone"
                    className="font-semibold tracking-wide block"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="phone"
                    minLength={10}
                    className="appearance-none outline-0 block px-3 w-full h-[3rem] bg-transparent border-b-black border-b-2"
                    placeholder="Your Number"
                  />
                </div>
                <div className="my-5 lg:my-7">
                  <label
                    htmlFor="email"
                    className="font-semibold tracking-wide block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    minLength={10}
                    className="appearance-none outline-0 block px-3 w-full h-[3rem] bg-transparent border-b-black border-b-2"
                    placeholder="Your Email"
                  />
                </div>
                <div className="my-5 lg:my-7">
                  <textarea
                    id="message"
                    className="appearance-none outline-0 block px-3 w-full h-[3rem] bg-transparent border-b-black border-b-2"
                    placeholder="Your Message"
                  />
                </div>

                <button
                  type="submit"
                  className="tracking-wide px-7 py-2 rounded-full bg-green-300 font-semibold text-green-800 outline-0 my-5 transition-all duration-500 cursor-pointer lg:px-11 hover:lg:px-0 lg:w-24 lg:h-24 lg:absolute lg:-bottom-32 lg:right-14"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
