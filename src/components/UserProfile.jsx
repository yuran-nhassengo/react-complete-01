import { UserFavoriteFoods } from "./UserFavoriteFoods"
import { UserUserName } from "./UserUserName"
import PropTypes from "prop-types"


export const UserProfile = (props) =>{
    return (
        
    <section>
            <UserUserName username ={props.username}/>
            <div>
                <span>Email:</span>
                <span>yuran@gmail.com</span>
                <b>Age: </b>
                <span>{props.age}</span>
            </div>
            <UserFavoriteFoods/>
    </section>

    )
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired
}