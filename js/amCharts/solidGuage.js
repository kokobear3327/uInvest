am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    
    
    // Create chart instance
    var chart = am4core.create("solidGuageChartdiv", am4charts.RadarChart);
    
    // Add data
    chart.data = [{
        "category": "S&P500",
      "value": 23.28,
      "full": 23.28
    }, {
      "category": "Communication Services",
      "value": 4.42,
      "full": 23.28
    }, {
      "category": "Consumer Discretionary",
      "value": 4.54,
      "full": 23.28
    }, {
      "category": "Consumer Staples",
      "value": 2.95,
      "full": 23.28
    }, {
      "category": "Energy Sector",
      "value": 3.36,
      "full": 23.28
    }, {
      "category": "Financials Sector",
      "value": 6.89,
      "full": 23.28
    }, {
      "category": "Health Care",
      "value": 5.25,
      "full": 23.28
    }, {
      "category": "Industrials",
      "value": 3.80,
      "full": 23.28
    }, {
      "category": "Information Technology",
      "value": 7.10,
      "full": 23.28
    }, {
      "category": "Materials Sector",
      "value": 1.17,
      "full": 23.28
    },{
      "category": "Real Estate",
      "value": 1.17,
      "full": 23.28
    }, {
      "category": "Utilities",
      "value": 1.27,
      "full": 23.28
    }];
    
    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(20);
    
    // Set number format
    chart.numberFormatter.numberFormat = "#.#' T'";
    
    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.fontWeight = 500;
    categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
      return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
    });
    categoryAxis.renderer.minGridDistance = 10;
    
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 23.28;
    valueAxis.strictMinMax = true;
    
    // Create series
    var series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;
    
    var series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 20;

    var series3 = chart.series.push(new am4charts.RadarColumnSeries());
    series3.dataFields.valueX = "value";
    series3.dataFields.categoryY = "category";
    series3.clustered = false;
    series3.columns.template.strokeWidth = 0;
    series3.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series3.columns.template.radarColumn.cornerRadius = 20;


    var series4 = chart.series.push(new am4charts.RadarColumnSeries());
    series4.dataFields.valueX = "value";
    series4.dataFields.categoryY = "category";
    series4.clustered = false;
    series4.columns.template.strokeWidth = 0;
    series4.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series4.columns.template.radarColumn.cornerRadius = 20;


    var series5 = chart.series.push(new am4charts.RadarColumnSeries());
    series5.dataFields.valueX = "value";
    series5.dataFields.categoryY = "category";
    series5.clustered = false;
    series5.columns.template.strokeWidth = 0;
    series5.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series5.columns.template.radarColumn.cornerRadius = 20;

    var series6 = chart.series.push(new am4charts.RadarColumnSeries());
    series6.dataFields.valueX = "value";
    series6.dataFields.categoryY = "category";
    series6.clustered = false;
    series6.columns.template.strokeWidth = 0;
    series6.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series6.columns.template.radarColumn.cornerRadius = 20;

    var series7 = chart.series.push(new am4charts.RadarColumnSeries());
    series7.dataFields.valueX = "value";
    series7.dataFields.categoryY = "category";
    series7.clustered = false;
    series7.columns.template.strokeWidth = 0;
    series7.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series7.columns.template.radarColumn.cornerRadius = 20;

    var series8 = chart.series.push(new am4charts.RadarColumnSeries());
    series8.dataFields.valueX = "value";
    series8.dataFields.categoryY = "category";
    series8.clustered = false;
    series8.columns.template.strokeWidth = 0;
    series8.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series8.columns.template.radarColumn.cornerRadius = 20;

    var series9 = chart.series.push(new am4charts.RadarColumnSeries());
    series9.dataFields.valueX = "value";
    series9.dataFields.categoryY = "category";
    series9.clustered = false;
    series9.columns.template.strokeWidth = 0;
    series9.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series9.columns.template.radarColumn.cornerRadius = 20;

    var series10 = chart.series.push(new am4charts.RadarColumnSeries());
    series10.dataFields.valueX = "value";
    series10.dataFields.categoryY = "category";
    series10.clustered = false;
    series10.columns.template.strokeWidth = 0;
    series10.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series10.columns.template.radarColumn.cornerRadius = 20;

    var series11 = chart.series.push(new am4charts.RadarColumnSeries());
    series11.dataFields.valueX = "value";
    series11.dataFields.categoryY = "category";
    series11.clustered = false;
    series11.columns.template.strokeWidth = 0;
    series11.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series11.columns.template.radarColumn.cornerRadius = 20;

    var series12 = chart.series.push(new am4charts.RadarColumnSeries());
    series12.dataFields.valueX = "value";
    series12.dataFields.categoryY = "category";
    series12.clustered = false;
    series12.columns.template.strokeWidth = 0;
    series12.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series12.columns.template.radarColumn.cornerRadius = 20;

    var series13 = chart.series.push(new am4charts.RadarColumnSeries());
    series13.dataFields.valueX = "value";
    series13.dataFields.categoryY = "category";
    series13.clustered = false;
    series13.columns.template.strokeWidth = 0;
    series13.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series13.columns.template.radarColumn.cornerRadius = 20;
    
    series2.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
    
    // Add cursor
    chart.cursor = new am4charts.RadarCursor();
    
    }); // end am4core.ready()