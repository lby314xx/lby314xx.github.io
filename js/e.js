var chart = Highcharts.chart('eline', {
    chart: {
        type: 'line',
        zoomType: 'x'
    },
    title: {
        text: 'E-usage by month, by Academic year'
    },
    xAxis: {
        categories: [ 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July']
    },
    yAxis: {
        title: {
            text: 'Amounts'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

    plotOptions: {
        line: {
            dataLabels: {
                // 开启数据标签
                enabled: false          
            },
            // 关闭鼠标跟踪，对应的提示框、点击事件会失效
            enableMouseTracking: true    
        },
        series: {
            lineWidth: 4
        }
    },
    series: [{
        name: '2019-2020',
        data: [240524,
            336043,
            672276,
            673681,
            367142,
            385284,
            474985,
            481172,
            465407,
            348804,
            236554,
            238522
            ]
    }, {
        name: '2018-2019',
        data: [287780,
            442667,
            920144,
            894185,
            486403,
            528789,
            653643,
            828172,
            653974,
            345279,
            257610,
            307623
            ]
    }, {
        name: '2017-2018',
        data: [784322,
            413339,
            766624,
            715195,
            382870,
            381018,
            476514,
            628924,
            485340,
            268071,
            201210,
            236682
            ]
    }, {
        name: '2016-2017',
        data: [155290,
            191485,
            434882,
            441315,
            245764,
            249353,
            344167,
            452837,
            323006,
            221246,
            506199,
            867656
            ]
    }, {
        name: '2015-2016',
        data: [103869,
            145757,
            369329,
            395882,
            238080,
            257250,
            334877,
            412782,
            291954,
            167895,
            130536,
            153486
            ]
    }]
});