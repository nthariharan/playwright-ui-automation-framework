export default function envValidator(){
   
    const envVars=[
        "USER_ID",
        "USER_PWD",
        "BASE_URL"
    ];
    
    for(const envVar of envVars){
        if(!process.env[envVar]){
            throw new Error(`Environment Variable ${envVar} Missing`);
        }
    }

}