import Title from "../atoms/Title";
import Text from "../atoms/Text";
import './Cards.css'

function Card(props) {
    return (
        <div id="cards_form">            
            <Title title={props.title} />
            <Text text={props.text} />

        </div>

    );
}

export default Card;
