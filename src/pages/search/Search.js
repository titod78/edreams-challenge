import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import config from "../../config/config";
import { SearchStyled, NoResultsStyled, ButtonStyled } from "./styles/Styled";
import itinerariesService from "../../services/itinerariesService";
import getQueryParams from "../../utils/getQueryParams";
import filterResults from "./filterResults";
import Itineraries from "../../components/Itineraries";
import adaptItineraries from "./adaptItineraries";
import labels from "../../labels";

const Search = () => {
  const [itineraries, setItineraries] = useState();
  const history = useHistory();

  useEffect(() => {
    (async function () {
      const originalItineraries = await itinerariesService();
      setItineraries(
        filterResults(adaptItineraries(originalItineraries), getQueryParams(), config.get("itinerariesOrderBy"))
      );
    })();
  }, []);

  return (
    <>
      <SearchStyled>Search Page</SearchStyled>
      {itineraries &&
        (!!itineraries.length ? (
          <Itineraries itineraries={itineraries} />
        ) : (
          <>
            <NoResultsStyled>{labels.noResults}</NoResultsStyled>
            <ButtonStyled onClick={() => history.goBack()}>{labels.back}</ButtonStyled>
          </>
        ))}
    </>
  );
};
export default Search;
