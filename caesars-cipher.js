function rot13(str) {
  
    //  convert str to upper case and transform into array 
    const messageArr = str.toUpperCase().split('')
  
    console.log(messageArr)
    
    // array for alphabet characters ['A','B','C'...'Z']
    const alphabet_array = []
  
  // fills alphabet_array with all the capital letters A-Z
     for (let i = 65; i <= 90; i++) {
          alphabet_array.push(String.fromCharCode(i))
      }
  
      //console.log(alphabet_array)
  
  
    function rot_13_decoder(message_array){
      
      // makes a copy of message array
      const uncoded_msg_arr = message_array.slice(0,)
     
      // regular expresion to capture letters A-Z.
      let regex = /[A-Z]/ 
      
      // array to store decoded message
      const decoded_msg_arr = []
       
  
       // for loop to cycle through every element of "uncoded_msg_arr"
  
       for (let i=0; i<uncoded_msg_arr.length;i++){
         
         // condition that tests if each char is an element A-Z
         if(regex.test(uncoded_msg_arr[i])){
             
            
          // creates variable to obtain the indexof of letter in alphabet_array
          let letter_index = alphabet_array.indexOf(uncoded_msg_arr[i])
  
          // adds +13 to this index to decode the message 
          let decode_index = letter_index +13 
  
          // creates circular index to allow the array to be accessed in a circular manner and avoid out of bounds
  
          // circular index = index%length
          let circular_index = decode_index%alphabet_array.length
  
  
          // fills container arr with new chars from alphabet array-->push (alphabet[circular_index])
  
          decoded_msg_arr.push(alphabet_array[circular_index])
            
  
         }
  
        // condition to handle all characters that are not [A-Z]
         else{
           decoded_msg_arr.push(uncoded_msg_arr[i])
         }
  
         
       }
        
        //returns the decoded char array 
       return decoded_msg_arr
  
    }
  
     
    console.log(rot_13_decoder(messageArr))
    
    // converts the decoded array into a string using join method 
    const decodedStrMsg = rot_13_decoder(messageArr).join('')
  
    console.log(decodedStrMsg)
  
    // returns decoded string message
    return decodedStrMsg
     
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");