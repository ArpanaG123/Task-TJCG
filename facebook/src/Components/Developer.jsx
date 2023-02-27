import React, { useEffect, useState } from 'react'
import './Style.css'

const Developer = () => {

    const url = "https://developers.facebook.com/docs/instagram-basic-display-api/"
    const [userData,setUserData] = useState({})

    const getData = async() => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setUserData(jsonData)

    }
    useEffect(() => {
        getData();
    },[])


  return (
    <>
    <div className='navigation-bar'>
    <div className="left-navigation">
        <p>FACEBOOK for Developers</p>
    </div>
    <div className="right-navigation">
        <p>Docs</p>
        <p>Tools</p>
        <p>Support</p>
        <p>My Apps</p>
        <input type="text" placeholder='Serach for developer documentation' />
    </div>
    </div>
    <div className='sidebar'>
        <p>Dashboard</p>
        <p>settings
            <p>Basic</p>
            <p>Advance</p>
        </p>
        <p>Roles</p>
        <p>Alerts</p>
        <p>App Reviews</p>

    </div>
    <div className='InputFields'>
        <label className='nameField'>Name(optional)</label><br/>
        <input type="text" className='namebox' /><br/>
        <label className='emailField'>Email</label><br/>
        <input type="email" className='emailbox' /><br/>
        <label className='addressField'>Address</label><br/>
        <label className='streetField'>Street Address</label><br/>
        <input type="text" className='streetlbox'/><br/>
        <label className='optField'>Apt/suite/others(optional)</label><br/>
        <input type="text" className='optlbox' /><br/>
        <label className='cityField'>city/district</label><br/>
        <input type="text" className='citybox' /><br/>
        <label className='stateField'>state/province/Region</label><br/>
        <input type="text" className='statebox' /><br/>
        <label className='countryField'>Country</label><br/>
       <select name="country" id="selectingCount" className='countrybox'>
       <option value="United state">United state</option>
       <option value="India">India</option>
       </select>
    </div>
    <div>
        <input type="text"  placeholder='Add Platform' className='platbox'>{userData.media_url}</input>
    </div>
    <div className='bottoms'>
        <button className='discButton'>Discard</button>
        <button className='saveButons'>Save Changes</button>
    </div>
    </>
  )
}

export default Developer;