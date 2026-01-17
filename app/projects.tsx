import Image from "next/image";

export default function Projects() {
  const works = [
    "Novel",
    "Novella",
    "Prose",
    "Screenplay",
    "Short Story",
    "Comics",
    "Game writing",
  ];
  const projects = [
    {
      img: "/brotherhood.webp",
      title: "Brotherhood of the Wolf",
      tags: ["Comic", "Writing"],
    },
    { img: "/game.jpg", title: "Death Drive", tags: ["Game", "Line editing"] },
    {
      img: "/comic.jpg",
      title: "False Light",
      tags: ["Novel", "Writing"],
    },
  ];

  return (
    <div
      id="projects"
      className="flex flex-col md:flex-row-reverse gap-10 bg-primary-content p-10 rounded-xl"
    >
      <div className="flex flex-col gap-2 md:w-[35%] shrink-0">
        <p className="font-bold text-3xl md:text-4xl">Recent projects</p>
        <p className="text-lg">
          Line editing is my passion and my substantive edits have helped polish
          many rough drafts into a state ready for publishing, improving the
          flow of prose, dialogue, characterization, and action. I have worked
          on just about every genre under the sun and can give actionable
          feedback on how to improve your story.
        </p>
        <div className="flex flex-wrap gap-2">
          {works.map((work, i) => (
            <div
              key={i}
              className="badge badge-soft rounded-full badge-secondary"
            >
              {work}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-wrap gap-4">
        {projects.map((project, i) => {
          return (
            <div key={i} className="flex flex-col gap-2">
              <div className="relative aspect-9/14 w-auto h-80 rounded-lg overflow-hidden">
                <Image src={project.img} alt={project.title} layout="fill" />
              </div>
              <div className="flex flex-row gap-1.5">
                {project.tags.map((tag, i) => {
                  return (
                    <div
                      key={i}
                      className="badge badge-soft rounded-full badge-primary"
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
