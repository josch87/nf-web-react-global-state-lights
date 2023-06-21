import Link from "../components/Link";

export default function HomePage({ sumTurnedOnLights }) {
  return (
    <div>
      <h1>Home</h1>
      {sumTurnedOnLights === 1 ? (
        <p> {sumTurnedOnLights} light is on.</p>
      ) : (
        <p> {sumTurnedOnLights} lights are on.</p>
      )}

      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
