import {Component, OnInit} from '@angular/core';

import {AppService} from '../../Services/app-service.service';
import {IGame} from '../../models/game';
import {ObservablePracticeService} from '../../Services/observable-practice/observable-practice.service';

@Component({
    selector: 'observable-practice',
    templateUrl: './observable-practice.component.html',
    styleUrls: ['./observable-practice.component.scss']
})
export class ObservablePracticeComponent implements OnInit {
    pageTitle = 'React Practice';
    imageWidth = 45;
    imageMargin = 1;
    showImage = true;
    listItem = 'Mario';
    _listFilter = '';
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredGames = this.listFilter ? this.doFilter(this.listFilter) : this._games;
    }

    filteredGames: IGame[] = [];
    games: IGame[] = [];
    _games:any;

    constructor(private observablePracticeService: AppService) {
        this.listFilter = '';
        this.filteredGames = this._games;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Game List: ' + message;
    }

    doFilter(filterBy: string): IGame[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this._games.filter((game: any) =>
            game.gameName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        //this.observablePracticeService.getGames().subscribe();
        this.observablePracticeService.getGames()
        .subscribe(response => {
          this._games = response;
          this.filteredGames = this._games;
        });
    }
}