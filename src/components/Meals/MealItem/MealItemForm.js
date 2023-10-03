import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amoutIsValid, setAmoutIsValid] = useState(true);

  const submitFormHandler = (e) => {
    e.preventDefault();

    const enteretAmount = amountInputRef.current.value;
    const enteretAmountNumber = +amountInputRef.current.value;

    if (
      enteretAmount.trim().length === 0 ||
      enteretAmountNumber < 1 ||
      enteretAmountNumber > 5
    ) {
      setAmoutIsValid(false);
      return;
    }

    props.onAddToCart(enteretAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amoutIsValid && <p>Please enter a valid amount!</p>}
    </form>
  );
};

export default MealItemForm;
