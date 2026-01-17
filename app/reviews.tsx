export default function Reviews() {
  const colors = ["badge-primary", "badge-secondary", "badge-accent"];

  const reviewContent = [
    {
      title: "Lots of valuable feedback",
      body: `Ezra did a great job on a not so easy task (edit a foreign
              written/translated novel), gave lots of valuable feedback and
              brought the book to the release stage. Communication was clear and
              good, met the schedule. I can recommend working with him and would
              book him again.`,
      tags: ["Line editing", "Thriller"],
    },
    {
      title: "His comments on my writing were spot on",
      body: `I feel Ezra is a highly skilled Beta reader. His comments on my writing were spot on, i thought. He also spent time providing tools and recommendations on how to improve in the areas where I needed it. Thx. Ezra.`,
      tags: ["Beta read"],
    },
    {
      title: "He has a sharp eye and always gives you a polished report",
      body: `Always a pleasure to work with Ezra! He is a professional. Being an author, Ezra not only can help you with finding flaws and issues in your book but also suggests great solutions. He has a sharp eye and always gives you a polished report.`,
      tags: ["Beta read", "Sci-fi"],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {reviewContent.map((review, i) => {
        return (
          <div key={i} className="card max-w-96 bg-base-100 card-md shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-2xl">{review.title}</h2>
              <p className="text-lg">{`"${review.body}"`}</p>
              <div className="justify-end card-actions">
                {review.tags.map((tag, i) => {
                  return (
                    <div
                      key={i}
                      className={`badge badge-soft rounded-full ${
                        colors[i] || colors[0]
                      }`}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
