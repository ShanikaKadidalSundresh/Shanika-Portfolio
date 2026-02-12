import React from "react";
import { profile } from "./data/profile";
import { SectionTitle, Chip, PrimaryButton, GhostButton, Icons } from "./components/ui";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-100">
      <div className="container-max flex items-center justify-between py-3">
      <a href="#" className="font-bold text-lg text-slate-900 tracking-tight">
        {profile.name}
        </a>


        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-slate-700 inline-flex items-center gap-2"
        >
          <Icons.github size={18} />
          GitHub
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="grad-bg">
      <div className="container-max pt-20 pb-16 text-center">

        {/* Profile Photo */}
        <div className="mx-auto h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full overflow-hidden ring-4 ring-white shadow-2xl transition duration-300 hover:scale-105">
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="mt-8 text-5xl sm:text-7xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-slate-900 to-violet-700 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600">
          {profile.tagline}
        </p>

        {/* Contact Info (Clickable) */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-600">

          {/* Location */}
          <a
            href="https://www.google.com/maps/place/Chicago,+IL"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-violet-600 transition"
          >
            <Icons.map size={18} />
            {profile.location}
          </a>

          {/* Phone */}
          <a
            href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2 hover:text-violet-600 transition"
          >
            <Icons.phone size={18} />
            {profile.phone}
          </a>

          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 hover:text-violet-600 transition"
          >
            <Icons.mail size={18} />
            {profile.email}
          </a>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <PrimaryButton href={profile.links.linkedin} icon={Icons.linkedin}>
            LinkedIn
          </PrimaryButton>

          <GhostButton href={profile.links.github} icon={Icons.github}>
            GitHub
          </GhostButton>

          <PrimaryButton href={profile.links.resume} icon={Icons.file}>
            Resume
          </PrimaryButton>

        </div>

      </div>
    </div>
  );
}
function ResumeSection() {
  return (
    <section className="section bg-white text-center">
      <div className="container-max">

        <a
          href={profile.links.resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-violet-600 text-white font-semibold shadow-lg hover:bg-violet-700 transition"
        >
          <Icons.file size={22} />
          Download Resume
        </a>

      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container-max">
        <SectionTitle title="About Me" />

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          {/* Left: Illustration */}
          <div className="flex justify-center md:justify-start">
            <img
              src={profile.aboutImage}
              alt="About illustration"
              className="w-80 mx-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right: About text */}
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-center md:text-left">
            {profile.about.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section bg-slate-50">
      <div className="container-max">
        <SectionTitle title="Education" />
        <div className="mt-12 space-y-8">
          {profile.education.map((e) => (
            <div key={e.degree} className="card p-7">
              <h3 className="text-xl font-extrabold">{e.degree}</h3>
              <p className="text-violet-600 font-semibold">{e.school}</p>
              <p className="text-slate-600 mt-2">
                {e.dates} • {e.place}
              </p>
              <p className="badge mt-3">GPA: {e.gpa}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-max">
        <SectionTitle title="Experience" />

        <div className="mt-12 space-y-8">
          {profile.experience.map((x) => (
            <div key={x.title} className="card p-7">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-extrabold">{x.title}</h3>
                  <p className="text-violet-600 font-semibold">{x.org}</p>
                </div>

                <div className="flex gap-3 pt-1">
                  {x.github && (
                    <a
                      href={x.github}
                      target="_blank"
                      rel="noreferrer"
                      title="View GitHub"
                      className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-violet-600 shadow-soft transition"
                    >
                      <Icons.github size={18} />
                    </a>
                  )}

                  {x.certificate && (
                    <a
                      href={x.certificate}
                      target="_blank"
                      rel="noreferrer"
                      title="View Certificate"
                      className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-violet-600 shadow-soft transition"
                    >
                      <Icons.cap size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-600 mt-2">
                {x.dates} • {x.place}
              </p>

              <ul className="mt-4 space-y-2 text-slate-600">
                {x.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {x.chips.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section bg-slate-50">
      <div className="container-max">
        <SectionTitle title="Skills" />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {profile.skills.map((s) => (
            <div key={s.title} className="card p-6">
              <h3 className="font-extrabold">{s.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <Chip key={i}>{i}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-max">
        <SectionTitle title="Projects" />

        <div className="mt-12 space-y-10">
          {profile.projects.map((p) => (
            <div key={p.title} className="card p-7">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-extrabold">{p.title}</h3>
                  <p className="text-slate-600 mt-2">{p.dates}</p>
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    title="View GitHub Repository"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-violet-600 shadow-soft transition"
                  >
                    <Icons.github size={18} />
                  </a>
                )}
              </div>

              {p.summary && <p className="mt-4 text-slate-600">{p.summary}</p>}

              <ul className="mt-4 space-y-2 text-slate-600">
                {p.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section bg-slate-50">
      <div className="container-max">
        <SectionTitle title="Certifications" />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {profile.certifications.map((c) => (
            <div
              key={c.title}
              className="card p-12 min-h-[210px] flex justify-between items-start gap-8"
            >
              <div>
                <h3 className="font-extrabold text-slate-900 text-xl">
                  {c.title}
                </h3>
                <p className="text-violet-600 font-semibold mt-3 text-lg">
                  {c.org}
                </p>
              </div>

              {c.link && c.link !== "#" && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  title="View Certificate"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full ring-1 ring-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-violet-600 shadow-soft transition"
                >
                  <Icons.cap size={20} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section grad-bg">
      <div className="container-max max-w-lg mx-auto">

        <SectionTitle title="Contact" />

        <p className="mt-4 text-center text-slate-600 text-sm">
          Feel free to reach out for opportunities or collaborations.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            const name = e.target.name.value;
            const email = e.target.email.value;
            const message = e.target.message.value;

            const mailtoLink = `mailto:${profile.email}?subject=Portfolio Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

            window.location.href = mailtoLink;
          }}
          className="mt-6 space-y-4 bg-white/80 backdrop-blur-lg p-5 rounded-xl shadow-lg"
        >

          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-3 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-violet-500 outline-none text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-violet-500 outline-none text-sm"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Message
            </label>
            <textarea
              rows="3"
              name="message"
              required
              placeholder="Write your message..."
              className="w-full px-3 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-violet-500 outline-none resize-none text-sm"
            />
          </div>

          {/* Send Button */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-violet-600 text-white text-sm font-semibold shadow-md hover:bg-violet-700 transition"
            >
              <Icons.arrow size={16} />
              Send
            </button>
          </div>

        </form>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-8">

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-violet-600 hover:text-violet-800 transition transform hover:scale-110"
          >
            <Icons.linkedin size={24} />
          </a>

          <a
            href="https://www.instagram.com/shanika_gowda"
            target="_blank"
            rel="noreferrer"
            className="text-violet-600 hover:text-violet-800 transition transform hover:scale-110"
          >
            <Icons.instagram size={24} />
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-violet-600 hover:text-violet-800 transition transform hover:scale-110"
          >
            <Icons.github size={24} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}
