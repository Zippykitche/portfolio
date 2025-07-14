import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section relative">
      <div className="hero-content relative z-10">
        <div className="hero-text">
          <h2 className="hero-greeting">Hi, My name is</h2>
          <h1 className="hero-name"> Zipporah Kwamboka</h1>
          <h3 className="hero-title">
            I am a <span className="highlight">Software Engineer</span>
          </h3>
          <p className="hero-subtitle">I make the complex simple.</p>
          <div className="hero-action">
          <a
  href="/files/Zipporah CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-button flex items-center gap-2"
>
  My Resume
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</a>
        </div>
        </div>
        <div className="hero-image-container absolute bottom-10 top-0 right-0 z-0 flex items-center justify-center">
          <div className="relative w-fit">
            {/* Offset border box */}
            <div className="absolute top-7 left-6 w-full h-full border-2 [border-color:rgb(246,119,138)] rounded-xl z-0"></div>

            {/* Main image */}
            <img
              src="/images/profile4.jpg"
              alt="Zipporah Kwamboka"
              className="hero-image relative z-10 rounded-xl max-w-[300px]"
            />
          </div>
       </div>
      </div>
    </section>
  );
}
