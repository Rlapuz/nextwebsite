import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "Raymund | About",
};

const About = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="mt-0 font-bold text-slarge bg-gradient-to-b from-green-700 to-gray-300 text-transparent bg-clip-text-6xl bg-gradient-to-b from-green-700 to-gray-300 text-transparent bg-clip-text">
          Who Are We?
        </h1>
      </div>
      <main className="flex justify-between items-center gap-100 mb-10">
        {/* Right container */}
        <div className="flex-1">
          <Image
            src="/tech teams.jpg"
            alt="about image"
            width={500}
            height={500}
          />
        </div>
        {/* Left container */}
        <div className="flex-1 gap-10">
          <p className="text-justify">
            We are Powerful Coding for Web Development, a team of skilled
            individuals passionate about crafting exceptional digital
            experiences through expert coding. With our technical proficiency
            and creative approach, we empower businesses and individuals with
            impactful web solutions. Collaborating closely with our clients, we
            deliver cutting-edge websites and applications that align with their
            vision and resonate with their target audience.
            <br />
            <br />
            At Powerful Coding for Web Development, we take pride in our
            expertise and dedication to delivering outstanding digital
            experiences. Our team consists of highly skilled individuals who are
            not only proficient in coding but also passionate about their craft.
            We believe that coding is an art form, and we strive to create
            exceptional web solutions that stand out from the crowd.
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
