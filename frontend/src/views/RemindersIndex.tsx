import React, {useEffect, useState} from "react";
import {DemoJson} from "../jsonmodels/DemoJson";
import Note from "../jsonmodels/Note";

function RemindersIndex() {
    const [json, setJson] = useState<Note>();

    async function fetchContent(url: string) {
        const response = await fetch(url)
        return await response.json();
    }

    useEffect(() => {
        fetchContent("/api/testnote").then(res => setJson(res));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>{json?.name}</h1>
                <p>{json?.text}</p>
                <p>{json?.createdOn.toLocaleString()}</p>
                <p>{json?.reminder}</p>
            </header>
        </div>
    );
}

export default RemindersIndex;