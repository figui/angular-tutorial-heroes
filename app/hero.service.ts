import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Hero} from './hero';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve => {
            console.log("Simulate network delay");
            setTimeout(() => {
                console.log("Return heroes after 2 secs of delay");
                resolve(HEROES), 2000
            }); // 2 seconds
        });
    }
}