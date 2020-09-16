import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Crisis } from './crisis-center/crisis';
import { Hero } from './heroes/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const crises = [
      { id: 1, name: 'Dragon Burning Cities' },
      { id: 2, name: 'Sky Rains Great White Sharks' },
      { id: 3, name: 'Giant Asteroid Heading For Earth' },
      { id: 4, name: 'Procrastinators Meeting Delayed Again' },
    ];

    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];

    return { crises, heroes };
  }

  // Overrides the genId method to ensure that a crisis always has an id.
  // It returns an initial number, if the crises array is empty
  /*genId(crises: Crisis[]): number {
    return crises.length > 0 ? Math.max(...crises.map(crisis => crisis.id)) + 1 : 11;
  }*/

  // Overrides the genId method to ensure that a hero always has an id.
  // It returns an initial number, if the crises array is empty
  /*genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }*/
}
