import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  {
    id: 1,
    name: "Living Room",
    isOn: false,
  },
  {
    id: 2,
    name: "Kitchen",
    isOn: false,
  },
  {
    id: 3,
    name: "Bedroom",
    isOn: false,
  },
  {
    id: 4,
    name: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    name: "Garage",
    isOn: false,
  },
  {
    id: 6,
    name: "Porch",
    isOn: false,
  },
  {
    id: 7,
    name: "Garden",
    isOn: false,
  },
  {
    id: 8,
    name: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const sumLights = lights.length;
  const sumTurnedOnLights = lights.filter(
    (light) => light.isOn === true
  ).length;

  let isDimmed = false;
  if (sumTurnedOnLights === 0) {
    isDimmed = true;
  }

  function handleToggle(lightId) {
    setLights(
      lights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleAllLightsStatus(status) {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: status };
      })
    );
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={handleToggle}
        sumLights={sumLights}
        sumTurnedOnLights={sumTurnedOnLights}
        allLightsStatus={handleAllLightsStatus}
      />
    </Layout>
  );
}
