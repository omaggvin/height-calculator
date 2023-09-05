import Navbar from "../../../../components/Navbar";
import ResultList from "../../../../components/ResultList";

const exampleResult = [
    {
        name: "result1",
        timeofsubmission: "2021-09-01T00:00:00.000Z",
        time: 1,
        height: 1,
    },
    {
        name: "result2",
        timeofsubmission: "2021-09-02T00:00:00.000Z",
        time: 2,
        height: 2,
    },
    {
        name: "result3",
        timeofsubmission: "2021-09-03T00:00:00.000Z",
        time: 3,
        height: 3,
    },
];
export default function History() {
    const items = JSON.parse(localStorage.getItem('QBounceHistory')) || [];


    return (
        <>
            <div className="container ">
                <h1>Qbounce usage history</h1>
                <ResultList results={items} />
            </div>
        </>
    );
}
