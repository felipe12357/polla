import { Component, OnInit } from '@angular/core';
import { SankeyChartService } from '../../servicios/sankey-chart.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Grupos } from '../../clases/grupos.class';

//https://www.npmjs.com/package/ng2-google-charts/v/3.5.0

declare var google: any;
@Component({
  selector: 'app-finales',
  templateUrl: './finales.component.html',
  styleUrls: ['./finales.component.css']
})
export class FinalesComponent implements OnInit {

  _grupos:Grupos;
  finalesForm=new FormGroup({
    octavosLlave1P1:new FormControl(null),
  });

  constructor(private _sankeyChart:SankeyChartService) { 

    this._grupos=new Grupos();

    const that=this;
    this._sankeyChart.localGoogle.charts.setOnLoadCallback(function(){
      that._sankeyChart.drawChart("cuartos1","cuartos");
     // that._sankeyChart.drawChart("sankey_basic2");
    });

  }

  ngOnInit() {
   // console.log(this._grupos.grupoA);
   // console.log(this.finalesForm.value.octavosLlave1P1);
  }

}
