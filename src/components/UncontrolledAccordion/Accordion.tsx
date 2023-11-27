import React from 'react';

type AccordionPropsType = {
    titleValue: string
 //   collapsed: boolean
}

export function UncontrolledAccordion(props:AccordionPropsType) {
    console.log("Accordion rendering")

    const collapsed = false;

    return <div>
        <AccordionTitle title={props.titleValue}/><button>TOGGLE</button>
        { !collapsed && <AccordionBody/> }
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>-- {props.title} --</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            </ul>
        </div>
       )

}

export default UncontrolledAccordion