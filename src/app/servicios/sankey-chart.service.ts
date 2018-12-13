import { Injectable } from '@angular/core';

declare var google: any;
@Injectable({
  providedIn: 'root'
})
export class SankeyChartService{

  public localGoogle=google;

  constructor() { 
    this.localGoogle.charts.load('current', {'packages':['sankey']});
  }

  drawChart(contenedor,tipo) {

    const options=this.inicializarOpciones(tipo);
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows([
      [ "A1", 'Cuartos1', 0.5 ],
      [ "B2", 'Cuartos1', 0.5 ],
    ]);

    // Instantiates and draws our chart, passing in some options.
    const chart = new google.visualization.Sankey(document.getElementById(contenedor));
    chart.draw(data, options);
  }

  inicializarOpciones(tipo){
    let options;
    switch(tipo){
      case 'cuartos':
        // Sets chart options. para cuartos
        options = {
          width: 70,
          height:60,
          sankey: { 
            link: { color: { fill: '#194679', fillOpacity: 2 } },
            node: {width: 2,nodePadding: 28}
          },
          tooltip: {isHtml: true},
          
        };
        break;
    }
          
    return options;
  }

}
