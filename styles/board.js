import styled from "@emotion/styled";

export const BoardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageHeader = styled.div`
  width: 800px;
  height: 100px;

  display: flex;
  align-items: end;
  justify-content: space-around;
`;

export const HeaderTitle = styled.div`
  width: 400px;
  font-size: 40px;
`;

export const HeaderIcon = styled.i`
  font-size: 30px;
  color: var(--light-blue);
  margin-left: 10px;
`;

export const WeatherBox = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const WeatherImage = styled.img`
  width: 70px;
  height: 70px;
`;

export const PageBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const CalendarWrapper = styled.div`
  margin-top: 74px;
  padding-top: 16px;
  border-top: 4px dashed var(--light-blue);
`;

export const CalendarDot = styled.div`
  width: 6.6px;
  height: 6.6px;
  border-radius: 50%;
  background-color: var(--red);
  margin-top: 9px;
`;
