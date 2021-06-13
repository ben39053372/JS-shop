import React from "react";

export const PopularTagsCard = () => {
  const tags = [
    "1",
    "2",
    "3",
    "4",
    "asd",
    "sdf",
    "ewr",
    "1",
    "2",
    "3",
    "4",
    "asd",
    "sdf",
    "ewr",
  ];
  return (
    <div className="card">
      <h4>Popular Tags</h4>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {tags.map((tag, i) => (
          <div
            key={i}
            style={{ padding: "5px 20px", margin: 5, backgroundColor: "#eee" }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
