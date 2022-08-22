import {Component, EventEmitter, Input, Output} from '@angular/core';

import {IGame} from '../../../models/game';

@Component({
    selector: 'game-grid',
    templateUrl: './game-grid.component.html',
    styleUrls: ['./game-grid.component.scss']
})
export class GameGridComponent {
  
    @Input() filteredGames:any;
    @Input() showImage:any;
    @Output() toggleImage = new EventEmitter();

    sendDataToParent(): void {
        this.toggleImage.emit();
    }
}