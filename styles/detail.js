import styled from "@emotion/styled";

export const FlipCard = styled.div`
  width: 500px;
  height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: transform 0.6s;
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  border: 1px solid lightgray;
  border-radius: 16px;
  box-shadow: 5px 5px 16px lightgray;
`;

export const CardFront = styled(CardFace)`
  padding: 10px;
  background-color: white;
`;

export const CardBack = styled(CardFace)`
  padding: 8%;
  transform: rotateY(180deg);
`;

export const CardBackGround = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: linear-gradient(
    20deg,
    ${(props) => props.color1}6C 10%,
    ${(props) => props.color2}6C 50%,
    ${(props) => props.color3}6C
  );
  /* padding: 80px 40px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 16px;
`;

export const CardBackHeader = styled.div`
  font-size: 36px;
  padding-bottom: 10px;
`;

export const TitleContent = styled.div`
  height: 36px;
  font-size: 30px;
`;

export const TextAreaContent = styled.div`
  width: 100%;
  height: 300px;
  font-size: 16px;
  overflow: auto;
  line-height: 1.4;
  white-space: pre-wrap;
  margin-top: 20px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const Btn = styled.div`
  width: 40px;
  text-align: center;
  line-height: 1.2;

  &:hover {
    text-decoration: 4px solid underline var(--light-blue);
    opacity: 80%;
  }
`;

export const BtnIcon = styled.i`
  font-size: 20px;
  color: gray;
`;
