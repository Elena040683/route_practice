import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
//  1 вариант
// const Post = ({match}) => {
//   console.log(match);
//   return (
    
//     <h2> Post id = {match.params.id} </h2>
  
//   )
// }


const Post = () => {
  console.log(useParams());
  const param = useParams();
  
  console.log(useLocation());

  const query = useLocation().search
  console.log(query);

  return (
    <>
      <h2> Post id = {param.id} </h2>
      <p>{query}</p>
    </>
  )
}
export default Post;