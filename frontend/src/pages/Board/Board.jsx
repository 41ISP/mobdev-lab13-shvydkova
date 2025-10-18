import Feed from "../../components/Feed/Feed"
import MessageField from "../../components/MessageField/MessageField"
import { useUserStore } from "../../store/store"

const Board = () => {
    const { jwt } = useUserStore()
    return (
        <>
            <h1>Board</h1>
             {jwt && <MessageField  />}
            <Feed />
        </>
    )
}
export default Board