import {
  MagnifyingGlassIcon,
  PencilIcon,
  BookOpenIcon,
  Bars3BottomLeftIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export default function Editing() {
  const genres = [
    "General fiction",
    "Fantasy",
    "Sci-fi",
    "Romance",
    "Romantasy",
    "Mystery",
    "Horror",
    "Thriller",
    "Erotica",
    "Comedy",
    "Literary",
    "Academic",
    "Technical",
  ];

  const services = [
    {
      title: "Line editing",
      body: "Line editing focuses on sentence structure, word choice, dialogue, and more to improve the overall flow and readability of the prose.",
      icon: <Bars3BottomLeftIcon />,
    },
    {
      title: "Beta reading",
      body: "A top-level report on the book that covers the basics of plot, structure, character arcs, and the 'feel' of the draft. This is the first step to take before deeper editing.",
      icon: <BookOpenIcon />,
    },
    {
      title: "Developmental editing",
      body: "A highly detailed breakdown of the book which includes inline commentary and a developmental report. This details what works, what doesn't, and what to do to fix it from the first story beat to the last.",
      icon: <DocumentTextIcon />,
    },
    {
      title: "Proof reading",
      body: "A final readthrough for errors. The last step before formatting and publication.",
      icon: <MagnifyingGlassIcon />,
    },
    {
      title: "Ghostwriting/Writing",
      body: "I am available to write for games, comics, screenplays, and more, whether as a full writer or to punch up dialogue.",
      icon: <PencilIcon />,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-10">
      <div className="flex flex-col gap-2 md:w-[35%] shrink-0">
        <p className="font-bold text-3xl md:text-4xl">How I can help you</p>
        <p className="text-lg">
          Line editing is my passion and my substantive edits have helped polish
          many rough drafts into a state ready for publishing, improving the
          flow of prose, dialogue, characterization, and action. I have worked
          on just about every genre under the sun and can give actionable
          feedback on how to improve your story.
        </p>
        <div className="flex flex-wrap gap-2">
          {genres.map((genre, i) => (
            <div
              key={i}
              className="badge badge-soft rounded-full badge-primary"
            >
              {genre}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service, i) => {
          return (
            <div key={i} className="card bg-white">
              <div className="card-body">
                <div className="flex flex-row gap-3">
                  <div className="bg-primary-content text-primary w-8 h-8 rounded-full  p-2">
                    {service.icon}
                  </div>
                  <h2 className="card-title">{service.title}</h2>
                </div>
                <p>{service.body}</p>
              </div>
            </div>
          );
        })}
        <div className="card">
          <div className="card-body">
            <div className="flex flex-row gap-3">
              <div className="bg-primary-content text-primary w-8 h-8 rounded-full  p-2">
                <QuestionMarkCircleIcon />
              </div>
              <h2 className="card-title">Others</h2>
            </div>
            <p>{`If there's a service related to writing or editing that you haven't found listed here, don't hesitate to contact me. While these are the most common services I provide, I'd be happy to accomodate any need you might have.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
