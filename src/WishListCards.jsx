import kidsWishlist from "./WishList";
import styled from "styled-components";
import Snowfall from "react-snowfall";

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
  background-image: url(src/assets/Red_Christmas.jpg);
  background-size: cover;
  position: relative;
  color: white;
  margin: 5px;
  padding: 12px;
  min-width: 45%;
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
  height: 100%;
  width: 100%;
`;

const Rain = styled.div`
  height: 20px;
  width: 20%;
  background-color: #37374d;
  position: absolute;
  top: 0;
  overflow: hidden;
  animation: rain 3s linear infinite;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );

  @keyframes rain {
    0% {
      background-color: white;
      top: 0%;
    }
    50% {
      background-color: yellow;
      top: 50%;
      left: 50%;
      transform: rotate(90deg);
    }
    100% {
      background-color: green;
      top: 100%;
      transform: rotate(180deg);
      left: 20%;
    }
  }
`;

export default function WishListCard() {
  return (
    <Container>
      {kidsWishlist.map((list) => (
        <Child key={list.id}>
          <p style={{ color: "black", fontSize: "1rem", fontWeight: "800" }}>
            Name:-{list.name}
          </p>
          <p style={{ color: "black", fontSize: "1rem", fontWeight: "800" }}>
            Age:-{list.age}
          </p>
          <h2 style={{ paddingTop: "2px", color: "Yellow" }}>Wish list</h2>
          <ul>
            {list.wishlist.map((e, i) => (
              <li
                style={{
                  color: "White",
                  marginBottom: "5px",
                  fontSize: "0.9em",
                  fontWeight: "400",
                }}
                key={i}
              >
                {e}
              </li>
            ))}
          </ul>
          {list.naughty ? (
            <Rain></Rain>
          ) : (
            <Snow>
              <Snowfall />
            </Snow>
          )}
        </Child>
      ))}
    </Container>
  );
}
