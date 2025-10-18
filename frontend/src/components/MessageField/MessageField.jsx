import { useState } from "react"
import { sendMesssage } from "../../api/api"
import Button from "../Button/Button"
import TextArea from "../TextArea/TextArea"
import { useMessageStore } from "../../store/useMessageStore"

const MessageField = () => {
    const {getMessages} = useMessageStore()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const message = { content: e.target.content.value }
            await sendMesssage(message)
            getMessages()
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
                    <form onSubmit={handleSubmit} action="" className="create-message-form">
                        <TextArea placeholder="Share your opinion" name="content"/>
                        <Button>Send</Button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default MessageField