const BlogStuff = (props) => {
  const dataBase = props.sendProps;

  //the container component
  const Container = (props) => (
    <div className="container">{props.children}</div>
  );

  //   const NavCon = (props) => <div className="navCon">{props.children}</div>;

  const Context = (props) => <p className="context">{props.children}</p>;

  const Topic = (props) => <p className="topic">{props.children}</p>;
  const Name = (props) => <p className="name">{props.children}</p>;
  const Domain = (props) => <p className="domain">{props.children}</p>;

  return dataBase.map((items) => (
    <Container>
      <Name>
        {items.Name} {items.date}
      </Name>
      <Topic>{items.topic}</Topic>
      <Domain>{items.domain}</Domain>
      <Context>{items.context}</Context>
      <h5>{items.like}</h5>
    </Container>
  ));
};

export default BlogStuff;
