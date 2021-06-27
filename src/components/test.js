import React, { useState } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntryToPhoneBook((prevData) => ({ ...prevData, data }));
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="firstName"
        type="text"
        defaultValue="Coder"
        onChange={handleChange}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="lastName"
        type="text"
        defaultValue="Byte"
        onChange={handleChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="phone"
        type="text"
        defaultValue="8885559999"
        onChange={handleChange}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable({ dataTable }) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {dataTable && (
          <tr>
            {dataTable.map((r) => (
              <div>
                <th style={style.tableCell}>{r.firstName}</th>
                <th style={style.tableCell}>{r.lastName}</th>
                <th style={style.tableCell}>{r.phone}</th>
              </div>
            ))}
          </tr>
        )}
      </thead>
    </table>
  );
}

function Application(props) {
  const [dataTable, setDataTable] = useState([]);
  console.log(dataTable);
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={setDataTable} />
      <InformationTable dataTable={dataTable} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
