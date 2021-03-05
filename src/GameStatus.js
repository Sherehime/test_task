function GameStatus(props) {
    if (props.gameComplete) {
        return <>
            <div>Игра завершена !</div>
            {props.turnCard - 1 >=5?
                <div>За  {props.turnCard - 1}  ходов</div>:
                <div>За  {props.turnCard - 1}  хода</div>
            }

            <div><button className='gameButton' onClick={props.ShowCardsQuantity}>Сиграть снова?</button></div>
        </>;
    } else {
        return <>
            Перевернуто карт: {props.turnCard}   Найдено пар: {props.pairsFound}
            <button className='gameButton' onClick={props.ShowCardsQuantity}>Новая игра</button>
        </>;
    }
}

export default GameStatus;
