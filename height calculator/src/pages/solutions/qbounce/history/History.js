import Navbar from "../../../../components/Navbar";
import ResultList from "../../../../components/ResultList";

const exampleResult = [
    {
        timeofsubmission: "2021-09-01T00:00:00.000Z",
        time: 1,
        height: 1,
    },
    {
        timeofsubmission: "2021-09-02T00:00:00.000Z",
        time: 2,
        height: 2,
    },
    {
        timeofsubmission: "2021-09-03T00:00:00.000Z",
        time: 3,
        height: 3,
    },
];
export default function History() {
    return (
        <>
            <div
                className="container"
                style={{
                    padding: "20px",
                }}
            >
                <h1>Qbounce usage history</h1>
                <ResultList results={exampleResult} />
            </div>
        </>
    );
}
