import Base from "./components/Base";
import Screen from "./components/Screen";
import Button from "./components/Button";
import ButtonDisplay from "./components/ButtonDisplay";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "=", ""],
];

function App() {
  return (
      <Base>
      <Screen value="0" />
      <ButtonDisplay>
      {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "" ? "hi" : "button"}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })
        }
      </ButtonDisplay>
      </Base>
  );
}

export default App;
