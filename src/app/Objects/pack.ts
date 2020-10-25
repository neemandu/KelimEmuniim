import { Card } from './card';

export class Pack {
    cards: Card[];
    categories: string[];
    description: string;
    id: number;
    imgUrl: string;
    tags: string[];

	// constructor($cards: Card[], $categories: string[], $description: string, $id: number, $imgUrl: string, $tags: string[]) {
	// 	this.cards = $cards;
	// 	this.categories = $categories;
	// 	this.description = $description;
	// 	this.id = $id;
	// 	this.imgUrl = $imgUrl;
	// 	this.tags = $tags;
    // }

    constructor() {}
    
    deseralize(input: any){
        Object.assign(this, input);
        this.cards = input.cards.map(card => new Card().deseralize(card))
        return this;
    }
}
