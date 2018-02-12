Highcharts.theme = {
    //colors: ['#333333','#822f37','#005b9d','#822F37','#7a9ff7','#37BBE4'],
    chart: {
        marginTop: 0,
        spacingTop: 0,
        marginBottom: 20,
        plotBackgroundColor: 'transparent',
        backgroundColor: 'transparent',
        type: 'column'
    },
    title: {
        text: '',
    },
    credits: {
        enabled: false
    },
    xAxis: [{
        tickLength: 0,
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        minorTickLength: 0,
        gridLineColor: 'transparent',
        labels: {
            style: {
            fontSize: '10px'
            }
        }
    }],
    yAxis: [{
        gridLineColor: 'transparent',
        labels: {
            enabled: false,
        },
        title: {
            text: ''
        }
    }, {
        title: {
            text: ''
        },
        labels: {
            enabled: false
        }
    }],
    tooltip: {
        formatter: function() {
            return '<b>' + this.y + 'M</b>';
        },
        shadow: false,
        borderRadius: 0,
        backgroundColor: '#FFF',
        padding: 1,
        style: {},
        useHTML: true,
    },
    legend: {
        enabled: false
    },
    series: {
        type: 'column',
        pointWidth: 35,
        dataLabels: {
            enabled: false
        },
        tooltip: {
            valueSuffix: 'm'
        }

    }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

