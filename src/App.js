import react, { useState } from 'react';
import Expenses from './components/Expenses';
import Expenseform from './components/Expenseform';
import './App.css';
const App = () => {




    const dummydata = [
        {
            id: 123,
            item: "new tv",
            price: 1233,
            date: new Date(2022, 10, 7)
        },
        {
            id: 124,
            item: "Microwave",
            price: 1222,
            date: new Date(2021, 6, 5)
        },
        {
            id: 125,
            item: "Oven",
            price: 1233,
            date: new Date(2025, 10, 9)
        },
        {
            id: 126,
            item: "Wall hanging",
            price: 1255,
            date: new Date(2022, 25, 5)
        },
        {
            id: 127,
            item: "Blender",
            price: 1444,
            date: new Date(2025, 29, 8)
        },
        {
            id: 128,
            item: "Toster",
            price: 1890,
            date: new Date(2023, 15, 5)
        }
    ];


    const [expencevalue, setExpencevalue] = useState(dummydata);
    console.log(expencevalue);
    const expenceData = (dataobject) => {
        console.log(dataobject);
        setExpencevalue([...expencevalue, dataobject]);

    };

    return (
        <>


            <Expenseform expenceData={expenceData} />

            <Expenses dummydata={expencevalue} />

        </>
    );

};
export default App;

