var chart = Highcharts.chart('line', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Loans by month, by Academic year'
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
        data: [11214,31844
            ,50945
            ,46844
            ,23534
            ,28839
            ,34559
            ,28725
            ,3
            ,9
            ,16
            ,1027]
    }, {
        name: '2018-2019',
        data: [11924
            ,32774
            ,54490
            ,53251
            ,25906
            ,34788
            ,40325
            ,52813
            ,37171
            ,22316
            ,12751
            ,12404]
    }, {
        name: '2017-2018',
        data: [13121
            ,37123
            ,64814
            ,64921
            ,32096
            ,37564
            ,43882
            ,57024
            ,43802
            ,26054
            ,14119
            ,13443]
    }, {
        name: '2016-2017',
        data: [13004
            ,37718
            ,67260
            ,67348
            ,35276
            ,37989
            ,49343
            ,66927
            ,42118
            ,31100
            ,14823
            ,14111]
    }, {
        name: '2015-2016',
        data: [13462
            ,37922
            ,74546
            ,73019
            ,40958
            ,48773
            ,59376
            ,74291
            ,46837
            ,27948
            ,14621
            ,13076]
    }]
});