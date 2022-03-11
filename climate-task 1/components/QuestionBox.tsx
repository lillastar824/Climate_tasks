import React, { memo } from "react";
import CustomRadio from "./CustomRadio";
import Slide from "./Slide";

function QuestionBox({ qData, handleRadioBtn, isRadioSelected }: any) {
  const { question, answers, correct, questionId } = qData;

  return (
    <Slide question={question}>
      {answers.map((ans: string, index: number) => {
        return (
          <CustomRadio
            name="radioBtn"
            label={ans}
            onChange={handleRadioBtn}
            value={ans}
            checked={isRadioSelected(ans)}
            key={index}
          />
        );
      })}
    </Slide>
  );
}
export default memo(QuestionBox);
