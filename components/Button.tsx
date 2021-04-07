import { ReactNode } from "react";
import styles from "./Button.module.scss";
interface Props {
    readonly color: string;
}

const Button: React.FunctionComponent<Props> = props => {
    const { color } = props;
    return (
        <button
            type="button"
            title="button"
            name="button"
            className={`${styles.button} ${styles[color]}`}
        >
            Learn More
        </button>
    );
};
export default Button;
