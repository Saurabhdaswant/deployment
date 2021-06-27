import NavBar from "./NavBar";
import Blog from "./Blog";
import { useEffect, useState } from "react";

function App() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:7000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("you database dosent have data madar fakir");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setPending(false);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      {pending && <div>data is coming soon</div>}
      {error && <div>{error}</div>}
      {post &&
        post.map((data) => {
          return <div>{<Blog key={data.id} {...data} />}</div>;
        })}
    </div>
  );
}

export default App;
