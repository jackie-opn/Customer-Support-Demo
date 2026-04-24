import HelpScout from '@helpscout/javascript-sdk';
import { useEffect } from 'react';
import './Sidebar.css';

function Sidebar() {
    useEffect(() => {
        HelpScout.setAppHeight(document.body.scrollHeight); // flexible for now, consider stick to a fixed number
    }, []);

    const handleOpenSummaryPanel = () => {
        HelpScout.openSidePanel('https://jackie-opn.github.io/Customer-Support-Demo/#/panel');
    };

    return (
        <div className="side-bar">
            <div className="side-bar-header">
                <div className="header-title">
                    Omise AI Assistant
                    <span className="header-logo-wrap">
                        <img src="https://assets-cdn.omise.co/assets/company-logos/symbol-dark.png" alt="Omise" />
                    </span>
                </div>
            </div>

            <div className="side-bar-actions">
                <div className="action-title">AI Quick Actions</div>
                <div className="action-btns">
                    <button className="action-btn" onClick={handleOpenSummaryPanel}>AI Summary</button>
                    <button className="action-btn">AI Tagging</button>
                    <button className="action-btn">AI Draft Reply</button>
                    <button className="action-btn">Custom Fields Quick Fill</button>
                    <button className="action-btn">Merchant Overview</button>
                </div>
            </div>

            <div className="chat-section">
                <div className="chat-header">Chat with AI</div>
                <div className="chat-messages">
                    <div className="chat-placeholder">Ask me anything about this conversation!</div>
                </div>

                <div className="chat-input-section">
                    <div className="chat-input-wrapper">
                        <textarea className="chat-input" id="chat-input" placeholder="Type your message here..."></textarea>
                        <button className="chat-send-btn" id="chat-send-btn">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;