import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { getSchedule, modSchedule } from "@/utils/scheduleStorage";
import { getColors, modColors } from "@/utils/colorsStorage";
import {
  MemoInput,
  MemoBox,
  SchedulePage,
  ScheduleWrapper,
  ScheduleTimeBox,
  ScheduleTime,
  ScheduleContentBox,
  ScheduleContentInput,
} from "@/styles/detailSchedule";
import { CardBackGround, BtnWrapper, Btn } from "@/styles/detail";
import { Page } from "@/styles/new";
import {
  Color,
  ColorBox,
  ColorPickerBox,
  ColorWrapper,
} from "styles/detailSchedule";
import { HexAlphaColorPicker } from "react-colorful";

const start = 6;
const end = 24;

export default function ModifySchedulePage() {
  const router = useRouter();
  const [date, setDate] = useState(router.query.boardId);
  const [schedule, setSchedule] = useState({
    timetable: Array(end - start).fill({ task: "", color: "" }),
    memo1: "",
    memo2: "",
  });
  const [showPicker, setShowPicker] = useState(false);
  const ColorPickerBoxRef = useRef(null);
  const [colors, setColors] = useState(["", "", ""]);
  const [selectedColorIdx, setSelectedColorIdx] = useState(-1);
  const [color, setColor] = useState("");

  useEffect(() => {
    const onClickColorOutside = (e) => {
      if (
        ColorPickerBoxRef.current &&
        !ColorPickerBoxRef.current.contains(e.target)
      ) {
        setShowPicker(false);
      }
    };

    if (showPicker) document.addEventListener("click", onClickColorOutside);
    else document.removeEventListener("click", onClickColorOutside);
    return () => {
      document.removeEventListener("click", onClickColorOutside);
    };
  }, [showPicker]);

  useEffect(() => {
    if (selectedColorIdx !== -1) {
      const newColors = [...colors];
      newColors[selectedColorIdx] = color;
      setColors(newColors);
      modColors(newColors);
    }
  }, [color]);

  useEffect(() => {
    if (!router.query.boardId) return;
    setDate(router.query.boardId);
    setColors(getColors());
  }, [router.query.boardId]);

  useEffect(() => {
    if (!date) return;

    const scheduleData = getSchedule(date);

    if (scheduleData) {
      setSchedule({
        timetable: [...scheduleData.timetable],
        memo1: scheduleData.memo1,
        memo2: scheduleData.memo2,
      });
    }
  }, [date]);

  const handleDragStart = (e, idx) => {
    e.dataTransfer.setData("index", idx);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIdx) => {
    e.preventDefault();
    const dragIdx = parseInt(e.dataTransfer.getData("index"));
    updateTimetableColor(dragIdx, dropIdx);
  };

  const updateTimetableColor = (dragIdx, dropIdx) => {
    const newTimetable = schedule.timetable.map((item, idx) => {
      if (idx >= dragIdx && idx <= dropIdx) return { ...item, color: color };
      return item;
    });

    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      timetable: newTimetable,
    }));
  };

  const onScheduleKeyDown = (e, idx) => {
    if (e.key === "Enter" || e.key === "ArrowDown") {
      e.preventDefault();

      const nextInput = document.getElementById(`scheduleInput${idx + 1}`);
      if (nextInput) nextInput.focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();

      const nextInput = document.getElementById(`scheduleInput${idx - 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const onClickCancelColor = () => {
    setSelectedColorIdx(-1);
    setColor("");
  };

  const onClickColor = (idx) => {
    if (selectedColorIdx !== idx) setSelectedColorIdx(idx);
    setShowPicker(true);
    setColor(colors[idx]);
  };

  const onClickClose = () => {
    router.push(`/boards/${date}`);
  };

  const onClickSubmit = () => {
    modSchedule(date, schedule.timetable, schedule.memo1, schedule.memo2);
    router.push(`/boards/${date}`);
  };

  return (
    <Page>
      <SchedulePage>
        <CardBackGround>
          <ScheduleWrapper>
            <ScheduleTimeBox>
              {schedule.timetable.map((item, idx) => (
                <ScheduleTime
                  schedule={item.color}
                  draggable="true"
                  onDragStart={(e) => handleDragStart(e, idx)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, idx)}
                >
                  {(idx + start).toString().padStart(2, "0")}
                </ScheduleTime>
              ))}
            </ScheduleTimeBox>
            <ScheduleContentBox>
              {schedule.timetable.map((item, idx) => (
                <ScheduleContentInput
                  id={`scheduleInput${idx}`}
                  type="text"
                  autocomplete="off"
                  placeholder={item.task}
                  maxlength={14}
                  onKeyDown={(e) => onScheduleKeyDown(e, idx)}
                />
              ))}
            </ScheduleContentBox>
            <MemoBox>
              <BtnWrapper>
                <Btn onClick={onClickSubmit}>등록</Btn>
                <Btn onClick={onClickClose}>닫기</Btn>
              </BtnWrapper>
              <ColorWrapper>
                <ColorBox>
                  <Color
                    isSelected={selectedColorIdx === -1}
                    onClick={onClickCancelColor}
                  ></Color>
                  {colors.map((color, idx) => (
                    <Color
                      color={color}
                      isSelected={selectedColorIdx === idx}
                      onClick={() => onClickColor(idx)}
                    />
                  ))}
                </ColorBox>
                {showPicker && (
                  <ColorPickerBox ref={ColorPickerBoxRef}>
                    <HexAlphaColorPicker
                      color={color}
                      onChange={setColor}
                    ></HexAlphaColorPicker>
                  </ColorPickerBox>
                )}
              </ColorWrapper>
              <MemoInput>{schedule.memo1}</MemoInput>
              <MemoInput>{schedule.memo2}</MemoInput>
            </MemoBox>
          </ScheduleWrapper>
        </CardBackGround>
      </SchedulePage>
    </Page>
  );
}
