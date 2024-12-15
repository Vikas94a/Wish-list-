import kidsWishlist from "./WishList";
import styled from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Child = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.isNaughty
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

const Snow = styled.div`
  height: 20px;
  width: 80%;
  background-color: #2786de;
  position: absolute;
  top: 0;
  overflow: hidden;
`;

const Rain = styled.div`
  height: 20px;
  width: 80%;
  background-color: #37374d;
  position: absolute;
  top: 0;
  overflow: hidden;
  animation: rain 1s linear infinite;

  @keyframes rain {
    0% {
      background-color: #37374d;
      top: 0%;
    }
    50% {
      background-color: red;
      top: 50%;
      transform: rotate(90deg);
    }
    100% {
      background-color: green;
      top: 100%;
      transform: rotate(180deg);
    }
  }
`;

export default function WishListCard() {
  return (
    <Container>
      {kidsWishlist.map((list) => (
        <Child key={list.id}>
          <p style={{ color: "black" }}>Name:-{list.name}</p>
          <p style={{ color: "black" }}>Age:-{list.age}</p>
          <h2 style={{ paddingTop: "2px", color: "red" }}>Wish list</h2>
          <ul>
            {list.wishlist.map((e, i) => (
              <li
                style={{
                  color: "green",
                  marginBottom: "5px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
                key={i}
              >
                {e}
              </li>
            ))}
          </ul>
          {list.naughty ? <Rain></Rain> : <Snow></Snow>}
        </Child>
      ))}
    </Container>
  );
}
