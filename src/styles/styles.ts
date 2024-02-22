import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 50px 200px;
`;

export const ElementCards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
`;

export const ElementCard = styled.div`
  border-radius: 5px;
  box-shadow: 0.6px 1px 1px 1px rgba(120, 120, 120, 0.3);
  padding: 5px;
  text-align: left;
  background-color: pink;
  display: flex;
  height: 200px;
  width: 200px;
  flex-flow: column nowrap;
  font-size: 24px;
  color: white;
  font-weight: 700;
`;
