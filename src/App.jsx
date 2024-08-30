



export const App = () => {

  //NOT_VERIFIED / VERIFIED /ACCOUNT_DISABLED

  const USER_STATUS = "VERIFIED";

  if(USER_STATUS === "NOT_VERIFIED"){
    return(
        <div>
            <span>You are not verified. Please verify your email or mobile number</span>
        </div>
    );
  } else if (USER_STATUS === "VERIFIED"){

       return( <div>
            <span>You are verified. Congrats! click here to acces Your Dashboard.</span>
        </div>)

  } else if (USER_STATUS === "ACCOUNT_DISABLED"){

        return (<div>
            <span>You account is disabled.</span>
        </div>)

  }
  
}