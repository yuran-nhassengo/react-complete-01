



export const App = () => {

    const isAuthenticated = false;
    
    return isAuthenticated ? <div>Welcome, User</div> : <div>You are not logged in</div>
  
}