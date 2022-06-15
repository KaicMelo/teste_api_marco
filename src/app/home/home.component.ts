import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  constructor(private http: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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

  salvar() {
    const itensSalvo = this.checkoutForm.getRawValue();

    this.listaDeItens.push({ ...itensSalvo });

    this.checkoutForm.reset();
  }

}
