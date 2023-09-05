import { Outlet, Link } from "react-router-dom";

export default function QbounceNav() {
    return (
        <>
            {/*
            make the subnavbar for qbounce here.
            -history
            -height calculator
            -info
            it is bellow:
            */}
            <div className="container secnav">
                <div className="row">
                    <div className="col">
                        <Link
                            to="/qbounce/history"
                            style={{
                                textDecoration: "none",
                                color: "black",
                            }}
                        >
                            History
                        </Link>
                    </div>
                    <div className="col">
                        <Link
                            to="/qbounce/heightcalculator"
                            style={{
                                textDecoration: "none",
                                color: "black",
                            }}
                        >
                        Height-Calculator
                        </Link>
                    </div>
                    <div className="col">
                        <Link
                            to="/qbounce/info"
                            style={{
                                textDecoration: "none",
                                color: "black",
                            }}
                        >
                            Info
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}
