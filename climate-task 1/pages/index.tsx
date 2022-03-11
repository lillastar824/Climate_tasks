import { useState } from "react";
import Icon from "../components/Icon";
import QuestionBox from "../components/QuestionBox";
import Welcome from "../components/Welcome";
import RightIcon from "../styles/imges/arrow.png";
import leftIcon from "../styles/imges/leftArrow.png";
import { DUMMY_QUESTIONS } from "../utils";
import AnimationTemplate from "../components/AnimationTemplate";
const HomePage: React.FC = () => {
  const [selected, setSelected] = useState("");
  const [curr, setCurr] = useState(0);
  const [answers, setAnsers] = useState<any>([]);
  const [isWelcom, setIsWelcom] = useState(false);

  const handleRadioBtn = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    setSelected(e.target.value);
  };

  const isRadioSelected = (value: string): boolean => selected === value;

  const handleNext = () => {
    setCurr((prev) => prev + 1);
    setAnsers((answers: any) => [...answers, selected]);

    if (curr === DUMMY_QUESTIONS.length - 1) {
      setIsWelcom(true);
    }
  };
  const handlePrev = () => {
    setCurr((prev) => prev - 1);
  };

  return (
    <AnimationTemplate>
      <div className="climate-main">
        {isWelcom ? (
          <Welcome />
        ) : (
          <>
            {curr > 0 && <Icon icon={leftIcon} handleIconClick={handlePrev} />}

            {DUMMY_QUESTIONS.slice(curr, curr + 1).map((qData, index) => (
              <QuestionBox
                key={index}
                qData={qData}
                isRadioSelected={isRadioSelected}
                handleRadioBtn={handleRadioBtn}
              />
            ))}
            {curr < DUMMY_QUESTIONS.length && (
              <Icon icon={RightIcon} handleIconClick={handleNext} />
            )}
          </>
        )}
      </div>
    </AnimationTemplate>
  );
};

export default HomePage;
