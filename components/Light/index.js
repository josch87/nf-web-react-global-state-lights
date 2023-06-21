import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, isOn, onToggle }) {
  // function handleToggle() {
  //   setIsOn((isOn) => !isOn);
  // }

  return (
    <LightButton type="button" onClick={onToggle} isOn={isOn}>
      <Icon isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
