import { RoundButton } from "../../shared/ui/Button/Button";
import styles from './styles.module.css';
import {MyHeader} from "../../shared/ui/Header/Header.jsx";

export default function HomePage() {
    return (
        <div className={styles.pageContainer}>
            <MyHeader />
            <RoundButton
                text={'Создать квиз'}
                onClick={() => console.log('Кнопка нажата')}
                className={styles.button}
            />
        </div>
    );
}