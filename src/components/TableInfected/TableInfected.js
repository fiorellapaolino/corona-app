import React from 'react'
import './TableInfected.scss'
import {KeyboardArrowUp} from "@material-ui/icons";
function TableInfected({ data, setData }) {

  const orderByAge = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.age < b.age) {
        return -1;
      }
      if (a.age > b.age) {
        return 1;
      }
      return 0;
    });
    setData(sortedData);
  }

  return (
    <div>
      {/* <button type="button" onClick={orderByAge}>Order by Age</button> */}
      <div className="tbl-header">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Country</th>
              <th>Live</th>
              <th>Age<button type="button" onClick={orderByAge}><span><KeyboardArrowUp /></span></button></th>
              <th>Infect Date</th>
              <th>Female</th>
            </tr>
          </thead>
        </table>
        <div className="tbl-content">
          <table>
            <tbody>
              {data.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.country}</td>
                    <td>{user.live ? "Alive" : "Deceased"}</td>
                    <td>{user.age}</td>
                    <td>{user.infect_date}</td>
                    <td>{user.female ? "Female" : "Male"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableInfected
