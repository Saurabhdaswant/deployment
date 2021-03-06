const Blog = (props) => {
  const { name, topic, domain, context, date, like } = props;

  const Context = (props) => <p className="context">{props.children}</p>;
  const Topic = (props) => <p className="topic">{props.children}</p>;
  const Name = (props) => <p className="name">{props.children}</p>;
  const Domain = (props) => <p className="domain">{props.children}</p>;
  const Like = (props) => <p className="like">{props.children}</p>;
  const Date = (props) => <p className="date">{props.children}</p>;

  return (
    <div className="container">
      <Name>
        {name}
        <Date>{date}</Date>
      </Name>

      <Topic>{topic}</Topic>
      <Domain>{domain}</Domain>
      <Context>{context}</Context>
      <Like>{like}</Like>
    </div>
  );
};

export default Blog;
