var faker = require('faker');
var _ = require('lodash');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = function() {
  return {
    projects: _.times(10, n => {
      return {
        id: ++n,
        title: faker.random.word(),
        date: faker.date.past(),
        components: {
          "input": {},
          "button": {
            "default": {
              "background": "#2199E8",
              "border-radius": "4px",
              "font-family": "HelveticaNeue",
              "font-size": "15px",
              "color": "#FFFFFF",
              "padding": "10px 15px",
              "&:hover": {
                "background": "#1A84E3",
                "border-radius": "4px",
                "font-family": "HelveticaNeue",
                "font-size": "15px",
                "color": "#FFFFFF",
                "padding": "10px 15px"
              },
              "&:active": {
                "background": "#1469B5",
                "box-shadow": "inset 1px 1px 0 0 rgba(0,0,0,0.10)",
                "border-radius": "4px",
                "font-family": "HelveticaNeue",
                "font-size": "15px",
                "color": "#8CC1F1",
                "padding": "10px 15px"
              },
              "&:disabled": {
                "background": "#B3B0B3",
                "border-radius": "4px",
                "font-family": "HelveticaNeue",
                "font-size": "15px",
                "color": "#FFFFFF",
                "padding": "10px 15px"
              }
            },
            "danger": {
              "background": "#EC5840",
              "border-radius": "4px",
              "font-family": "HelveticaNeue",
              "font-size": "15px",
              "color": "#FFFFFF",
              "padding": "10px 15px",
              "&:hover": {
                "background": "#E43426",
                "border-radius": "4px",
                "font-family": "HelveticaNeue",
                "font-size": "15px",
                "color": "#FFFFFF",
                "padding": "10px 15px"
              },
              "&:active": {
                "background": "#B6291E",
                "box-shadow": "inset 1px 1px 0 0 rgba(0,0,0,0.10)",
                "border-radius": "4px",
                "font-family": "HelveticaNeue",
                "font-size": "15px",
                "color": "#E9BFBB",
                "padding": "10px 15px"
              },
              "&:disabled": {
                "background": "#B3B0B3",
                "border-radius": "4px",
                "font-family": "HelveticaNeue",
                "font-size": "15px",
                "color": "#FFFFFF",
                "padding": "10px 15px"
              }
            },
            "hollow": {
              "background": "#FFFFFF",
              "border": "1px solid #2199E8",
              "border-radius": "4px",
              "font-family": "HelveticaNeue",
              "font-size": "15px",
              "color": "#2199E8",
              "padding": "10px 15px",
              "&:hover": {
                "border": "1px solid #177AE1",
                "border-radius": "4px",
                "font-family": "HelveticaNeue",
                "font-size": "15px",
                "color": "#177AE1",
                "padding": "10px 15px"
              },
              "&:active": {
                "opacity": "0.6",
                "border": "1px solid #177AE1",
                "border-radius": "4px",
                "font-family": "HelveticaNeue",
                "font-size": "15px",
                "color": "#177AE1",
                "padding": "10px 15px"
              },
              "&:disabled": {
                "border": "1px solid #9B9B9B",
                "border-radius": "4px",
                "font-family": "HelveticaNeue",
                "font-size": "15px",
                "color": "#9B9B9B",
                "padding": "10px 15px"
              }
            }
          }
        }
      }
    })
  }
}
