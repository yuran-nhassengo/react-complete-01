import { UserProfile } from "./components/UserProfile"


export const App = () => {

    return <div>
        <h1>Root Component</h1>
        <UserProfile age={21} username ="Yuran"/>
    </div>

}