import SimpleCard from "./components/SimpleCard";

export default function Home() {
  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Welcome to the Multi-PWA Demo</h1>
      <p style={{ textAlign: 'center', maxWidth: '60ch', margin: '0 auto 2rem auto', opacity: 0.9 }}>
        This is the main PWA. You can install it, or you can navigate to one of the sub-apps and install them independently.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        <SimpleCard
          title="App 1"
          description="An independent PWA with its own components, hooks, and scope."
          link="/beautifulmind"
        />
        <SimpleCard
          title="App 2"
          description="Another independent PWA, kept separate from App 1."
          link="/games"
        />
      </div>
    </>
  );
}
