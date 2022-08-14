import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";



function MovieList(props) {

const navigate = useNavigate();

  const item = props.flim;
  return (
    <Card border="primary" style={{width: "200px", margin: "12px",cursor:"pointer" }} onClick={()=>
      navigate(`/movie-detail/${item.title}`)
    }>
        <Card.Header><b>{item.title}</b></Card.Header>
        <Card.Img variant="top" src={item.poster} style={{height:"250px"}}/>
        <Card.Body>
        </Card.Body>
      </Card>
  );
}

export default MovieList;
