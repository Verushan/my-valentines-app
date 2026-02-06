import styles from "./heart-rain.module.css"
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

function HeartRain() {
    const { width, height } = useWindowSize();
    const colors = ['#ff69b4', '#ff1493', '#ffc0cb'];
    const pieceCount = 1000;
    const message = "I KNEW MY SUNDARI WOULD SAY YES EVENTUALLY 🥰"
    return (
        <div className={styles.content}>
            <Confetti
                width={width}
                height={height}
                numberOfPieces={pieceCount}
                recycle={true}
                colors={colors}
                gravity={0.15}
                friction={1}
            />
            <h1 className={styles.message}>{message}</h1>
        </div>
    )
}

export default HeartRain;
