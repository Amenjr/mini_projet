
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCurrent } from '../Redux/actions/Authaction'

import image from './Profile.png'





function Profile() {
    const dispatch = useDispatch()
  useEffect(() => {
     dispatch(getCurrent())
  }, [])
    return (
        <div>
            
        <img src={image} alt="logo" style={{width:"1517px",height:"640px"}}/> 
        </div>
    )
}

export default Profile
