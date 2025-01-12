// import { check } from "prettier";
import React from "react";
import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";


function SearchResults({ Bookings }) {
  console.log(Bookings)
  console.log(FakeBookings)
  // id: 1, title: 'Mr', firstName: 'John', surname: 'Doe', email: 'johndoe@doe.com',



  function highlight(e) {
    console.log("Onclick Function is working")
    console.log(e.target)
  }
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">First Name</th>
            <th scope="col">surname</th>
            <th scope="col">Email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">Nights/Stay</th>
          </tr>
        </thead>
        <tbody>
          {
            Bookings.map((val, key) => {
              return (
                <tr key={key}>
                  <td onClick={highlight}>{val["id"]}</td>
                  <td onClick={highlight}>{val["title"]}</td>
                  <td onClick={highlight}>{val["firstName"]}</td>
                  <td onClick={highlight}>{val["surname"]}</td>
                  <td onClick={highlight}>{val["email"]}</td>
                  <td onClick={highlight}>{val["roomId"]}</td>
                  <td onClick={highlight}>{val["checkInDate"]}</td>
                  <td onClick={highlight}>{val["checkOutDate"]}</td>
                  <td onClick={highlight}>{moment(val["checkOutDate"]).diff(moment(val["checkInDate"]), "days")}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

// checkInDate: "2017-11-21"
// checkOutDate: "2017-11-23"
// email: "johndoe@doe.com"
// firstName: "John"
// id: 1
// roomId: 2
// surname: "Doe"
// title: "Mr"

export default SearchResults;
// <table className="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   {
//     FakeBookings.map(value => {
//       <tr key={key}>
//         <th scope="row">${value["id"]}</th>
//         <td key={value}>${value["title"]}</td>
//         <td>${value["firstName"]}</td>
//         <td>${value["surname"]}</td>
//         <td>${value["email"]}</td>
//         <td>${value["roomId"]}</td>
//         <td>${value["checkInDate"]}</td>
//         <td>${value["checkOutDate"]}</td>
//       </tr>
//     }
//     )
//   }
// </table>


