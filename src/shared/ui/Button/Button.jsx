export const RoundButton = ({
                                 text = 'Кнопка',
                                 onClick
                             }) => {
    return (
        <button
            className="round-button"
            onClick={onClick}
        >
            {text}
        </button>
    );
};