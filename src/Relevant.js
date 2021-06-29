// const Relevant = (props) => {
//   const { sendData: takeData } = props;

//   const Context = (props) => <p className="context">{props.children}</p>;
//   const Topic = (props) => <p className="topic">{props.children}</p>;
//   const Name = (props) => <p className="name">{props.children}</p>;
//   const Domain = (props) => <p className="domain">{props.children}</p>;
//   const Like = (props) => <p className="like">{props.children}</p>;
//   const Date = (props) => <p className="date">{props.children}</p>;

//   return (
//     <div className="container">
//       {takeData.map((ghost) => {
//         return (
//           <div key={ghost.id}>
//             <Name>
//               {ghost.name}
//               <Date>{ghost.date}</Date>
//             </Name>
//             <Topic>{ghost.topic}</Topic>
//             <Domain>{ghost.domain}</Domain>
//             <Context>{ghost.context}</Context>
//             <Like>{ghost.like}</Like>
//             <hr />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Relevant;
