const Box = props => {
    const {className,content} = props;
    return (
        <div className={className}>
            <p>{content}</p>
        </div>
    )
}

const element = (
    <div>
        <h1 className="main-heading">Boxes</h1>
        <div className="box-container">
            <Box className="box small" content="Small" />
            <Box className="box medium" content="Medium" />
            <Box className="box large" content="Large" />
        </div>
    </div>
)

ReactDOM.render(element, document.getElementById("root"));
