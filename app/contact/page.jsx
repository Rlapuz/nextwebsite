import { Metadata } from "next";
import Image from "next/image";
import styles from "../contact/page.module.css";

export const metadata = {
  title: "Raymund | Contact",
};

const Contact = () => {
  return (
    <main>
      <h1 className="mb-100 text-center font-bold text-slarge bg-gradient-to-b from-green-700 to-gray-300 text-transparent bg-clip-text-6xl bg-gradient-to-b from-green-700 to-gray-300 text-transparent bg-clip-text">
        Let's Keep in Touch
      </h1>
      {/* content */}
      <div className="flex items-center gap-100 mt-10">
        {/* image container */}
        <div className="flex-1 relative">
          <Image
            src="/const.png"
            width={500}
            height={500}
            alt="contact image"
            className={styles.image}
          />
        </div>
        <form className="flex-1 flex flex-col gap-5">
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="Message"
            cols="30"
            rows="10"></textarea>
          <button className="w-100 px-5 py-3 cursor-pointer bg-green-500 hover:bg-green-600 rounded-lg text-white font-bold">
            Send
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
