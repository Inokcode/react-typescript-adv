import React from 'react'
type personListProps = {
    names: {
        first: string
        last: string
    }[]
}
const PersonList = (props: personListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (<h2>{name.first}{name.last}</h2>)
            })}
        </div>
    )
}

export default PersonList
