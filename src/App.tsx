import React from 'react'
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {

    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    )
}

function AppTitle() {
console.log("AppTitle rendering")
    return <>This is APP component</>
}

export default App
