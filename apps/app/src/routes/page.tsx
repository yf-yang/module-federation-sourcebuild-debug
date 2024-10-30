import "./index.css";

const Index = () => (
  <button
    onClick={async () => {
      (await import("lazy-dep")).foo();
    }}
  >
    Load lazy dep
  </button>
);

export default Index;
