import React from "react";

const USERS_URL = "https://example.com/api/users";

export default function App() {
  const getData = (pageNumber) =>
    fetch(
      USERS_URL +
        new URLSearchParams({
          page: pageNumber,
        }), {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        }
    );

  React.useEffect(() => {
    getData(1)
      .then((data) => console.log(data))
      .catch((e) => console.error(e));
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>// render elements in tbody</tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn">first</button>
        <button className="previous-page-btn">previous</button>
        <button className="next-page-btn">next</button>
        <button className="last-page-btn">last</button>
      </section>
    </div>
  );
}
