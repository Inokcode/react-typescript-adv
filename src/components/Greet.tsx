import React from 'react'


type GreetProps = {
    name: string
    messageCount: number
}
const Greet = (props: GreetProps) => {
    return (
        <div>
            {props.name} ALL
            {props.messageCount}
        </div>
    )
}

export default Greet
