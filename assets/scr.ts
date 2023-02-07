import { _decorator, Component, Node, Prefab, instantiate, ScrollView, Label } from 'cc';
import data from "./data"
const { ccclass, property } = _decorator;

@ccclass('Scr')
export class Scr extends Component {
    
    @property({type:Prefab})
    myImage:Prefab = null;


    json=data;
    // fetch("./data.json")
    // .then(response => {
    //     return response.json();
    // })
    // .then(data => console.log(data));

    start() {

        let a=this.node.getComponent(ScrollView).content;
        for(let index=0;index<25;index++)
        {
            let b = instantiate(this.myImage);
            b.getChildByName('Name').getComponent(Label).string=this.json[index].Name
            b.getChildByName('Score').getComponent(Label).string=this.json[index].Score
            b.getChildByName('Rank').getComponent(Label).string=this.json[index].Rank
            a.addChild(b);
        }
    }



    update(deltaTime: number) {
        
    }
}

