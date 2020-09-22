import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import EmployeeCard from "./EmployeeCard";

function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((res) => setEmployees(res.data));
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {employees &&
          employees.length > 0 &&
          employees.map((employee) => (
            <Grid item key={employee.id} xs={12} sm={6} md={4} lg={4} xl={3}>
              <EmployeeCard
                email={employee.email}
                avatar={employee.avatar}
                fname={employee.first_name}
                lname={employee.last_name}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
export default EmployeesList;
