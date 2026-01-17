import Link from "next/link";

export default function Hero() {
  return (
    <main className="flex flex-col shrink xl:m-0 self-center w-fit sm:flex-row gap-8 xl:gap-32 py-10 xl:pt-28 justify-center xl:justify-start sm:items-start">
      <div className="flex flex-col md:w-[50%] self-center">
        <div className="badge badge-soft badge-info rounded-full">
          <div aria-label="status" className="status status-info"></div>
          <p>AVAILABLE FOR WORK</p>
        </div>
        <h1 className="xl:text-6xl text-3xl z-10 font-bold text-black ">
          Make your book the best it can be.
        </h1>
        <h3 className="text-xl">
          Over ten years of experience writing and editing millions of words
          across novels, screenplays, comics, and more.
        </h3>
        <div className="flex flex-row gap-2 pt-4">
          <button className="btn btn-neutral rounded-full shadow-none btn-lg">
            <Link href="/#contact">Let&apos;s talk</Link>
          </button>
          <button className="btn rounded-full shadow-none btn-lg">
            <Link href="/#projects">See projects</Link>
          </button>
        </div>
      </div>
      <div className="relative w-fit self-center sm:self-start">
        <div className="rounded-xl w-88 h-96 bg-[url(/ezra_pic.jpg)] bg-cover" />
        <div className="stats shadow bg-base-100 h-fit w-fit absolute top-6 -left-2 md:-left-20">
          <div className="stat py-2 px-4">
            <div className="stat-title text-base">Beta Reading</div>
            <div className="stat-value text-2xl">100+ books</div>
          </div>
        </div>
        <div className="stats shadow bg-base-100 h-fit w-fit absolute top-56 xl:top-32 -right-2 xl:-right-20">
          <div className="stat py-2 px-4">
            <div className="stat-title text-base">Copy Editing</div>
            <div className="stat-value text-2xl">10+ years</div>
          </div>
        </div>
        <div className="stats shadow bg-base-100 h-fit w-fit absolute -bottom-8 left-10">
          <div className="stat py-2 px-4">
            <div className="stat-title text-base">Line Editing</div>
            <div className="stat-value text-2xl">5,000,000+ words</div>
          </div>
        </div>
      </div>
    </main>
  );
}
