import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { HomeStyled } from "./styles/Styled";
import locationsService from "../../services/locationsService";
import SearchForm from "../../components/Search/Form";
import setSearchParams from "../../utils/setSearchParams";

const Home = () => {
  const [locations, setLocations] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async function () {
      const response = await locationsService();
      setLocations(response);
    })();
  }, []);

  function onSearch(params) {
    history.push({ pathname: "/search", search: setSearchParams(params) });
  }

  return (
    <>
      <HomeStyled>Home Page</HomeStyled>
      {locations && <SearchForm locations={locations} onSubmit={onSearch} />}
    </>
  );
};
export default Home;
