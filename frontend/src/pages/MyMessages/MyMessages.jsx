import Feed from "../../components/Feed/Feed"
import MessageField from "../../components/MessageField/MessageField"
import { useUserStore } from "../../store/store"

const MyMessages = () => {
   const { jwt } = useUserStore()

    return (
        <>
            <h1>My Messages</h1>
            {jwt &&
            <Feed myOwn={true}/>}
        </>
    )
}
export default MyMessages