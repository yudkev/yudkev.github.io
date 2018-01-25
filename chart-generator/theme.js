Highcharts.theme = {
    colors: ['#333333','#822f37','#005b9d','#822F37','#7a9ff7','#37BBE4'],
    chart: {
        backgroundColor: '#fff'
    },
    title: {
        style: {
            color: '#000',
            font: '16px "Source Sans Pro", Arial, sans-serif'
        }
    },
    legend: {
        itemStyle: {
            font: 'bold 9pt "Source Sans Pro", Arial, sans-serif',
            color: 'black'
        },
        itemHoverStyle:{
            color: '#822F37'
        }
    }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
