import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Cases } from './../cases';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'age', 'status'];
  data: Cases[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCases()
      .subscribe((res: any) => {
        console.log(this.data)
        this.isLoadingResults = false
      }, (error) => {
        console.log(error)
        this.isLoadingResults = false
      })
  }

}
