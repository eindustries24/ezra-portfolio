import Image from "next/image";
import Link from "next/link";

export default function About() {
  const books = [
    {
      title: "Heretics and Hangovers",
      img: "/heretics.jpg",
      link: "https://www.amazon.com/dp/B09JSXLMGZ",
    },
    {
      title: "The Ignition Trilogy",
      img: "/ignition.jpg",
      link: "https://a.co/d/7zq4oUZ",
    },
    {
      title: "New Haven, MN",
      img: "/new_haven.jpg",
      link: "https://a.co/d/7zq4oUZ",
    },
  ];

  return (
    <div className="flex flex-col pt-20 gap-4">
      <h2 className="font-bold text-4xl">About</h2>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-fit gap-2 flex flex-row">
          {books.map((book, i) => {
            return (
              <Link
                href={book.link}
                key={i}
                className="relative w-56 h-[21rem] rounded-lg overflow-hidden shrink-0 self-start"
              >
                <Image src={book.img} alt={book.title} layout="fill" />
              </Link>
            );
          })}
        </div>

        <div className="whitespace-pre-line text-lg">
          {`Ezra has always enjoyed writing, probably more than his teachers would have cared for after the Animal Farm meets Warhammer 40k short story he turned in during high school. He continued doing things like that until he finally sat down and wrote a paranormal romance novel, Ignition, self-publishing it in 2012, followed by two sequels in the years to come and a mystery novel after that.\n\n Character drives all of Ezra’s stories. He’s a firm believer in flawed, nuanced characters that may make you laugh, cry, or curse them out but will never feel false.\n\n In addition to writing (and to help fund it), Ezra also works full-time as a freelance editor and beta reader. If you want to take your novel to the next level, don’t hesitate to contact him.`}
        </div>
      </div>
    </div>
  );
}
