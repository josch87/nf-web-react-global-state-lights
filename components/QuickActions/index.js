import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  allLightsStatus,
  sumLights,
  sumTurnedOnLights,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          allLightsStatus(false);
        }}
        disabled={sumTurnedOnLights === 0 ? true : null}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          allLightsStatus(true);
        }}
        disabled={sumTurnedOnLights === sumLights ? true : null}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
