import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  allLightsStatus,
  sumLights,
  sumTurnedOnLights,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        allLightsStatus={allLightsStatus}
        sumLights={sumLights}
        sumTurnedOnLights={sumTurnedOnLights}
      />
    </>
  );
}
