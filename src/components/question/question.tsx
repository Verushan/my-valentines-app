import { useState } from "react";
import styles from "./question.module.css";

interface QuestionProps {
    onYesClicked: () => void;
    noAttempted: () => void;
}

const Question: React.FC<QuestionProps> = ({ onYesClicked, noAttempted }) => {
    const widthPadding = 150;
    const heightPadding = 150;

    const defaultPromptMessage = "Will you be my valentine?";
    const defaultEmojis = "🥹👉👈";

    const [promptMessage, setPromptMessage] = useState({ mainText: defaultPromptMessage, subText: defaultEmojis });
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
    const [isMoved, setIsMoved] = useState(false);

    const updateMessage = () => {
        const randomX = Math.random() * (window.innerWidth - widthPadding);
        const randomY = Math.random() * (window.innerHeight - heightPadding);

        if (!isMoved) {
            noAttempted();
        }

        setNoButtonPos({ x: randomX, y: randomY });

        setIsMoved(true);

        setPromptMessage({ mainText: "Pleaseeeeeee be my valentine", subText: "😭👉👈" });
    };

    return (
        <div className={`${styles.question} ${isMoved ? styles.sadBackground : ''}`}>
            <div className={styles.prompt}>
                <div className="main-text">{promptMessage.mainText}</div>
                <div className="main-text">{promptMessage.subText}</div>
            </div>
            <div className={styles.options}>
                <button onClick={() => onYesClicked()} className={styles.option}>Yes</button>
                <button
                    style={isMoved ? {
                        position: 'fixed',
                        left: `${noButtonPos.x}px`,
                        top: `${noButtonPos.y}px`,
                        transition: 'all 0.2 ease'
                    } : {}}
                    onMouseEnter={updateMessage}
                    onClick={updateMessage}
                    className={styles.option}
                >
                    No
                </button>
            </div>
        </div >
    )
}

export default Question;
