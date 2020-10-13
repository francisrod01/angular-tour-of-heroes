import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;
  data = {
    name: 'Hero detail xxx',
    description: 'This is a hero-detail description',
    image: 'https://i.imgur.com/AM9Frsy.jpeg'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.getHero();
    this.getMetaTags();
  }

  getHero(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.heroService.getHero(+params.get('id')))
    );

    // this.getMetaTags(this.hero$);
  }

  getMetaTags() {
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'description', content: this.data.description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/hero-detail' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.description },
      { name: 'og:image', content: this.data.image },
    ]);
  }

  goToHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available, so that the HeroList
    // component can select that hero.
    this.router.navigate(['/superheroes', { id: heroId }]);
  }

  save(hero: Hero): void {
    this.heroService.updateHero(hero)
      .subscribe(() => this.goToHeroes(hero));
  }

}
