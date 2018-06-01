## coinwarz-ts 


A wrapper in typescript for the CoinWarz API  
https://www.coinwarz.com/v1/api/documentation

### How to use:
```typescript
let client = new Coinwarz("API_KEY");

c.infoKey()
/**
* Returns the information pertaining to the used API KEY
* AccessLevel
* ApiUsageLimit
* APIUsageAvailable
* DailyUsageLimit
* DailyUsageAvailable
* Approved
*/

c.miningProfitability()
/**
* Returns the profitability data listed on CoinWarz
* /!\ Only supports the paramater algo=all right now
*/

c.coinInformation("COINTAG")
/**
* Returns the information on a given coin
* Defaults to BTC
*/
```
