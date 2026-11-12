import cryptoJs from "crypto-js"

export default class CommonUtils {
    
    private secretKey: string
   
    /**
     * Initializing the secret key
     */
    constructor() {
       //this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";
       if(process.env.SECRET_KEY) {
          this.secretKey = process.env.SECRET_KEY;
       } else {
        throw new Error('Please provide the secret key while starting execution')
       }
    }
    
    /**
     * Provides a Encrpted data from string
     * @param data 
     * @returns 
     */
    public encryptData(data:string) {
     const encryptedData =  cryptoJs.AES.encrypt(data, this.secretKey).toString()
     console.log(encryptedData)
     return encryptedData
    }

    /**
     * Provides a Decrypted data from string format
     * @param data 
     * @returns 
     */
    public decryptData(data:string) {
       const decryptedData = cryptoJs.AES.decrypt(data, this.secretKey).toString(cryptoJs.enc.Utf8)
       console.log(decryptedData)
       return decryptedData
    }
}