import { FaGithub, FaEnvelope, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";
import rakib from "../assets/rakib.jpg";
import { FaFacebook } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import pet from "../assets/petadoption.png";
import bpl from "../assets/bpl.png";
import gadget from "../assets/gadgetheaven.png";
const AboutDev = () => {
  const handleMsg = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    toast.success(`Dear ${name}, Your message has been sent successfully`, {
      position: "top-center",
      autoClose: 3000,
      pauseOnHover: true,
      theme: "dark",
    });
    e.target.reset();
  };
  return (
    <div className="px-3">
      <div className="min-h-screen bg-logo rounded-3xl my-12 ">
        <div className="text-center py-10 bg-green-logo shadow-md rounded-t-3xl">
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <p className="text-lg text-white mt-2">Passionate Developer</p>
        </div>
        <div className="px-6 py-12 space-y-12">
          <section className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <img
              src={rakib}
              alt="Developer Avatar"
              className="w-60 h-60 rounded-full border-4 border-gray-300"
            />
            <div>
              <h2 className="text-2xl font-semibold text-logo">
                Mohammed Rakib Gazi
              </h2>
              <p className="mt-4 text-gray-600">
                This is Mohammed Rakib Gazi, an experienced Full Stack Web
                Developer with strong expertise in Digital Marketing and SEO.
                Alongside my technical career, I also serve as an Imam/Khatib,
                balancing both my professional and spiritual responsibilities.
                My education includes a Master’s in Al Hadith & Islamic Studies
                and another in English, reflecting my commitment to both
                academics and faith. I value leadership, effective
                communication, and critical thinking, which have shaped my
                career and religious roles.
              </p>
              <div className="mt-4 flex gap-4 text-xl">
                <a
                  href="https://github.com/rakib-gazi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl "
                >
                  <FaGithub className="text-4xl" />
                </a>
                <a
                  href="https://www.facebook.com/bd.gazi97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-4xl"
                >
                  <FaFacebook />
                </a>
                <a href="mailto:rakibdyd03@gmail.com" className="text-4xl">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </section>
          <section className="bg-gray-50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-logo text-center">
              Skills
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center cursor-pointer text-blue-500 transition">
                <SiJavascript className="text-4xl" />
                <span className="mt-2">JavaScript</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer text-blue-500 transition">
                <FaReact className="text-4xl" />
                <span className="mt-2">React</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer text-green-500 transition">
                <FaNodeJs className="text-4xl" />
                <span className="mt-2">Node.js</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer text-green-500 transition">
                <SiMongodb className="text-4xl" />
                <span className="mt-2">MongoDB</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer text-teal-500 transition">
                <SiTailwindcss className="text-4xl" />
                <span className="mt-2">Tailwind CSS</span>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-lg shadow-lg p-4 md:p-8">
            <h2 className="text-3xl font-semibold text-logo text-center">
              Projects
            </h2>
            <div className="mt-6 grid grid-cols-1  lg:grid-cols-3 gap-6">
              <div className="bg-logo hover:bg-green-logo rounded-lg shadow-md overflow-hidden">
                <img
                  src={gadget}
                  className="w-full h-60 md:h-96 object-cover rounded-3xl p-4"
                />
                <div className="pb-6 flex justify-center items-center">
                  <a
                    href="https://gadgetheavenph.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mt-4 text-green-logo bg-white px-8 py-3 rounded-xl font-bold text-xl"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="bg-logo hover:bg-green-logo rounded-lg shadow-md overflow-hidden">
                <img
                  src={bpl}
                  className="w-full h-60 md:h-96 object-cover rounded-3xl p-4"
                />
                <div className="pb-6 flex justify-center items-center">
                  <a
                    href="https://bpldreamteam.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mt-4 text-green-logo bg-white px-8 py-3 rounded-xl font-bold text-xl"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="bg-logo hover:bg-green-logo rounded-lg shadow-md overflow-hidden">
                <img
                  src={pet}
                  className="w-full h-60 md:h-96 object-cover rounded-3xl p-4"
                />
                <div className="pb-6 flex justify-center items-center">
                  <a
                    href="https://assignment6phero.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mt-4 text-green-logo bg-white px-8 py-3 rounded-xl font-bold text-xl"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gray-50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-logo text-center">
              Get in Touch
            </h2>
            <form
              onSubmit={handleMsg}
              className="mt-6 flex flex-col gap-4 max-w-md mx-auto"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-logo text-white py-3 rounded-lg hover:bg-green-logo transition"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutDev;
