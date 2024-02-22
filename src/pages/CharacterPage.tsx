import React, { useEffect, useState } from "react";
import { ElementCard, ElementCards, PageContainer } from "../styles/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CHARACTERS } from "../utils/routes";
//"id": 1,
// "name": "Rick Sanchez",
// "status": "Alive",
// "species": "Human",
// "type": "",
// "gender": "Male",
// "origin": {
//   "name": "Earth",
//   "url": "https://rickandmortyapi.com/api/location/1"
// },
const CharacterPage = () => {
  const [data, setData] = useState<any>([]);

  const nav = useNavigate();

  const getData = async () => {
    await axios
      .get("https://rickandmortyapi.com/api/character?page=1")
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageContainer>
      <h1>Rick and Morty</h1>
      <ElementCards>
        {data?.map((item: any, i: number) => (
          <ElementCard key={i} onClick={() => nav(CHARACTERS + `/${item?.id}`)}>
            <div>Имя: {item?.name}</div>
            <div>Пол: {item?.gender}</div>
            <div>Место: {item?.origin?.name}</div>
          </ElementCard>
        ))}
      </ElementCards>
    </PageContainer>
  );
};

export default CharacterPage;
