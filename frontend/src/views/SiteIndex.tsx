import React, {useEffect, useState} from "react";
import {DemoJson} from "../jsonmodels/DemoJson";

function SiteIndex() {
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
                <h1>This is the main site index</h1>
                <p>It's rather dry...</p>
            </header>
        </div>
    );
}

export default SiteIndex;