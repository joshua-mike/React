
export const ClickHandler = () => 
{
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

const clickHandler = (event, count = 1) =>
{
    console.log('Button clicked', count, event)
}