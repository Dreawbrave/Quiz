import {RoundButton} from "../../shared/ui/Button/Button.jsx";
import styles from './styles.module.css'
import {MyHeader} from "../../shared/ui/Header/Header.jsx";
export default function QuizPage() {
    return (
        <div className={styles['container']}>
            <div className={styles['head']}>
            <MyHeader/>
            </div>
            <div className={styles['content']}>
            <RoundButton text={'Создать квиз'}/>
            </div>
        </div>
    );
}