import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedId: number;
  data = {
    name: 'Hero List',
    description: 'This is the hero list description',
    image: 'https://i.imgur.com/eTvlyy3.jpeg'
  };

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getMetaTags();
  }

  getHeroes(): void {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.heroService.getHeroes();
      })
    );
  }

  getMetaTags() {
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'description', content: this.data.description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/superheroes' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.description },
      { name: 'og:image', content: this.data.image },
    ]);
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }

}
