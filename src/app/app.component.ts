import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {
  PoDynamicFormField,
  PoMenuItem,
  PoSelectOption,
  PoTableColumn,
} from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  fields: any = [];
  listaDeItens: any = [];
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
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    this.http
      .get(`http://localhost:3000/items`)
      .subscribe((respostaApi: any) => {
        respostaApi.map((ListaEstados: any) => {
          this.fields.push({
            label: ListaEstados,
            value: ListaEstados,
          });
        });
      });
  }

  checkoutForm = this.formBuilder.group({
    dataInicial: ['', Validators.required],
    dataFinal: ['', Validators.required],
    estado: ['', Validators.required],
  });

  readonly menus: Array<PoMenuItem> = [{ label: 'Home', action: () => {} }];

  salvar() {
    const itensSalvo = this.checkoutForm.getRawValue();

    this.listaDeItens.push({...itensSalvo});

    this.checkoutForm.reset();
  }
}
