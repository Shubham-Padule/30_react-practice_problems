// Implememnt the basic toggle switch component 
import React , {useState} from 'react'

const Five = () => {
    const [isToggle , setToggle] = useState(false);
    const handeltoggle =() =>
    {
        setToggle(!isToggle);
    }


  return (
    <div>
        <label>toggle switch
            <input type='checkbox' onChange={handeltoggle} />
        </label>
        <p>{isToggle ? "on" : " off"}</p>
      
    </div>
  )
}

export default Five
