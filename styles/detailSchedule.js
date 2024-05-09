import styled from "@emotion/styled";

export const ScheduleWrapper = styled.div`
  width: 100%;
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

  border-right: ${({ schedule }) => (schedule ? "10px solid skyblue" : "none")};
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
  background-color: rgba(255, 219, 88, 0.5);
  padding: 10px;
  white-space: pre-wrap;
  line-height: 1.6;
`;
