import { UserFavoriteFoods } from "./UserFavoriteFoods"


export const UserProfile = () =>{
    return (
        
    <section>
            <p>Username: Yuran</p>
            <div>
                <span>Email:</span>
                <span>yuran@gmail.com</span>
            </div>
            <UserFavoriteFoods/>
    </section>

    )
}