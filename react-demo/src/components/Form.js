import { useState } from "react"

export const Form = () => 
{
    const [country, setCountry] = useState('');
    const [username, setUsername] = useState('');

    const handleSelection = (event) => 
    {
        event.preventDefault();
        if (event.currentTarget.id === 'countries')
            alert(`Country selection is: ${country}`);
        else
            alert(`Username: ${username}, set.`)
    };

    return (
<div>
    <form id="countries" onSubmit={handleSelection}>     
        <select name="countries" id="country" value={country} onChange={(event) => {setCountry(event.target.value)}}>
            <option value="Isreal">Israel</option>
            <option value="Syria">Syria</option>
            <option value="Labanon">Labanon</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
        </select>
        <button type="submit">Submit</button>
    </form>    
    
    <form id="user" onSubmit={handleSelection}>
        <label>Username</label>
         <input type="text" value={username} onChange={(event) => {setUsername(event.target.value)}}/>     
        <button type="submit">Submit</button>
    </form>
</div>
)
}

