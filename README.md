# Dashboard Wallet REST API

## Working demo at

### https://test-wallet-rest-api.herokuapp.com/

## Environment Variables
To make it run you should create a `.env` file at the root of the app with the following format:

```
DB_HOST=us-cdbr-east-05.cleardb.net
DB_USER=bf91d08bb74ecb
DB_PASSWORD=bff7cb64
DB_SCHEMA=heroku_f13f711ac2d9f63

PORT=8080

ETHERSCAN_API_URL=http://api.etherscan.io/api
ETHERSCAN_API_KEY=NSZCD6S4TKVWRS13PMQFMVTNP6H7NAGHUY
```

## Setup

### Requisites
- Nodejs (https://nodejs.org/en/download/)
- Yarn package manager (https://classic.yarnpkg.com/en/docs/install/)
- Nodemon (https://www.npmjs.com/package/nodemon)

### Run
Clone this repo and at the root folder run:
> yarn install

then if you want to run the API:
> yarn start 

or 

> yarn debug 

if you want to run it with hot reload

## Exposed endpoints

### Core

> (GET) /

```
{
    "status": "ok!"
}
```

> (GET) /health

```
{
    "status": "UP",
    "timestamp": 1592693753063,
    "uptime": 563.455195857
}
```

### API V1

#### Rates
> (GET) /api/v1/rates

_Query Parameters:_
```
[
    {
        "type": "USD",
        "value": 0.0044
    },
    {
        "type": "EUR",
        "value": 0.0049
    }
]
```

> (GET) /api/v1/rate/:currency

_Query Parameters:_
```
currency: 0 -- USD 1 -- EUR
```

_Example response:_
```
{
    "type": "USD",
    "value": 0.0044
}
```

> (PUT) /api/v1/rate/:currency

_Query Parameters:_
```
currency: 0 -- USD 1 -- EUR
```
_Body Parameters:_
```
{
	"value": "0.10"
}
```

_Example response:_
```
{
	"type": "USD"
	"value": "0.10"
}
```

### Wallet

> (GET) /api/v1/wallets

_Example response:_
```
{
    "wallets": [
        {
            "address": "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a"
        },
        {
            "address": "0x63a9975ba31b0b9626b34300f7f627147df1f526"
        },
        {
            "address": "0x198ef1ec325a96cc354c7266a038be8b5c558f67"
        }
    ]
}
```

> (GET) /api/v1/wallet/:address/age


_Query Parameters:_
```
address: 0xabc12345
```

_Example response:_
```
{
    "address": "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a",
    "oldestTransactionDate": "07/30/2015",
    "isOld": true
}
```

> (GET) /api/v1/wallet/:address/balance

_Query Parameters:_
```
address: 0xabc12345
```

_Example response:_
```
{    
    "balance": "90"
}
```

> (GET) /api/v1/wallet/:address/balance/:currency/

_Query Parameters:_
```
address: 0xabc12345
currency: 0 -- USD 1 -- EUR
```

_Example response:_
```
{
    "type": "USD",
    "balance": "90"
}
```
