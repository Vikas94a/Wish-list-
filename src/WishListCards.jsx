import kidsWishlist from "./WishList";
import styled from "styled-components";
import WishListItem from "./WishListItem";

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function WishListCard() {
  return (
    <Container>
      {kidsWishlist.map((list) => (
        <WishListItem key={list} list={list} />
      ))}
    </Container>
  );
}
