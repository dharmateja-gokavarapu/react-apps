import { useReducer } from "react";

const initialState = {
  showTextFlag: true,
  changeTextStyleFlag: false,
};

const Hide_Text = "Hide_Text";
const Show_Text = "Show_Text";
const Change_Text_Color = "Change_Text_Color";

function reducer(state, action) {
  switch (action.type) {
    case Hide_Text:
      return {
        ...state,
        showTextFlag: false,
      };
    case Show_Text:
      return {
        ...state,
        showTextFlag: true,
      };
    case Change_Text_Color:
      return {
        ...state,
        changeTextStyleFlag: !state.changeTextStyleFlag,
      };

    default:
      return state;
  }
}

export default function UseReducerConcept() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      {state?.showTextFlag ? (
        <h3
          style={{
            backgroundColor: state.changeTextStyleFlag ? "red" : "yellow",
          }}
        >
          Reducer Example Text
        </h3>
      ) : null}
      <button onClick={() => dispatch({ type: "Hide_Text" })}>Hide Text</button>
      <button onClick={() => dispatch({ type: "Show_Text" })}>Show Text</button>
      <button onClick={() => dispatch({ type: "Change_Text_Color" })}>
        Toggle Text Styles
      </button>
    </div>
  );
}
