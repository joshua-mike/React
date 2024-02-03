import { useState } from "react";

export const Form = () => 
{
  const [username, setUsername] = useState("");

  const handleSelection = (event) => 
  {
    event.preventDefault();
    if (username === "")
        alert(`No user name, no country. Please set a country.`)
    else alert(`You're golden ${username}. Contry selection, ${event.target.value}, is set.`)
    // if (event.currentTarget.id === "countries")
    //   alert(`Country selection is: ${event.target.value}`);
    // else alert(`You're golden ${username}.`);
  };

  return (
    <div>
        <textarea defaultValue="Enter your username and desired country destination."></textarea>
      <form id="user">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(event) => 
          {
            setUsername(event.target.value);
          }}
        />
      </form>

      <select
        name="selection"
        id="countries"
        onChange={(event) => 
        {
          handleSelection(event);
        }}
      >
        <option value="United States">United States</option>
        <option value="Mexico">Mexico</option>
        <option value="Canada">Canada</option>
        <option value="Croatia">Croatia</option>
        <option value="Italy">Italy</option>
        <option value="Greece">Greece</option>
        <option value="Malta">Malta</option>
      </select>
    </div>
  );
};
