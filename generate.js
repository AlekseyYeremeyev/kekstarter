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
          "button": {
            "primary": {
              "padding": "8px 25px",
              "border-radius": "3px",
              "background": faker.internet.color(),
              "border": "1px solid "+faker.internet.color(),
              "color": "#fff",
              "&:hover": {
                "padding": "8px 25px",
                "border-radius": "3px",
                "border": "1px solid "+faker.internet.color(),
                "color": "#fff",
                "background": faker.internet.color(),
              },
              "&:active": {
                "padding": "8px 25px",
                "border-radius": "3px",
                "border": "1px solid "+faker.internet.color(),
                "color": "#fff",
                "background": faker.internet.color(),
              }
            },
            "hollow": {
              "padding": "8px 25px",
              "border-radius": "3px",
              "border": "1px solid "+faker.internet.color(),
              "background": faker.internet.color(),
              "color": "#fff",
              "&:hover": {
                "padding": "8px 25px",
                "border-radius": "3px",
                "border": "1px solid "+faker.internet.color(),
                "color": "#fff",
                "background": faker.internet.color(),
              },
              "&:active": {
                "padding": "8px 25px",
                "border-radius": "3px",
                "border": "1px solid "+faker.internet.color(),
                "color": "#fff",
                "background": faker.internet.color(),
              }
            },
            "success": {
              "padding": "8px 25px",
              "border-radius": "3px",
              "border": "1px solid "+faker.internet.color(),
              "background": faker.internet.color(),
              "color": "#fff",
              "&:hover": {
                "padding": "8px 25px",
                "border-radius": "3px",
                "border": "1px solid "+faker.internet.color(),
                "color": "#fff",
                "background": faker.internet.color(),
              },
              "&:active": {
                "padding": "8px 25px",
                "border-radius": "3px",
                "border": "1px solid "+faker.internet.color(),
                "color": "#fff",
                "background": faker.internet.color(),
              }
            },
            "warning": {
              "padding": "8px 25px",
              "border-radius": "3px",
              "border": "1px solid "+faker.internet.color(),
              "background": faker.internet.color(),
              "color": "#fff",
              "&:hover": {
                "padding": "8px 25px",
                "border-radius": "3px",
                "border": "1px solid "+faker.internet.color(),
                "color": "#fff",
                "background": faker.internet.color(),
              },
              "&:active": {
                "padding": "8px 25px",
                "border-radius": "3px",
                "border": "1px solid "+faker.internet.color(),
                "color": "#fff",
                "background": faker.internet.color(),
              }
            },
            "alert": {
              "padding": "8px 25px",
              "border-radius": "3px",
              "border": "1px solid "+faker.internet.color(),
              "background": faker.internet.color(),
              "color": "#fff",
              "&:hover": {
                "padding": "8px 25px",
                "border-radius": "3px",
                "border": "1px solid "+faker.internet.color(),
                "color": "#fff",
                "background": faker.internet.color(),
              },
              "&:active": {
                "padding": "8px 25px",
                "border-radius": "3px",
                "border": "1px solid "+faker.internet.color(),
                "color": "#fff",
                "background": faker.internet.color(),
              }
            }
          },
          "input": {
            "meta": {
              "type": "text"
            },
            "secondary": {
              "padding": "8px 10px",
              "background": "transparent",
              "border": "0",
              "border": "1px solid "+faker.internet.color(),
              "border-radius": "3px",
              "color": faker.internet.color(),
              "outline": "none",
              "&:hover": {
                "padding": "8px 10px",
                "border-color": faker.internet.color(),
                "color": faker.internet.color(),
                "background": "transparent",
              },
              "&:active": {
                "padding": "8px 10px",
                "border-color": faker.internet.color(),
                "color": faker.internet.color(),
                "background": faker.internet.color()
              }
            },
            "error": {
              "padding": "8px 10px",
              "border": "0",
              "border": "1px solid "+faker.internet.color(),
              "border-radius": "3px",
              "background": "transparent",
              "color": faker.internet.color(),
              "outline": "none",
              "&:hover": {
                "padding": "8px 10px",
                "border-color": faker.internet.color(),
                "color": faker.internet.color()
              },
              "&:active": {
                "padding": "8px 10px",
                "border-color": faker.internet.color(),
                "color": faker.internet.color(),
                "background": faker.internet.color()
              }
            },
            "disabled": {
              "padding": "8px 10px",
              "border": "0",
              "border": "1px solid "+faker.internet.color(),
              "border-radius": "3px",
              "background": "transparent",
              "color": faker.internet.color(),
              "outline": "none",
              "&:hover": {
                "padding": "8px 10px",
                "border-color": faker.internet.color(),
                "color": faker.internet.color()
              },
              "&:active": {
                "padding": "8px 10px",
                "border-color": faker.internet.color(),
                "color": faker.internet.color(),
                "background": faker.internet.color()
              }
            }
          }
        }
      }
    })
  }
}
