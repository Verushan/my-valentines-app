import { useState } from "react";
import styles from "./question.module.css";

interface QuestionProps {
    onYesClicked: () => void;
    noAttempted: () => void;
}

const Question: React.FC<QuestionProps> = ({ onYesClicked, noAttempted }) => {
    const widthPadding = 150;
    const heightPadding = 150;
    const defaultPromptMessage = "Will you be my valentine? 🥹👉👈";

    const [promptMessage, setPromptMessage] = useState(defaultPromptMessage);
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
    const [isMoved, setIsMoved] = useState(false);

    const updateMessage = () => {
        const randomX = Math.random() * (window.innerWidth - widthPadding);
        const randomY = Math.random() * (window.innerHeight - heightPadding);

        setNoButtonPos({ x: randomX, y: randomY });

        if (!isMoved) {
            noAttempted();
        }

        setIsMoved(true);

        setPromptMessage("Pleaseeeeeee be my valentine? 😭👉👈");
    };

    return (
        <div className={`${styles.question} ${isMoved ? styles.sadBackground : ''}`}>
            <div className={styles.prompt}>
                {promptMessage}
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
                    onMouseEnter={() => updateMessage()}
                    onTouchStart={() => updateMessage()}
                    onClick={() => updateMessage()}
                    className={styles.option}
                >
                    No
                </button>
            </div>
        </div >
    )
}

export default Question;
