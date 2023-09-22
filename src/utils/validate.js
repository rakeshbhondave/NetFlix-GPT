export const validate = (email, password) => {


    
    const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
    // console.log("isEmailValid", isEmailValid);
    const isPasswordValid = /Rakesh@123/.test(password);


    if(!isEmailValid) return "Email Id is not Valid";
    if(!isPasswordValid) return "Password is not Valid"
    

    return null;

}