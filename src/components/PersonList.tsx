import React from 'react'
import { Name } from './Person.types'
type personListProps = {
    names: Name[]
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
