import React, { useEffect, useState } from "react";
import { ElementCard, PageContainer } from "../styles/styles";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharacterInfoPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>();

  const getData = async () => {
    await axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setData(response.data);
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
      <ElementCard>
        <div>Имя: {data?.name}</div>
        <div>Пол: {data?.gender}</div>
        <div>Место: {data?.origin?.name}</div>
      </ElementCard>
    </PageContainer>
  );
};

export default CharacterInfoPage;
