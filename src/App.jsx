import { UserDetails } from "./components/UserDetails";



export const App = () => {

    const mockUsers = [

        {
            id: 1,
            username: "yuran",
            email:"yuran@gmail.com",
        },
        {
            id: 2,
            username:"oscar",
            email:"oscar@gmail.com",
        },
    ];

    return (
        
        <div>
            {mockUsers.map(
                (user) => {
                    return (
                        <UserDetails key={user.id} user={user}/>
                    )
                }
            )}
        </div>
)
}