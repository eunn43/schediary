import styled from "@emotion/styled";

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageWrapper = styled.div`
  width: 500px;
  height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4%;
  border: 1px solid lightgray;
  border-radius: 16px;
  box-shadow: 5px 5px 16px lightgray;
`;

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Header = styled.div`
  font-size: 30px;
  padding-bottom: 20px;
`;

export const Label = styled.div`
  font-size: 22px;
  margin-bottom: 8px;
  padding-left: 6px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid var(--light-blue);
  font-size: 16px;
  padding: 8px;

  &:hover {
    background-color: var(--light-blue);
  }
  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  outline: none;
  border-radius: 8px;
  border: 1px solid var(--light-blue);
  font-size: 16px;
  padding: 14px 8px;
  overflow: auto;

  &:hover {
    background-color: var(--light-blue);
  }
`;

export const Error = styled.div`
  height: 18px;
  padding: 6px 0 0 6px;
  font-size: 12px;
  color: var(--red);
`;

export const SubmitBtn = styled.button`
  width: 180px;
  height: 50px;
  border: none;
  background-color: var(--light-blue);
  font-size: 22px;
  border-radius: 8px;
  margin-top: 20px;
`;
