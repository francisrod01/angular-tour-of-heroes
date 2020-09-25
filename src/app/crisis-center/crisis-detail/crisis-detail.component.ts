import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService,
  ) { }

  ngOnInit(): void {
    this.getCrisis();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  getCrisis(): void {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.crisisService.getCrisis(+params.get('id')))
    );
  }

  goToCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    // Pass along the crisis id if available, so that the CrisisList
    // component can select that crisis.
    // Relative navigation back to crises.
    this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
  }

  save(crisis: Crisis): void {
    this.crisisService.updateCrisis(crisis)
      .subscribe(() => this.goToCrises(crisis));
  }

}
