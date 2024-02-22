import React, { useEffect, useState } from "react";
import { ElementCard, ElementCards, PageContainer } from "../styles/styles";
import axios from "axios";

const EpisodesPage = () => {
  const [data, setData] = useState<any>([]);

  const getData = async () => {
    await axios
      .get("https://rickandmortyapi.com/api/episode?page=1")
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
      <h1>Rick and Morty episodes</h1>
      <ElementCards>
        {data?.map((item: any, i: number) => (
          <ElementCard key={i}>
            <div>Название: {item?.name}</div>
            <div>Дата выхода: {item?.air_date}</div>
            <div>Серия: {item?.episode}</div>
          </ElementCard>
        ))}
      </ElementCards>
    </PageContainer>
  );
};

export default EpisodesPage;
