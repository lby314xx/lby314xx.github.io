var chart = Highcharts.chart('bar', {
	chart: {
		type: 'column'
	},
	title: {
		text: 'Count of total physical item loans by library, 2018.08-2019.08 '
	},
    //subtitle: {
    //text: '点击可查看具体的版本数据，数据来源: <a href="https://netmarketshare.com">netmarketshare.com</a>.'
    //},
	xAxis: {
		type: 'category'
	},
	yAxis: {
		title: {
			text: 'Amounts'
		}
	},
	legend: {
		enabled: false
	},
	plotOptions: {
		series: {
			borderWidth: 0,
			dataLabels: {
				enabled: true
			}
		}
	},
	tooltip: {
		headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
	},
	series: [{
		name: 'Libraries',
		colorByPoint: true,
		data: [{
			name: 'Main Library',
			y: 258860,
			drilldown: 'Main Library'
		}, {
			name: 'Law & Europa Library',
			y: 38129,
			drilldown: 'Law & Europa Library'
		}, {
			name: 'Moray House Library',
			y: 28549,
			drilldown: 'Moray House Library'
		}, {
			name: 'ECA Library',
			y: 22761,
			drilldown: 'ECA Library'
		}, {
			name: 'New College Library',
			y: 18772,
			drilldown: 'New College Library'
		}, {
			name: 'Murray Library',
			y: 11163,
            drilldown: 'Murray Library'
        }, {
			name: 'Art & Architecture Library',
			y: 5699,
            drilldown: 'Art & Architecture Library'
        }, {
			name: 'University Collections Facility',
			y: 2582,
            drilldown: 'University Collections Facility'
        }, {
			name: 'Veterinary Library',
			y: 2174,
			drilldown: 'Veterinary Library'
        }]
        }, {
            name: 'Royal Infirmary Library',
            y: 1776,
            drilldown: 'Royal Infirmary Library'
        }, {
            name: 'Western General Hospital Library',
            y: 448,
            drilldown: 'Western General Hospital Library'
        
	}],
	drilldown: {
		series: [{
			name: 'Main Library',
			id: 'Main Library',
			data: [
				[
					'2016',
					345479
				],
				[
					'2017',
					322222
				],
				[
					'2018',
					294667
				],
				[
					'2019',
					258860
				],
				[
					'2020',
					169415
				]
			]
		}, {
			name: 'Law & Europa Library',
			id: 'Law & Europa Library',
			data: [
				[
					'2016',
					41528
				],
				[
					'2017',
					38620
				],
				[
					'2018',
					43665
				],
				[
					'2019',
					38129
				],
				[
					'2020',
					28412
				]
			]
		}, {
			name: 'Moray House Library',
			id: 'Moray House Library',
			data: [
				[
					'2016',
					46801
				],
				[
					'2017',
					34726
				],
				[
					'2018',
					31723
				],
				[
					'2019',
					28549
				],
				[
					'2020',
					15022
				]
			]
		}, {
			name: 'ECA Library',
			id: 'ECA Library',
			data: [
				[
					'2016',
					31941
				],
				[
					'2017',
					29076
				],
				[
					'2018',
					26096
				],
				[
					'2019',
					22761
				],
				[
					'2020',
					16828
				]
			]
		}, {
			name: 'New College Library',
			id: 'New College Library',
			data: [
				[
					'2016',
					23917
				],
				[
					'2017',
					21234
				],
				[
					'2018',
					24361
				],
				[
					'2019',
					18772
				],
				[
					'2020',
					11024
				]
            ]
        }, {
			name: 'Murray Library',
			id: 'Murray Library',
			data: [
				[
					'2016',
					16534
				],
				[
					'2017',
					14718
				],
				[
					'2018',
					12830
				],
				[
					'2019',
					11163
				],
				[
					'2020',
					7841
				]
            ]
        }, {
			name: 'Art & Architecture Library',
			id: 'Art & Architecture Library',
			data: [
				[
					'2016',
					6805
				],
				[
					'2017',
					6536
				],
				[
					'2018',
					5989
				],
				[
					'2019',
					5699
				],
				[
					'2020',
					4432
				]
            ]
        }, {
			name: 'University Collections Facility',
			id: 'University Collections Facility',
			data: [
				[
					'2016',
					3359
				],
				[
					'2017',
					3036
				],
				[
					'2018',
					2937
				],
				[
					'2019',
					2582
				],
				[
					'2020',
					1582
				]
            ]
        }, {
			name: 'Veterinary Library',
			id: 'Veterinary Library',
			data: [
				[
					'2016',
					3998
				],
				[
					'2017',
					3323
				],
				[
					'2018',
					2793
				],
				[
					'2019',
					2174
				],
				[
					'2020',
					1550
				]
            ]
        }, {
			name: 'Royal Infirmary Library',
			id: 'Royal Infirmary Library',
			data: [
				[
					'2016',
					3750
				],
				[
					'2017',
					2993
				],
				[
					'2018',
					2410
				],
				[
					'2019',
					1776
				],
				[
					'2020',
					1280
				]
            ]
        }, {
			name: 'Western General Hospital Library',
			id: 'Western General Hospital Library',
			data: [
				[
					'2016',
					717
				],
				[
					'2017',
					533
				],
				[
					'2018',
					492
				],
				[
					'2019',
					448
				],
				[
					'2020',
					363
				]
            ]
		}]
	}
});