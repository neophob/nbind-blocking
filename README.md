# nbind-blocking

demo project for https://github.com/charto/nbind/issues/100

## setup

run `npm install`

## run

run `npm start`

## issue

* `curl http://localhost:7777/dummy` returns current timestamp
* `curl http://localhost:7777/block` calls the nbind function, that blocks for 30s - during that time express does not answers any requests
