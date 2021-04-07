import { ReactNode } from "react";
import styles from "./Card.module.scss";
interface Props {
    readonly icon: ReactNode;
    readonly header: string;
    readonly paragraph: string;
    readonly color: string;
    readonly button: ReactNode;
}

const Card: React.FunctionComponent<Props> = props => {
    const { icon, header, paragraph, color, button } = props;
    return (
        <div className={`${styles.card} ${styles[color]}`}>
            {icon}
            <h2> {header}</h2>
            <p>{paragraph}</p>
            {button}
        </div>
    );
};
export default Card;
