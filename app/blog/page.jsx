import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Raymund | Blog",
};

const Blog = () => {
  return (
    <main className="">
      <Link href="/blog/id" className="flex items-center gap-50 mb-10">
        {/* image */}
        <div className="mr-4">
          <Image
            src="/code.jpg"
            alt="blog image"
            width={480}
            height={250}
            className="object-cover"
          />
        </div>
        {/* content */}
        <div>
          <h1 className="mb-5 text-2xl font-bold">Coding with my partner</h1>
          <p className="text-justify">
            Coding can be an exciting and fulfilling journey, but it becomes
            even more remarkable when you embark on it with your partner.
            Collaborating on coding projects not only boosts your technical
            skills but also strengthens your bond as a couple. In this blog
            post, we will explore the joys, challenges, and benefits of coding
            with your partner, and how this shared experience can take your
            relationship to new heights.
          </p>
        </div>
      </Link>
      <Link href="/blog/id" className="flex items-center gap-50 mb-10">
        {/* image */}
        <div className="mr-4">
          <Image
            src="/panda.jpg"
            alt="blog image"
            width={480}
            height={250}
            className="object-cover"
          />
        </div>
        {/* content */}
        <div>
          <h1 className="mb-5 text-2xl font-bold">Test</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            laboriosam molestias inventore illum, perferendis veritatis omnis
            consequuntur magnam minima error obcaecati praesentium, enim
            consequatur ducimus sit aperiam deserunt, vero deleniti assumenda!
            Hic quas, ad, itaque id laborum ab obcaecati saepe voluptatem
            repellat, numquam asperiores. Molestias totam modi harum velit esse.
          </p>
        </div>
      </Link>
      <Link href="/blog/id" className="flex items-center gap-50 mb-10">
        {/* image */}
        <div className="mr-4">
          <Image
            src="/panda.jpg"
            alt="blog image"
            width={480}
            height={250}
            className="object-cover"
          />
        </div>
        {/* content */}
        <div>
          <h1 className="mb-5 text-2xl font-bold">Test</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            laboriosam molestias inventore illum, perferendis veritatis omnis
            consequuntur magnam minima error obcaecati praesentium, enim
            consequatur ducimus sit aperiam deserunt, vero deleniti assumenda!
            Hic quas, ad, itaque id laborum ab obcaecati saepe voluptatem
            repellat, numquam asperiores. Molestias totam modi harum velit esse.
          </p>
        </div>
      </Link>
    </main>
  );
};

export default Blog;
