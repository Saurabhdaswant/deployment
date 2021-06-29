import NavBar from "./NavBar";
import Blog from "./Blog";
// import Relevant from "./Relevant";
import useFetch from "./useFetch";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Recent from "./Recent";
import Featured from "./Featured";

function App() {
  const {
    RealData: post,
    pending,
    error,
  } = useFetch("http://localhost:4000/blogs");

  return (
    <Router>
      <div className="App">
        <NavBar />
        {pending && <div>data is coming soon</div>}
        {error && <div>{error}</div>}

        <Switch>
          <Route exact path="/">
            {post &&
              post.map((data) => {
                return <div>{<Blog key={data.id} {...data} />}</div>;
              })}
          </Route>
          {/* <Route exact path="/Relevant">
            {post && (
              <Relevant
                sendData={post.filter(
                  (relevantOnly) => relevantOnly.feed === "relevant"
                )}
              />
            )}
          </Route> */}
          <Route exact path="/recent">
            {post && (
              <Recent
                sendData={post.filter(
                  (RecentOnly) => RecentOnly.feed === "recent"
                )}
              />
            )}
          </Route>
          <Route exact path="/Featured">
            {post && (
              <Featured
                sendData={post.filter(
                  (FeaturedOnly) => FeaturedOnly.feed === "featured"
                )}
              />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
