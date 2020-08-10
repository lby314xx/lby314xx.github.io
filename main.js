var yourVlSpec = {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "A top-10 bar chart ranking borrowed book titile in LAW library.",
    "width": 500,
    "height": 410,
    "padding": 5,
    "autosize": "fit",
  
    "signals": [
      {
        "name": "k", "value": 5,
        "bind": {"input": "range", "min": 3, "max": 10, "step": 1}
      },
      {
        "name": "Libraries", "value": "Law library",
        "bind": {"input": "select", "options": ["Law library", "Main library", "Moray House library"]}
      },
      {
        "name": "label",
        "value": {"Law library": "Law Library", "Main library": "Main library", "Moray House library": "Moray House library"}
      },
      {
        "name": "tooltip",
        "value": {},
        "on": [
          {"events": "rect:mouseover", "update": "datum"},
          {"events": "rect:mouseout",  "update": "{}"}
        ]
      }
  
    ],
  
    "title": {
      "text": {"signal": "'Top k borrowed titles in ' + label[Libraries] "},
      "anchor": "start",
      "frame": "group"
    },
  
    "data": [
      {
        "name": "titles",
        "values": [
          {"category": "Property, trusts and succession ", "amount": 2875, "lib": "Law Library"},
          {"category": "Scotland's constitution : law and practice", "amount": 2577, "lib": "Law Library"},
          {"category": "Contract law in Scotland", "amount": 2326, "lib": "Law Library"},
          {"category": "Family law.", "amount": 2002, "lib": "Law Library"},
          {"category": "Scots commercial law", "amount": 1889, "lib": "Law Library"},
          {"category": "Borkowski's textbook on Roman law", "amount": 1869, "lib": "Law Library"},
          {"category": "Public law", "amount": 1860, "lib": "Law Library"},
          {"category": "Gower's principles of modern company law", "amount": 1784, "lib": "Law Library"},
          {"category": "Delictual liability", "amount": 1590, "lib": "Law Library"},
          {"category": "Property, trusts and succession.", "amount": 1454, "lib": "Law Library"}
        ],
        "transform": [{
            "type": "window",
            "sort": {"field": "amount", "order": "descending"},
            "ops": ["row_number"], "as": ["rank"]
          },
          {
            "type": "filter",
            "expr": "datum.rank <= k"
          }]
      }
    ],
  
    "marks": [
      {
        "type": "rect",
        "from": {"data": "titles"},
        "encode": {
          "update": {
            "x": {"scale": "x", "value": 0},
            "x2": {"scale": "x", "field": "amount"},
            "y": {"scale": "y", "field": "category"},
            "height": {"scale": "y", "band": 1},
            "fill": {"value": "steelblue"}
          },
          "hover": {
            "fill": {"value": "red"}
          }
        }
      },
      {
        "type": "text",
        "encode": {
          "enter": {
            "align": {"value": "center"},
            "baseline": {"value": "middle"},
            "fill": {"value": "#000"}
          },
          "update": {
            "x": {"scale": "x", "signal": "tooltip.category", "band": 0.5},
            "y": {"scale": "y", "signal": "tooltip.amount", "offset": -2},
            "text": {"signal": "tooltip.amount"},
            "fillOpacity": [
              {"test": "isNaN(tooltip.amount)", "value": 0},
              {"value": 1}
            ]
          }
        }
      }
    ],
  
    "scales": [
      {
        "name": "x",
        "type": "linear",
        "domain": {"data": "titles", "field": "amount"},
        "range": "width",
        "nice": true
      },
      {
        "name": "y",
        "type": "band",
        "domain": {
          "data": "titles", "field": "category",
          "sort": {"op": "max", "field": "amount", "order": "descending"}
        },
        "range": "height",
        "padding": 0.1
      }
    ],
  
    "axes": [
      {
        "scale": "x",
        "orient": "bottom",
        "format": "d",
        "tickCount": 5
      },
      {
        "scale": "y",
        "orient": "left"
      }
    ]
  };
  vegaEmbed('#vis', yourVlSpec);