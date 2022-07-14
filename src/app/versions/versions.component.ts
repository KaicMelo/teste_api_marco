import { PoTableColumn } from '@po-ui/ng-components';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css'],
})
export class VersionsComponent implements OnInit {
  selectedTab: any;
  allClients: any;

  colunas: Array<PoTableColumn> = [
    {
      property: 'dataInicial',
      label: 'Data Inicial',
      type: 'date',
      format: 'dd/MM/YYYY HH:mm',
    },
    {
      property: 'dataFinal',
      label: 'Data Final',
      type: 'date',
      format: 'dd/MM/YYYY HH:mm',
    },
    {
      property: 'estado',
      label: 'Estado',
    },
  ];

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const selectedTab: any =
      this.activatedRoute.snapshot.queryParamMap.get('selectedTab');
    const validTab = ['allClients', 'updateAvailable', 'noUpdate'].includes(selectedTab);
    this.changeTab(validTab ? selectedTab : 'allClients');
  }

  ngOnInit(): void {
    this.http
    .get(`http://localhost:3000/versions`)
    .subscribe(r => this.allClients = r
    );
  }

  public changeTab(selectedTab: string) {
    this.selectedTab = selectedTab;

    this.setQueryParam({ selectedTab: this.selectedTab });
  }

  setQueryParam(queryParams: Params): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
