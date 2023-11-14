import React from "react";
import styled from "styled-components";
import { SearchOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6em 2em;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;

const Logo = styled.div`
  font-weight: bolder;
  font-size: 1.2rem;
  letter-spacing: 2px;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4em 0.4em;
  border: 1px solid lightgray;
  margin-left: 25px;
`;

const SearchBar = styled.input`
  border: none;
  padding: inherit;
`;

const MenuItem = styled.div`
  flex: 1;
  text-align: center;
  cursor: pointer;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>Eng</Language>
          <SearchContainer>
            <SearchBar />
            <SearchOutlined style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Center</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
