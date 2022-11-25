import '../Main/Main.scss';
import { useState } from 'react';
const Main = () => {
    const [username,setUsername] = useState("");
    const Click = (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log("submitted");
        alert(`name: ${username}`);
        setUsername(""); 
    }
    const handleUsername = (e) => {
        console.log(e.target.value);
        setUsername(e.target.value);
      };
    return(
        <div className='main'>
            <h1 className='party'>BIRTHDAY PARTY</h1>
            <form className='form' onSubmit={Click}>
                <label>
                    <input type="text" name="name" placeholder='Please enter a name' className='box' value={username} onChange={handleUsername}/>
                </label>
                <br/>
                <input type="submit" className='submit'/>
            </form>
            <h1 className='user'>HAPPY BİRTHDAY {username.toUpperCase()}!</h1>
        </div>

    )
}
export default Main;