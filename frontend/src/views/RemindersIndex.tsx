import React, {useEffect, useState} from "react";
import {DemoJson} from "../jsonmodels/DemoJson";

function RemindersIndex() {
    const [json, setJson] = useState<DemoJson>();

    async function fetchContent() {
        const response = await fetch("/api/")
        return await response.json();
    }

    useEffect(() => {
        fetchContent().then(res => setJson(res));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>{json?.headerText}</h1>
                <p>{json?.bodyText}</p>
            </header>
        </div>
    );
}

export default RemindersIndex;