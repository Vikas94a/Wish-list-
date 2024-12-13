import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./App.css";
// import myImage from "./assets/hd720.jpg";
import kidsWishlist from "./WishList";

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MotionMouse = motion(styled.div`
  top: 0;
  left: 0;
  position: fixed;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`);

const Child = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(color) =>
    color.isNaughty
      ? "linear-gradient(135deg, #81c784, #aed581)"
      : "linear-gradient(135deg, #e3f2fd, #ffffff)"};
  position: relative;
  color: white;
  margin: 5px;
  padding: 12px;
  width: 30%;
  height: 310px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  &:hover {
    transform: scale(1);
    border: 2px solid black;
  }
`;

function App() {
  const [mousePosition, setMousepoition] = useState({
    x: 0,
    y: 0,
  });

  const [cursonVaraiant, setCursonVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousepoition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // console.log(mouseMove);
    window.addEventListener("mousemove", mouseMove);
  });

  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      transition: { duration: 0, ease: "linear" },
    },
  };

  return (
    <>
      <Container>
        <h1 style={{ color: "black", alignItems: "center" }}>Wish list</h1>
      </Container>
      <Container>
        {kidsWishlist.map((list) => {
          return (
            <Child isNaughty={list.naughty}>
              <p style={{ color: "black" }}>Name:-{list.name}</p>
              <p style={{ color: "black" }}>Age:-{list.age}</p>
              <h2 style={{ paddingTop: "2px", color: "red" }}>Wish list</h2>
              <ul>
                {list.wishlist.map((e) => (
                  <li
                    style={{
                      color: "green",
                      marginBottom: "5px",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                    }}
                    key={list.id}
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </Child>
          );
        })}
      </Container>
      <MotionMouse className="Mouse" variants={variants} animate="default" />
    </>
  );
}

export default App;
