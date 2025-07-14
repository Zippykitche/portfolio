import "./About.css";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiPostgresql,
  SiFirebase,
  SiExpress,
  SiFlask,
} from "react-icons/si";


export default function About() {
    return (
        <section id="about" className="about-section">
      <div className="about-content">
         <div className="about-image-container">
          <div className="relative w-fit">
            {/* Offset border box */}
            <div className="absolute top-7 left-6 w-full h-full border-2 [border-color:rgb(246,119,138)] rounded-xl z-0"></div>

            {/* Main image */}
            <img
              src="/images/profile3.jpg"
              alt="Zipporah Kwamboka"
              className="about-image relative z-10 rounded-xl max-w-[300px]"
            />
          </div>
          </div>
        <div className="about-text-content">
        <h2 className="about-heading text-8xl font-bold text-[rgb(246,119,138)] opacity-11 mb-2 ">About Me</h2>
         <h3 className="text-2xl font-semibold mb-2">
            My name is <span className="highlight">Zipporah</span>
          </h3>
        <p className="text-gray-400 text-xl mb-4 font-semibold">Software Engineer</p>
        <p className="about-text">
          I'm <span className="highlight">Zipporah Kwamboka</span>, a passionate and detail-oriented software developer based in Nairobi, Kenya.
           I specialize in building intuitive and elegant web applications with a strong focus on user experience and clean, scalable code.
        </p>
        <p className="about-text">
          I enjoy crafting responsive interfaces and solving complex problems through thoughtful,
         efficient solutions. My goal is to create digital products that are not just functional, but truly enjoyable to use.
        </p>
     <div className="mt-6">
            <p className="about-text">Here are few Technologies I've been working with recently:</p>
            <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
    <div className="flex flex-col items-center text-center w-20">
      <FaReact className="text-blue-500 text-2xl mb-1" />
      <span>React</span>
    </div>
    <div className="flex flex-col items-center text-center w-20">
      <FaNodeJs className="text-green-600 text-2xl mb-1" />
      <span>Node.js</span>
    </div>
    <div className="flex flex-col items-center text-center w-20">
      <SiMongodb className="text-green-500 text-2xl mb-1" />
      <span>MongoDB</span>
    </div>
    <div className="flex flex-col items-center text-center w-20">
      <SiTailwindcss className="text-cyan-500 text-2xl mb-1" />
      <span>Tailwind</span>
    </div>
    <div className="flex flex-col items-center text-center w-20">
      <SiNextdotjs className="text-black text-2xl mb-1" />
      <span>Next.js</span>
    </div>
    <div className="flex flex-col items-center text-center w-20">
      <FaFigma className="text-pink-500 text-2xl mb-1" />
      <span>Figma</span>
    </div>
    <div className="flex flex-col items-center text-center w-20">
      <FaPython className="text-yellow-600 text-2xl mb-1" />
      <span>Python</span>
    </div>
    <div className="flex flex-col items-center text-center w-20">
      <SiJavascript className="text-yellow-400 text-2xl mb-1" />
      <span>JavaScript</span>
    </div>
    <div className="flex flex-col items-center text-center w-20">
      <SiFlask className="text-gray-500 text-2xl mb-1" />
      <span>Flask</span>
    </div>
    <div className="flex flex-col items-center text-center w-20">
      <SiPostgresql className="text-blue-700 text-2xl mb-1" />
      <span>PostgreSQL</span>
    </div>
    <div className="flex flex-col items-center text-center w-20">
      <SiFirebase className="text-yellow-500 text-2xl mb-1" />
      <span>Firebase</span>
    </div>
    <div className="flex flex-col items-center text-center w-20">
      <FaGitAlt className="text-red-500 text-2xl mb-1" />
      <span>Git</span>
    </div>
    <div className="flex flex-col items-center text-center w-20">
      <SiExpress className="text-gray-700 text-2xl mb-1" />
      <span>Express.js</span>
    </div>
    <div className="flex flex-col items-center text-center w-20">
      <FaBootstrap className="text-purple-500 text-2xl mb-1" />
      <span>Bootstrap</span>
    </div>
    </div>
          </div>
        </div>
      </div>
    </section>

  );
}