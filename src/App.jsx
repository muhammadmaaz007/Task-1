import Btn from "./components/Btn";
import { useState } from "react";
import Text from "./components/Text";
import Form from "./pages/Form";

const App = () => {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
  function changeA() {
    setA(true);
    setB(false);
    setC(false);
    setD(false);
  }
  function changeB() {
    setA(false);
    setB(true);
    setC(false);
    setD(false);
  }
  function changeC() {
    setA(false);
    setB(false);
    setC(true);
    setD(false);
  }
  function changeD() {
    setA(false);
    setB(false);
    setC(false);
    setD(true);
  }
  return (
    <>
      <div className="flex items-center justify-center w-full mt-10 gap-4">
        <Btn
          onClick={changeA}
          className={a ? "bg-black" : "bg-blue-400"}
          text="Supra MK4"
        />
        <Btn
          onClick={changeB}
          className={b ? "bg-black" : "bg-blue-400"}
          text="Kosseing"
        />
        <Btn
          onClick={changeC}
          className={c ? "bg-black" : "bg-blue-400"}
          text="Lamborghini"
        />
        <Btn
          onClick={changeD}
          className={d ? "bg-black" : "bg-blue-400"}
          text="Mazda"
        />
      </div>
      {a ? (
        <Text
          heading="Supra"
          img="/src/assets/images.jpg"
          para="The Toyota Supra MK4, produced from 1993 to 1998, is widely considered a legendary sports car renowned for its powerful twin-turbocharged 2JZ-GTE engine, exceptional handling, and timeless design; it gained immense popularity thanks to its appearance in the Fast and Furious movie franchise, further boosting its status as a highly sought-after car for tuning and modification, with enthusiasts appreciating its reliability and potential for significant horsepower upgrades, solidifying its place as a classic among car collectors and performance enthusiasts alike. "
        />
      ) : null}

      {b ? (
        <Text
          heading="Koenigsegg"
          img="/src/assets/koseing.jpg"
          para="The Jesko was unveiled in 2019 as the successor to the Koenigsegg Agera and is named after Jesko von Koenigsegg, the father of company founder Christian von Koenigsegg. The car is powered by a 5.0-liter twin-turbocharged V8 engine, producing up to 1,600 horsepower when running on E85 fuel. It features an advanced Light Speed Transmission (LST), active aerodynamics, and a carbon fiber monocoque for extreme performance. With a top speed projected to exceed 300 mph (482 km/h), the Jesko is designed for both track dominance and high-speed stability. It stands as one of the most advanced hypercars in the world, pushing the limits of automotive engineering. 🚀🔥"
        />
      ) : null}

      {c ? (
        <Text
          heading="Lamborghini"
          img="/src/assets/lambo.jpg"
          para="The Lamborghini Aventador is a flagship V12-powered supercar produced by the Italian automaker Lamborghini from 2011 to 2022. Known for its aggressive design, sharp aerodynamics, and exhilarating performance, the Aventador became an icon in the world of high-performance sports cars. It is powered by a 6.5-liter naturally aspirated V12 engine, producing up to 769 horsepower in its final iteration, the Aventador Ultimae, allowing it to accelerate from 0 to 100 km/h (0-62 mph) in just 2.8 seconds. The Aventador features an all-wheel-drive system, advanced aerodynamics, and a lightweight carbon fiber monocoque chassis for superior handling and speed. With its signature scissor doors, roaring exhaust note, and futuristic technology, the Aventador remains one of Lamborghini’s most legendary creations, marking the end of the brand’s pure V12 era. 🚀🔥"
        />
      ) : null}

      {d ? (
        <Text
          heading="Mazda"
          para="The Lamborghini Aventador is a flagship V12-powered supercar produced by the Italian automaker Lamborghini from 2011 to 2022. Known for its aggressive design, sharp aerodynamics, and exhilarating performance, the Aventador became an icon in the world of high-performance sports cars. It is powered by a 6.5-liter naturally aspirated V12 engine, producing up to 769 horsepower in its final iteration, the Aventador Ultimae, allowing it to accelerate from 0 to 100 km/h (0-62 mph) in just 2.8 seconds. The Aventador features an all-wheel-drive system, advanced aerodynamics, and a lightweight carbon fiber monocoque chassis for superior handling and speed. With its signature scissor doors, roaring exhaust note, and futuristic technology, the Aventador remains one of Lamborghini’s most legendary creations, marking the end of the brand’s pure V12 era. 🚀🔥"
          img="/src/assets/mazda.jpg"
        />
      ) : null}
    </>
  );
};

export default App;
