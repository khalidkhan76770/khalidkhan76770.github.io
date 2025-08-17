// app.js
function App() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Welcome to My Landing Page</h1>
          <p>Build modern interfaces with Bootstrap & React.</p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Features</h2>
          <div className="row">
            <div className="col-md-4">
              <h3>Feature One</h3>
              <p>Quickly scaffold stylish UI with Bootstrap classes.</p>
            </div>
            <div className="col-md-4">
              <h3>Feature Two</h3>
              <p>Use React components for dynamic content.</p>
            </div>
            <div className="col-md-4">
              <h3>Feature Three</h3>
              <p>Mix custom CSS to give your page a unique identity.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
