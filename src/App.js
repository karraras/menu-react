import React from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [data, setData] = React.useState(items);

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button
            className="filter-btn"
            onClick={function handle() {
              setData((prev) => {
                return prev.filter((ele) => {
                  return ele.category;
                });
              });
            }}
          >
            All
          </button>
          <button
            className="filter-btn"
            onClick={function handle() {
              setData((prev) => {
                return prev.filter((ele) => {
                  return ele.category === "breakfast";
                });
              });
            }}
          >
            Breakfast
          </button>
          <button
            className="filter-btn"
            onClick={function handle() {
              setData((prev) => {
                return prev.filter((ele) => {
                  return ele.category === "lunch";
                });
              });
            }}
          >
            Lunch
          </button>
          <button
            className="filter-btn"
            onClick={function handle() {
              setData((prev) => {
                return prev.filter((ele) => {
                  return ele.category === "shakes";
                });
              });
            }}
          >
            Shake
          </button>
        </div>
        <div className="section-center">
          {data.map((item) => {
            return <Menu key={item.id} {...item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
