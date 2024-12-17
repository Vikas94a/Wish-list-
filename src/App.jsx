import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./App.css";
import WishListCard from "./WishListCards";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MotionMouse = motion.create(styled.div`
  top: 0;
  left: 0;
  position: fixed;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`);

function App() {
  const [mousePosition, setMousepoition] = useState({
    x: 0,
    y: 0,
  });

  // mousePosition.x.backgroundColor = "red";

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
      <WishListCard />

      <MotionMouse className="Mouse"  variants={variants} animate="default" />
    </>
  );
}

export default App;
