import React from 'react'
import BorderSplash from './BorderSplash'
import ChampionBundle from './ChampionBundle';
class ChampionCarousel extends React.Component {

    constructor(props) {
        super(props);

        this.championList = new ChampionBundle().getList();

        this.selectChampion = this.selectChampion.bind(this);
        this.selectNewMainChampion = this.selectNewMainChampion.bind(this);
        this.addChampionsToList = this.addChampionsToList.bind(this);
        this.state = {
            firstRandomChampion: this.championList[Math.floor(Math.random() * this.championList.length)]
        }

    }

    selectNewMainChampion() {
        let randomChampion = this.championList[Math.floor(Math.random() * this.championList.length)];

        while (randomChampion.getImage() === this.state.firstRandomChampion.getImage()) {
            randomChampion = this.championList[Math.floor(Math.random() * this.championList.length)];
        }

        return randomChampion;
    }


    addChampionsToList(champion1, champion2, champion3, arrayPlacement) {
        let randomIndex1 = Math.floor(Math.random () * this.championList.length);
       arrayPlacement[randomIndex1] = champion1;

       let randomIndex2 = Math.floor(Math.random() * this.championList.length);

       while (randomIndex2 === randomIndex1) {
           randomIndex2 = Math.floor(Math.random() * this.championList.length);
       }

       arrayPlacement[randomIndex2] = champion2;

       let randomIndex3 = Math.floor(Math.random() * this.championList.length);

       while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2) {
           randomIndex3 = Math.floor(Math.random() * this.championList.length);
       }

       arrayPlacement[randomIndex3] = champion3;

    }


    selectChampion(image) {
        if (image === this.state.firstRandomChampion.getImage()) {
            this.setState({
               firstRandomChampion: this.selectNewMainChampion()
            })
            this.props.incrementScore();
        }
        else {
            this.props.triggerGameOver();
        }
    }


    render() {
        this.props.quoteFunction(this.state.firstRandomChampion.pickQuote());

        let randomChampion = this.championList[Math.floor(Math.random() * this.championList.length)];

        while (randomChampion.getImage() === this.state.firstRandomChampion.getImage()) {
            randomChampion = this.championList[Math.floor(Math.random() * this.championList.length)];
        }

        let secondChampion = randomChampion;

        randomChampion = this.championList[Math.floor(Math.random() * this.championList.length)];

        while ((randomChampion.getImage() === this.state.firstRandomChampion.getImage()) || (randomChampion.getImage() === secondChampion.getImage())) {
            randomChampion = this.championList[Math.floor(Math.random() * this.championList.length)];
        }

       let thirdChampion = randomChampion;

       let arrayPlacement = [];

       this.addChampionsToList(this.state.firstRandomChampion, secondChampion, thirdChampion, arrayPlacement);



       return(
        !this.state.gameOver ?
       (<div className = "guessBlock">
            <div className = "carousel">
                {arrayPlacement.map( (id) =>
                    <BorderSplash championImage = {id.getImage()} selectChampion = {this.selectChampion}></BorderSplash>
                )}
            </div>
        </div>) :
        <div className = "gameOver"> GAME OVER</div>
       );
    }

}

export default ChampionCarousel;