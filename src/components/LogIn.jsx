import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
const LogIn = () => {


  const [userDet, setUserDet] = useState({})

  const handleCBResponse = (res) => {
    const tokenDetails = jwt_decode(res.credential)
    setUserDet(tokenDetails)
  }


  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "262976069051-4ge66qpfkhsrk5fg9rrpviljn03pg5qh.apps.googleusercontent.com",
      callback: handleCBResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("sign-in"),
      { theme: "outline", size: "large" }
    )
  }, [])

console.log(userDet)


  return (
    <div>
      <div id='sign-in'></div>
      {userDet &&
      <>
      <h2>Hello {userDet.name}</h2>
      <img src={userDet.picture} alt={userDet.name}/>
      </>
      }
    </div>
  )
}

export default LogIn