export async function getEmployees() {
  await fetch("https://reqres.in/api/users?page=1")
    .then((res) => res.json())
    .then((res) => res)
    .catch((e) => console.log("Error: ", e));
}
