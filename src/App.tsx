import { useEffect, useState } from "react";
import blood from "./assets/blood-splatter.png"
import smiley from "./assets/smiley.png"
import "./App.css";

function App() {
  const [today, setToday] = useState(new Date());

  const dateToCome = new Date("08/18/2025 09:00");

  const getPercentageDiff = (a: number, b: number, increment: number) => {
    return increment * Math.abs((a - b) / ((a + b) / 2));
  };

  // const diffTime = Math.abs(dateToCome.valueOf() - today.valueOf());
  // const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const percentageRemaining = getPercentageDiff(
    dateToCome.valueOf(),
    today.valueOf(),
    10000
  );

  const calculateHandPos = () => {
    const start = -90;
    const final = 270;

   const diff =  ((final - start) / (final - start)) * 100
    
    const handPosition = 90 + (diff * percentageRemaining)
    
    console.log(handPosition)
    
    return(handPosition)
  }

  useEffect(() => {
    setInterval(() => {
      setToday(new Date());
    }, 1000);
  });
{/* */}
  return (
    <>
    <p style={{fontSize: "32px"}}>Se viene el <div className="date-label">{/* dateToCome.toLocaleDateString()} {dateToCome.toLocaleTimeString()*/}&nbsp;</div></p>
      <section>
        <div className="label-container"><span className="label"><img src={smiley} className="blood-splatter" /><span className="label-text"></span></span></div>
        {/* <div className="hourhand"></div>
        <div className="secondhand"></div> */}
        <div className="minutehand" style={{transform: `rotate(-${calculateHandPos()}deg)`}}></div>
        <div className="hour12"></div>
        <div className="hour1"></div>
        <div className="hour2"></div>
        <div className="hour3"></div>
        <div className="hour4"></div>
        <div className="hour5"></div>
      </section>
    </>
  );
}

export default App;
