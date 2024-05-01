import React from 'react'
import chatgptlogo from '../../assets/chatgptlogo.png'
import nouserlogo from '../../assets/nouserlogo.png'
import './LeftSection.scss'

const LeftSection = () => {

    const allchats = [{
        id: 1,
        chatname: "This is sample chat 1 for chatgpt.... "
    },
    {
        id: 2,
        chatname: "This is sample chat 2 for chatgpt.... "
    }, {
        id: 3,
        chatname: "This is sample chat 3 for chatgpt.... "
    }, {
        id: 4,
        chatname: "This is sample chat 4 for chatgpt.... "
    }, {
        id: 5,
        chatname: "This is sample chat 5 for chatgpt.... "
    },
    ]

    return (
        <div className="leftmain">
            <div className="newchat">
                <img src={chatgptlogo} alt="" />
                New Chat
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </div>
            <div className="allchats">
                allchats.map(chat=>{

                })
            </div>
            <div className="newchat">
                new chats
            </div>
        </div>
    )
}

export default LeftSection
