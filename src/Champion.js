class Champion {

    constructor(imageSrc, quoteList) {
        this.image = imageSrc;
        this.quoteList = quoteList;
    }

    pickQuote() {
        let randomNumber = Math.floor(Math.random() * this.quoteList.length);
        return this.quoteList[randomNumber];
    }

    getImage() {
        return this.image;
    }


}

export default Champion;