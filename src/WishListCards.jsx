import kidsWishlist from "./WishList";
import styled from "styled-components";
import Red_Christmas from "./assets/Red_Christmas.jpg";

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
  position: absolute;
  top: 0;
  overflow: hidden;
`;

const Rain = styled.div`
  height: 20px;
  width: 40%;
  background-color: #37374d;
  position: absolute;
  top: 0;
  overflow: hidden;
  animation: rain 3s linear infinite;

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
          {list.naughty ? <Rain></Rain> : <Snow></Snow>}
        </Child>
      ))}
    </Container>
  );
}
