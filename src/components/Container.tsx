type ContainerProps = {
    styles: React.CSSProperties
}

const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            styles content goes here
        </div>
    )
}

export default Container
