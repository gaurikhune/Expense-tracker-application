import react from 'react';
import "./DateExpenses.css";

const DateExpenses = (props) => {

    const month = props.row.date.toLocaleString("en-us", { month: "long" })
    const date = props.row.date.getDate();
    const year = props.row.date.getFullYear();

    return (
        <div className="dateformat">
            <h2>{month}</h2>
            <p>{year}</p>
            <h3>{date}</h3>
        </div>
    )
}
export default DateExpenses;