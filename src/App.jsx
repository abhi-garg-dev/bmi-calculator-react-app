import { useState } from "react";
import "./App.css";
import img from "../src/assets/underweight.png";
import img1 from "../src/assets/overweight.png";
import img2 from "../src/assets/healthy.png";
import img3 from "../src/assets/highoverweight.png";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //Logic Part
  const calBmi = (e) => {
    e.preventDefault();
    const ibs = 2.20462;
    if (weight === 0 || height === 0) {
      alert("Please Enter a valid weight and height");
    } else {
      let bmi = ((weight * ibs) / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are underweight Increase Weight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You are Fit");
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage("You are overweight Risk");
      } else if (bmi >= 30 && bmi < 34.9) {
        setMessage("You are Obese 1 High Risk");
      } else if (bmi >= 35 && bmi < 39.9) {
        setMessage("You are Obese 2 Very High Risk");
      } else {
        setMessage("You are Obese 3 Extremly High Risk");
      }
    }
  };

  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 18.5) {
      imgSrc = img;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      imgSrc = img2;
    } else if (bmi >= 25 && bmi < 29.9) {
      imgSrc = img1;
    } else if (bmi >= 30 && bmi < 34.9) {
      imgSrc = img3;
    } else if (bmi >= 35 && bmi < 39.9) {
      imgSrc = img3;
    } else {
      imgSrc = img3;
    }
  }

  //reload

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <h2>BMI Calculator</h2>
          <form onSubmit={calBmi}>
            <div>
              <label>Weight (kg)</label>
              <input
                type="text"
                placeholder="Enter Weight Value"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Height (in)</label>
              <input
                type="text"
                placeholder="Enter Height Value"
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button
                className="btn btn-outline"
                onClick={reload}
                type="submit"
              >
                Reload
              </button>
            </div>
            <div>
              <h3>Your BMI is: {bmi}</h3>
              <p>{message}</p>
            </div>
            <div className="img-container">
              <img src={imgSrc} alt=""></img>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
