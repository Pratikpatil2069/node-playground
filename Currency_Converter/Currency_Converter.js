import https from "https";
import  readline  from "readline";
import chalk from "chalk";

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const apiKey="bf2bd2bd87cc3cdaa649df73";
const url="https://v6.exchangerate-api.com/v6/bf2bd2bd87cc3cdaa649df73/latest/USD";

https.get(url,(response)=>{
    let data="";
    response.on('data',(chunk)=>{
        data+=chunk;
    })

    response.on('end',()=>{
        const rates= JSON.parse(data).conversion_rates;
        rl.question("enter the amount in USD:",(amount)=>{
            rl.question("enter the target currency :",(currency)=>{
                const rate=rates[currency.toUpperCase()];
                if(rate){
                    console.log(`${amount} USD is approximately ${rate*amount} ${currency}`);
                }else{
                    console.log("invalid currency code");
                }
                rl.close();
            })
        })
    })
})