import { useState } from "react"

export const Form = () => 
{
    const [username, setUsername] = useState('')

    const handleSubmit = (event) => 
    {
        event.preventDefault()
        alert(`Form data is ${username}`)
    
    }

    return (
        <form onSelect={handleSubmit}>
            <textarea>This is a list of countries.</textarea>
            <select name="country" id="country">
            <option value="isreal">Israel</option>
            </select>
        </form>
    )
    
    // return ( 
    // <form onSubmit={handleSubmit}>
    //     <div>
    //         <label>Username</label>
    //         <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
    //     </div>
    //     <button type="submit">Submit</button>
    // </form>
    // )

}

