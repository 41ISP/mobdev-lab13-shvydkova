import { deleteMessage, likeMessage, reportMessage } from "../../api/api";
import { useUserStore } from "../../store/store";
import { useMessageStore } from "../../store/useMessageStore";

const MessageCard = ({ content, createdAt, username, userId, id, likedBy, likes }) => {

    const jwt = useUserStore((state) => state.jwt)
    const { getMessages } = useMessageStore()

    const LoggedUserId = () => {
        if (!jwt) return null;
        if (jwt.userId) return jwt.userId;
    };

    const loggedUserId = LoggedUserId();

    const handleDelete = async () => {
        await deleteMessage(id)
        await getMessages()
        console.log(loggedUserId)
    }
    const handleReport = async () => {
        try {
            await reportMessage(id)
            await getMessages()
        } catch (err) {
            console.error(err)
        }
    }
    const handleLike = async () => {
        try {
            await likeMessage(id)
            await getMessages()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="message-card">
            <div className="message-content">{content}</div>
            <div className="message-meta">
                <span className="message-author">{username}</span>
                <span className="message-time">{createdAt}</span>
            </div>
            {loggedUserId && (
                <div className="message-actions">
                    <button onClick={handleLike}
                        className="action-button">
                        <span>{likedBy.includes(loggedUserId) ? "❤️" : "🤍"}</span>
                        <span>{likes}</span>
                    </button>
                </div>)}
            <div className="message-actions">
                <button onClick={handleReport}
                    className="action-button">
                    <span>🚩</span>
                    <span>Пожаловаться</span>
                </button>
            </div>
            {loggedUserId && userId && loggedUserId === userId && (
                <div className="message-actions">
                    <button onClick={handleDelete}
                        className="action-button delete">
                        <span>🗑️</span>
                        <span>Удалить</span>
                    </button>
                </div>)}
        </div>
    )
}
export default MessageCard