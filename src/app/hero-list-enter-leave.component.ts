import { Component, Input } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

import { Hero } from './hero.service';

@Component({
    selector: 'app-hero-list-enter-leave',
    template: `
        <ul>
            <li *ngFor="let hero of heroes"
                [@flyInOut]="'in'">
                {{ hero.name }}
            </li>
        </ul>
    `,
    styleUrls: ['./hero-list.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [ // :enter from left
                style({transform: 'translateX(-100%)'}),
                animate(100)
            ]),
            transition('* => void', [ // :leave to right
                animate(100, style({transform: 'translateX(100%)'}))
            ])
        ])
    ]
})
export class HeroEnterLeaveComponent {
    @Input() heroes: Hero[];
}
