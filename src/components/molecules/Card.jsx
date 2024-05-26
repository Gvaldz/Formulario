import Title from "../atoms/Title";
import Text from "../atoms/Text";


function Card({ title, text }) {
    return (
        <div>            
            <Title title={title} />
            <Text text={text} />

        </div>

    );
}

export default Card;
