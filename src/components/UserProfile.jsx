import { UserFavoriteFoods } from "./UserFavoriteFoods"
import { UserUserName } from "./UserUserName"


export const UserProfile = () =>{
    return (
        
    <section>
            <UserUserName username ="Lamarck"/>
            <div>
                <span>Email:</span>
                <span>yuran@gmail.com</span>
            </div>
            <UserFavoriteFoods/>
    </section>

    )
}