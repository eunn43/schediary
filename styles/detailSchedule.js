import styled from "@emotion/styled";

export const SchedulePage = styled.div`
  width: 500px;
  height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 16px;
  box-shadow: 5px 5px 16px lightgray;
`;

export const ScheduleWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScheduleTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const ScheduleTime = styled.div`
  width: 36px;
  height: 35px;
  font-size: 12px;
  padding: 4px 0 0 2px;
  border-top: 0.5px solid var(--navy);

  border-right: ${({ schedule }) =>
    schedule ? "10px solid " + schedule : "none"};
  display: flex;
  align-items: start;
  justify-content: start;
`;

export const ScheduleContentBox = styled.div``;

export const ScheduleContent = styled.div`
  width: 200px;
  height: 35px;
  border-top: 0.5px solid var(--navy);
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 10px;
`;

export const ScheduleContentInput = styled.input`
  width: 200px;
  height: 35px;
  border: none;
  border-top: 0.5px solid var(--navy);
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: start;

  &:focus {
    outline: none;
  }
`;

export const MemoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
`;

export const Memo = styled.div`
  width: 90%;
  height: 40%;
  border-top: 2.6px solid var(--mustard);
  border-radius: 4px;
  background-color: rgba(255, 219, 88, 0.2);
  padding: 10px;
  white-space: pre-wrap;
  line-height: 1.6;
`;

export const MemoInput = styled.textarea`
  width: 90%;
  height: 40%;
  border: none;
  border-top: 2.6px solid var(--mustard);
  border-radius: 4px;
  background-color: rgba(255, 219, 88, 0.2);
  padding: 10px;
  white-space: pre-wrap;
  line-height: 1.6;
  font-size: 16px;
  resize: none;

  &:focus {
    outline: none;
  }
`;
export const ColorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const ColorBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Color = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${({ color }) => (color ? color : "#00408022")};
  border-radius: 50%;
  margin: 0 4px;
  box-shadow: ${({ isSelected }) => (isSelected ? "inset 0 0 7px gray" : "")};
`;

export const ColorPickerBox = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  padding: 8px;
  background-color: white;
  border-radius: 8px;
`;
