import React, { useState } from "react";
import MapComponent from "../../components/Map";
import Search from "../../components/Search";
import { ButtonWrapper, Container, HideButton } from "./styles";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
const MainPresenter = () => {
  const [showSearch, setShowSearch] = useState(true);
  const toggleSearchComponent = () => setShowSearch((prev) => !prev);
  return (
    <Container>
      <ButtonWrapper show={showSearch}>
        <HideButton onClick={toggleSearchComponent}>
          {showSearch ? <BsArrowBarLeft /> : <BsArrowBarRight />}
        </HideButton>
      </ButtonWrapper>
      <Search showSearch={showSearch} />
      <MapComponent showSearch={showSearch} setShowSearch={setShowSearch} />
    </Container>
  );
};

export default MainPresenter;