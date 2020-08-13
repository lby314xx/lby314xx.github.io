var chart = Highcharts.chart('rank', {
    chart: {
        type: 'bar',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
        text: 'Top ten most viewed Resource lists'
    },
    xAxis: {
        categories: ['Sociology 1A The Sociological Imagination: Individuals & Society', 
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
    yAxis: {
        min: 0,
        title: {
            text: 'amounts'
        },
        labels: {
            overflow: 'justify'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Amounts: <b>{point.y} </b>'
    },
    series: [{
        name: 'counts',
        data: [
            ['Sociology 1A The Sociological Imagination: Individuals & Society', 36582],
            ['Political Thinkers', 34928],
            ['Social Anthropology 1B: Anthropology Matters', 31239],
            ['Understanding Gender in the Contemporary World', 28235],
            ['Comparative Politics in a Globalised World',23828],
            ['Social Anthropology 2: Key Concepts',22470],
            ['History of Art 1a',21257],
            ['Social Anthropology 1A: The Life Course',20920],
            ['Introduction to Politics and International Relations',19982],
            ['International Cooperation in Europe and Beyond', 17205]
        ],
        dataLabels: {
            enabled: true
        }
    }]
});