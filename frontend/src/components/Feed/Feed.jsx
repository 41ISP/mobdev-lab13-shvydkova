import { useEffect, useState } from "react"
import MessageCard from "../MessageCard/MessageCard"
import { fetchPosts } from "../../api/api"
import MessageField from "../MessageField/MessageField"
import { useUserStore } from "../../store/store"

const Feed = () => {
    const [messages, setMessages] = useState(undefined)
    const { jwt } = useUserStore()
    useEffect(() => {
        const handleFetch = async () => {
            try {
                setMessages(await fetchPosts())
            } catch (err) {
                console.error(err)
            }
        }
        handleFetch()
    }, [])
    return (
        <>
            {jwt && <MessageField />}
            <div className="messages-section">
                <div className="container">
                    <h2 className="section-title">Last messages</h2>
                    <div className="messages-grid">{messages && messages.map((message) => (<MessageCard key={message.id} {...message} />))}</div>
                </div>
            </div>
        </>
    )
}
export default Feed