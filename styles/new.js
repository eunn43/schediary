import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10% 15%;
`;

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const Header = styled.div`
  font-size: 40px;
`;

export const Label = styled.div`
  font-size: 22px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 8px;
  border: 1px solid gray;
  font-size: 28px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  border: 1px solid gray;
  font-size: 28px;
`;

export const SubmitBtn = styled.button`
  width: 180px;
  height: 50px;
  border: none;
  background-color: lightgray;
  font-size: 22px;
  border-radius: 8px;
  margin-top: 20px;
`;
