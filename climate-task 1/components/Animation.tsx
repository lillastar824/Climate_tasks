import React, { useState } from "react";
import CustomRadio from "./CustomRadio";
import Slide from "./Slide";

function Animation() {
  const [selected, setSelected] = useState("");

  const handleRadioBtn = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelected(e.target.value);
  };
  const isRadioSelected = (value: string): boolean => selected === value;

  return (
    <>
      <Slide>
        <CustomRadio
          name="radioBtn"
          label={"Electricity is measured in units called watts"}
          onChange={handleRadioBtn}
          value="one"
          checked={isRadioSelected("one")}
        />

        <CustomRadio
          name="radioBtn"
          label={"Second One"}
          onChange={handleRadioBtn}
          value="two"
          checked={isRadioSelected("two")}
        />

        <CustomRadio
          name="radioBtn"
          label={"Third One"}
          onChange={handleRadioBtn}
          value="third"
          checked={isRadioSelected("third")}
        />
      </Slide>
    </>
  );
}
export default Animation;
