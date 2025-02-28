console.log("*************************");
console.log("**********Part 2*********");



let n=23;

// creat infinity loop and manage the exit using  break 
while (true) {
    n++ // next number
	let tf=true; // bolean to chek the number if its prime or not 	
	 
   for (let i = 2; i < n; i++) {
   // try all numbers if n++ dive it to check if its prime or no 
       if (n % i == 0) { 
       tf=false;  // not prime and exit the for loop to go again in n++ 
       break;
   }

    }

	  
	if (tf == true) {
		console.log(n); // prime number log it and exit 
        break;
	}
			
	
}
