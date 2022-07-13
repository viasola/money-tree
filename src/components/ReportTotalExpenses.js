// import React, { Fragment, useEffect, useState } from "react";


// export default function ReportTotalExpenses() {


//     let thisMonth = new Date().getMonth() + 1;

//     fetch(`http://localhost:8080/expenses/monthly/${thisMonth}`)
//     .then((res) => res.json())
//     .then((data) =>
//         data
//         .map((expense) => Number(expense.amount))
//         .reduce((total, amount) => total + amount)
//     )
//     .then((data) => setExpenses(data));

// }