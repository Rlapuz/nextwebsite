import { Metadata } from "next";
import Link from "next/link";

export const metadata = {
  title: "Raymund | Portfolio",
};

const Portfolio = () => {
  return (
    <main>
      <h1 className="m-0 my-8 text-2xl font-bold">
        Choose Programming Languages
      </h1>
      {/* items */}
      <div className="flex gap-50">
        {/* 1 */}
        <Link href="/portfolio/javascript" className="items">
          <span className="title">Javascript</span>
        </Link>
        {/* 2 */}
        <Link href="/portfolio/php" className="items">
          <span className="title">PHP</span>
        </Link>
        {/* 3 */}
        <Link href="/portfolio/python" className="items">
          <span className="title">Python</span>
        </Link>
      </div>
    </main>
  );
};

export default Portfolio;
