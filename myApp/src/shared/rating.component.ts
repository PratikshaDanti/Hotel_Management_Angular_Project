import { Component,Input, Output,EventEmitter } from "@angular/core";

@Component({
    selector:'show-rating',
    templateUrl:'./rating.component.html',
    styleUrls:['./rating.component.css'],
})

export class RatingComponent{
    @Input() rating: number = 0;
    @Output() clicked:EventEmitter<string>=new EventEmitter<string>();
    starWidth:number=0;

    ngOnChanges():void{
       this.starWidth= +(this.rating * 75)/5;
       
    }

    onClick():void{
        this.clicked.emit(`course rating ${this.rating} is clicked`);
    }
    
}