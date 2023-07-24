import React from "react";

const research = [
  {
    id: 1,
    image:
      "https://assets.verticalmag.com/wp-content/uploads/2017/08/31264293264_ae5752718c_o.jpg",
    title: "AI-based Co-Pilot System for Helicopter",
    project:
      "https://cecc.anu.edu.au/research/student-research-projects/ai-based-co-pilot-system-helicopter",
  },
  {
    id: 2,
    image:
      "https://assets.verticalmag.com/wp-content/uploads/2017/08/31264293264_ae5752718c_o.jpg",
    title: "AI-based Co-Pilot System for Helicopter",
    project:
      "https://cecc.anu.edu.au/research/student-research-projects/ai-based-co-pilot-system-helicopter",
  },
  {
    id: 3,
    image:
      "https://assets.verticalmag.com/wp-content/uploads/2017/08/31264293264_ae5752718c_o.jpg",
    title: "AI-based Co-Pilot System for Helicopter",
    project:
      "https://cecc.anu.edu.au/research/student-research-projects/ai-based-co-pilot-system-helicopter",
  },
  {
    id: 4,
    image:
      "https://assets.verticalmag.com/wp-content/uploads/2017/08/31264293264_ae5752718c_o.jpg",
    title: "AI-based Co-Pilot System for Helicopter",
    project:
      "https://cecc.anu.edu.au/research/student-research-projects/ai-based-co-pilot-system-helicopter",
  },
];

const Research = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl text-center">Research by students</h1>

      <div className="py-10 px-12 gap-y-4 md:gap-x-4 grid grid-cols-1 md:grid-cols-4">
        {research.map((r) => (
          <div key={r.id} className="card rounded card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={r.image} alt="" />
            </figure>
            <div className="card-body">
              <a
                href={r.project}
                className="card-title underline text-blue-800"
                target="_blank"
                rel="noreferrer"
              >
                {r.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
