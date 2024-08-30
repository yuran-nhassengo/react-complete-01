import { UserDetails } from "./components/UserDetails";



export const App = () => {

    const isAuthenticated = true;
    
    if (isAuthenticated){
        return (
            <div>Welcome, User</div>
        );
    }

    return (
        <div>You are not logged in</div>
    )
  
}