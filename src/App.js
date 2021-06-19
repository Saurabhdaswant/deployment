// import { useState } from "react";

import NavBar from "./NavBar";
import Blog from "./Blog";

//the database
const dataBase = [
  {
    name: " saurabh daswant",
    topic: " how to learn web dev in 6 months",
    date: " jun 16, 2021",
    domain: "blog.saurabh.com",
    context:
      "It is a long established fact that a reader will be distracted by the readable content of a page when",
    like: 55,
    feed: "recent",
    id: "1",
  },
  {
    name: " sahil kadolkar",
    topic: "lets talk about my 5 gf",
    date: " jun 15, 2021",
    domain: "blog.sahil.com",
    context:
      " use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in thei",
    like: 27,
    feed: "featured",
    id: "2",
  },
  {
    name: " yash bisale ",
    topic: " bhosdicha warren buffet",
    date: " jun 30, 2021",
    domain: "blog.yash.com",
    context:
      "It is a long established fact that a reader will be distracted by the readable content of a page when",
    like: 32,
    feed: "relevant",
    id: "3",
  },
  {
    name: " sammer gaikwad ",
    topic: " introduction into the pubg environment  ",
    date: " may 1, 2021",
    domain: "blog.kalu.com",
    context:
      "ok even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the",
    like: 21,
    feed: "recent",
    id: "4",
  },
  {
    name: " atharva dhapal ",
    topic: " Are you getting less marks in online exam?",
    date: " nov 6, 2021",
    domain: "blog.pathatshir.com",
    context:
      "how to copy and paste the worlds best tip you will get hreereadable content of a page when",
    like: 200,
    feed: "relevant",
    id: "5",
  },
];

function App() {
  return (
    <div className="App">
      <NavBar />
      {dataBase.map((data) => {
        return (
          <div>
            <Blog
              key={data.id}
              {...data}
              // name={data.name}
              // date={data.date}
              // topic={data.topic}
              // domain={data.domain}
              // context={data.context}
              // like={data.like}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
