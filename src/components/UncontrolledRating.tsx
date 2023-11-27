import React, {useState} from 'react';


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props:RatingPropsType)
{
    console.log("Rating rendering")

    let [value, setValue] = useState(4);

        return (
            <div>
                <Star selected = {props.value > 0} setValue ={setValue}/>
                <Star selected = {props.value > 1} setValue ={setValue}/>
                <Star selected = {props.value > 2} setValue ={setValue}/>
                <Star selected = {props.value > 3} setValue ={setValue}/>
                <Star selected = {props.value > 4} setValue ={setValue}/>
            </div>
        )
}

type StarPropsType = {
    selected: boolean
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering");
    return <span onClick={()=>{props.setValue(5)}}>{props.selected ? <b>star</b> : "star"} </span>
}
