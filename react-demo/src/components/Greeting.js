export const Greet = (greeting) =>
{
    return (
        <div>
            <h1>React.js Component {greeting.name}</h1>
            {greeting.children}
        </div>
        
    ) 
}