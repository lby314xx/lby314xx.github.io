var chart = Highcharts.chart('pie', {
    chart: {
        spacing : [40, 0 , 40, 0]
    },
    title: {
        floating:true,
        text: 'Counts by languages'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }   
            },
            showInLegend: true,
            point: {
                events: {
                    mouseOver: function(e) {  // 鼠标滑过时动态更新标题
                        // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                        chart.setTitle({
                            text: e.target.name+ '\t'+ e.target.y + ' %'
                        });
                    }
                    //, 
                    // click: function(e) { // 同样的可以在点击事件里处理
                    //     chart.setTitle({
                    //         text: e.point.name+ '\t'+ e.point.y + ' %'
                    //     });
                    // }
                }
            },
        }
    },
    series: [{
        type: 'pie',
        innerSize: '80%',
        name: 'languages',
        data: [
            {name:'Eng',   y: 96.74,
            sliced: true,
            selected: true},
            ['Fre',       1.04],
            {
                name: 'Ger',
                y: 0.61,
            },
            ['Spa',    0.46],
            ['Chi',     0.32],
            ['Ita',   0.3],
            ['Lat',     0.23],
            ['Jpn',     0.13]
            ['Others',   0.17]
        ]
    }]
}, function(c) { // 图表初始化完毕后的会掉函数
    // 环形图圆心
    var centerY = c.series[0].center[1],
        titleHeight = parseInt(c.title.styles.fontSize);
    // 动态设置标题位置
    c.setTitle({
        y:centerY + titleHeight/2
    });
});