import { Component, OnInit } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.heroService.getHero(+params.get('id')))
    );
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
