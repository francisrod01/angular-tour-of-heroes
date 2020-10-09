import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCrises();
  }

  getCrises(): void {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.crisisService.getCrises();
      })
    )
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.crisisService.addCrisis({ name } as Crisis)
  //     .subscribe(crisis => {
  //       this.crises.push(crisis);
  //     });
  // }

  // delete(crisis: Crisis): void {
  //   this.crises = this.crises.filter(h => h !== crisis);
  //   this.crisisService.deleteCrisis(crisis).subscribe();
  // }

}
