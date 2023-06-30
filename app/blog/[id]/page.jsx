import Image from "next/image";
const BlogPost = () => {
  return (
    <main>
      {/* top container */}
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between mr-4">
          <h1 className="text-2xl font-bold mb-5">Coding with my partner</h1>
          <p className="text-justify">
            Coding can be an exciting and fulfilling journey, but it becomes
            even more remarkable when you embark on it with your partner.
            Collaborating on coding projects not only boosts your technical
            skills but also strengthens your bond as a couple. In this blog
            post, we will explore the joys, challenges, and benefits of coding
            with your partner, and how this shared experience can take your
            relationship to new heights.
          </p>
          <div className="flex items-center gap-10 mt-5">
            <Image
              src="/author.jpg"
              alt="blog image"
              width={40}
              height={40}
              className="object-cover rounded-full"
            />
            <span className="text-xl font-bold">Raymund Lapuz</span>
          </div>
        </div>
        <div className="flex-1 h-300 relative">
          <Image
            src="/code.jpg"
            alt="blog image"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      {/* bottom container */}
      <div className="mt-10 text-justify">
        <p className="text- justify">
          1. A Shared Passion:
          <br />
          When you and your partner share a common interest in coding, it opens
          up a world of possibilities. The mutual passion for technology creates
          a unique bond, where you can explore new concepts, learn from each
          other's experiences, and inspire one another. Whether you are both
          seasoned developers or just starting your coding journey, the shared
          enthusiasm can ignite a deep sense of connection.
          <br />
          <br />
          2. Learning Together:
          <br />
          Coding with your partner provides a fantastic opportunity to learn and
          grow together. You can embark on online courses, tutorials, or coding
          challenges as a team, exchanging ideas and troubleshooting problems
          along the way. This collaborative approach fosters a supportive and
          encouraging environment, where you can overcome obstacles and
          celebrate achievements as a unit.
        </p>
      </div>
    </main>
  );
};

export default BlogPost;
