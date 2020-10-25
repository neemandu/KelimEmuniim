export class Card {
    imgUrl: string;

	// constructor($imgUrl: string) {
	// 	this.imgUrl = $imgUrl;
    // }
    
    constructor(){}

    deseralize(input: any){
        Object.assign(this, input);
        return this;
    }
}
