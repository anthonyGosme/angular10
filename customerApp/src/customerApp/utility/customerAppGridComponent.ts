import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: "grid-ui",
    templateUrl: './customerAppGrid.html' 
})

export class gridComponent{
    gridColumns : Array<Object> = new Array<Object>() ;
    gridData : Array<Object> = new Array<Object>() ;

    @Input("grid-columns")
    set setGridColumns(_gridColumns:Array<Object> ) {
        this.gridColumns = _gridColumns ;
    };
    @Input("grid-data")
    set setGridData(_gridData:Array<Object> ) {
        this.gridData = _gridData ;
    };
    
    @Output("grid-selected")
    eventEmitter : EventEmitter<Object>  = new  EventEmitter<Object> () ;
   
    selectGridData(_selected:Object){
        this.eventEmitter.emit(_selected) ;
    }
}


