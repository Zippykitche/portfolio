import { FaPencilRuler, FaCode, FaLaptopCode, FaUserAlt, FaHeadset, FaFlag } from "react-icons/fa";


export default function Services() {
  return (
    <section id="services" className="services-section bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-8xl font-bold text-[rgb(246,119,138)] opacity-14 mb-2">My Services</p>
        <h2 className="text-4xl font-bold mb-12">What Can I Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Item */}
          <div className="service-card bg-[#1f1f1f] p-6 rounded-xl shadow-sm">
            <FaPencilRuler className="text-[rgb(246,119,138)] text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Creative Design</h3>
            <p className="text-gray-400 text-sm">
              Leveraging artistic elements and aesthetic principles to craft visually appealing and engaging user experiences.
            </p>
          </div>

          <div className="service-card bg-[#1f1f1f] p-6 rounded-xl shadow-sm">
            <FaCode className="text-[rgb(246,119,138)] text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-400 text-sm">
              Writing code that is well-structured, readable, and maintainable. It involves following coding best practices.
            </p>
          </div>

          <div className="service-card bg-[#1f1f1f] p-6 rounded-xl shadow-sm">
            <FaLaptopCode className="text-[rgb(246,119,138)] text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">User Interface</h3>
            <p className="text-gray-400 text-sm">
              Creating intuitive and user-friendly designs that prioritize usability, accessibility, and a seamless user experience.
            </p>
          </div>

          <div className="service-card bg-[#1f1f1f] p-6 rounded-xl shadow-sm">
            <FaUserAlt className="text-[rgb(246,119,138)] text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">User Experience</h3>
            <p className="text-gray-400 text-sm">
              Understanding user behaviors and preferences to create interfaces that are intuitive and efficient.
            </p>
          </div>

          <div className="service-card bg-[#1f1f1f] p-6 rounded-xl shadow-sm">
            <FaHeadset className="text-[rgb(246,119,138)] text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Fast Support</h3>
            <p className="text-gray-400 text-sm">
              Addressing and resolving user-reported issues or inquiries related to the website or application.
            </p>
          </div>

          <div className="service-card bg-[#1f1f1f] p-6 rounded-xl shadow-sm">
            <FaFlag className="text-[rgb(246,119,138)] text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Branding</h3>
            <p className="text-gray-400 text-sm">
              Creating cohesive brand experiences through the use of logos, color schemes, typography, and other brand assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
