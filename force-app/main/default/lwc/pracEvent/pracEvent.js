import { LightningElement } from 'lwc';

export default class PracEvent extends LightningElement {
    console.log("player");
    const game = {
        team1 : "India",
        team2 : "Aus",
        player : [
            [
                "Dhoni","Virat"
            ],
            [
                "Wade", "Chain"
            ]
        ]
        century: ["kohhli", "chain"],
        odds: {
            team1: 1.33,
            x: 3.33,
            team2: 6.5
        },
    };

    let player  = game.player;
    console.log("player" , player);

}