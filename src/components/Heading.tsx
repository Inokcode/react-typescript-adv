import React from 'react'

type ChildrenProps = {
    children: string
}

const Heading = (props: ChildrenProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Heading
