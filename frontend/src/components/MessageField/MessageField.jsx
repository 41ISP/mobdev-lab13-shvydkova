import { sendMesssage } from "../../api/api"

const MessageField = () => {
    const handleSubmit = async (e) => {
        try {
            const message = { content: e.target.content.value }
            sendMesssage(message)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <>
        <div className="create-message-section">
            <div className="container">
                <div className="create-message-card">
                    <h2 className="create-message-title">Create message</h2>
                    <form onSubmit={handleSubmit} action="" className="create-message-form"></form>
                </div>
            </div>
        </div>
        </>
    )
}
export default MessageField