import Image from "next/image";
import React from "react";

const Category = ({ params }) => {
  return (
    <main>
      <h1 className="grad text-3xl font-bold">{[params.category]}</h1>
      {/* item */}
      <section className="item flex gap-50">
        {/* content */}
        <div className="flex-1 flex flex-col gap-10 justify-center mr-4">
          <h1 className="grad text-xl font-bold">Technology Website</h1>
          <p className="text-justify">
            TechnoBytes is a cutting-edge technology website that serves as your
            ultimate destination for all things tech-related. Whether you're an
            avid tech enthusiast, a casual consumer, or a professional in the
            field, we have you covered with the latest trends, groundbreaking
            discoveries, and insightful analyses.
          </p>
          <button className="w-72 px-5 py-3 cursor-pointer bg-green-500 hover:bg-green-600 rounded-lg text-white font-bold">
            Code
          </button>
        </div>
        {/* image */}
        <div className="flex-1 h-500 relative">
          <Image src="/web.jpg" fill="true" className="object-cover" />
        </div>
      </section>
      {/* item */}
      <section className="item flex gap-50">
        {/* content */}
        <div className="flex-1 flex flex-col gap-10 justify-center ml-4">
          <h1 className="grad text-xl font-bold">E-Sports Website</h1>
          <p className="text-justify">
            Welcome to my creative portfolio, where imagination and artistry
            collide to tell captivating stories through words, colors, and
            design. Explore a world of boundless possibilities through my
            diverse range of projects and be inspired by the fusion of
            creativity and innovation.
          </p>
          <button className="w-72 px-5 py-3 cursor-pointer bg-green-500 hover:bg-green-600 rounded-lg text-white font-bold">
            Code
          </button>
        </div>
        {/* image */}
        <div className="flex-1 h-500 relative">
          <Image src="/web2.jpg" fill="true" className="object-cover" />
        </div>
      </section>
      {/* item */}
      <section className="item flex gap-50">
        {/* content */}
        <div className="flex-1 flex flex-col gap-10 justify-center mr-4">
          <h1 className="grad text-xl font-bold">Investing Website</h1>
          <p className="text-justify">
            Welcome to my creative portfolio, where imagination and artistry
            collide to tell captivating stories through words, colors, and
            design. Explore a world of boundless possibilities through my
            diverse range of projects and be inspired by the fusion of
            creativity and innovation.
          </p>
          <button className="w-72 px-5 py-3 cursor-pointer bg-green-500 hover:bg-green-600 rounded-lg text-white font-bold">
            Code
          </button>
        </div>
        {/* image */}
        <div className="flex-1 h-500 relative">
          <Image src="/web3.jpg" fill="true" className="object-cover" />
        </div>
      </section>
    </main>
  );
};

export default Category;
