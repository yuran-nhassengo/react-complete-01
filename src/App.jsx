


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
                        <div>
                            <b>Username:</b><span>{user.username}</span><br/>
                            <b>Email:</b><span>{user.email}</span>
                        </div>
                    )
                }
            )}
        </div>
)
}