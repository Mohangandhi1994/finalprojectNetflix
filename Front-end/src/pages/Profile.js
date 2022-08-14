import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  console.log(JSON.parse(localStorage.getItem("user")));
  const { id } = useParams();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ color: "white", background: "brown" }}>
      <img
        src="https://www.kindpng.com/picc/m/690-6904538_men-profile-icon-png-image-free-download-searchpng.png"
        className="center"
      ></img>
      <h1 style={{ textAlign: "center" }}>
        First Name: {currentUser.first_name}
      </h1>
      <h1 style={{ textAlign: "center" }}>
        Last Name: {currentUser.last_name}
      </h1>
      <h1 style={{ textAlign: "center", paddingBottom:"40px" }}>Email ID: {currentUser.email}</h1>
      
    </div>
  );
}

export default Profile;
