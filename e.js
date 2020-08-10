var myChart = echarts.init(document.getElementById('main'));


var option = {
        title: {
            text: 'Top ten most viewed Resource lists'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['Sociology 1A The Sociological Imagination: Individuals & Society', 
            'Political Thinkers', 
            'Social Anthropology 1B: Anthropology Matters', 
            'Understanding Gender in the Contemporary World', 
            'Comparative Politics in a Globalised World',
            'Social Anthropology 2: Key Concepts',
            'History of Art 1a',
            'Social Anthropology 1A: The Life Course',
            'Introduction to Politics and International Relations',
            'International Cooperation in Europe and Beyond']
        },
        series: [
            {
                name: 'amount',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230, 630230, 630230, 630230, 630230]
            }
        ]
    };
myChart.setOption(option);