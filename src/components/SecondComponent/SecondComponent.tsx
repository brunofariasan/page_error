import React from "react";

interface Props {
    name: string 
}
const SecondComponent = (props: Props) => {
    return (
        <div>
            <p>{}</p>
            <p>O nome do componente é {props.name}</p>
        </div>
    )
};

export default SecondComponent;