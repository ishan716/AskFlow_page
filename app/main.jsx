// ============ APP ROOT ============

function App() {
  return (
    <React.Fragment>
      <Nav />
      <a id="top"></a>
      <Hero />
      <Strip />
      <Intro />
      <Mission />
      <Features />
      <Showcase />
     
      <HowItWorks />
      <Requirements />
      <UseCases />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
