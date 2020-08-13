var chart = Highcharts.chart('bar', {
	title: {
		text: 'Count of total physical item loans by library, 2018.08-2019.08 '
	},
	accessibility: {
		announceNewData: {
		  enabled: true
		}
	},
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
		pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
	},
	series: [{
		type: 'pie',
		name: 'Total consumption',
		data: [{
			name: 'Main Library',
			y: 258860/390913*100
		}, {
			name: 'Law & Europa Library',
			y: 38129/390913*100
		}, {
			name: 'Moray House Library',
			y: 28549/390913*100
		}, {
			name: 'ECA Library',
			y: 22761/390913*100
		}, {
			name: 'New College Library',
			y: 18772/390913*100
		}, {
			name: 'Murray Library',
			y: 11163/390913*100
        }, {
			name: 'Art & Architecture Library',
			y: 5699/390913*100
        }, {
			name: 'University Collections Facility',
			y: 2582/390913*100
        }, {
			name: 'Others',
			y: 4398/390913*100
        }],
		center: ['90%', '30%'],
		size: 100,
		showInLegend: false,
		dataLabels: {
			enabled: false
		}
	},{
		name: 'Libraries',
		type: 'column' ,
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
			name: 'Others',
			y: 4398,
			drilldown: 'Others'
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
			name: 'Others',
			id: 'Others',
			data: [
				[
					'2016',
					8465
				],
				[
					'2017',
					6849
				],
				[
					'2018',
					5695
				],
				[
					'2019',
					4398
				],
				[
					'2020',
					3193
				]
            ]
        }]
	}
});