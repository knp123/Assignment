//function to output uncommon letters of two strings

function printUnCommonLetters() {
  const str1 = document.getElementById("str1").value;
  const str2 = document.getElementById("str2").value;

  let MAX_CHAR = 26;

  const minLength = Math.min(str1.length, str2.length);

  let op1 = "";
  let op2 = "";

  let finalOp1 = '';
  let finalOp2 = '';

  let presentCharactersStr1 = Array(MAX_CHAR);
  let presentCharactersStr2 = Array(MAX_CHAR);

  for (let i = 0; i < MAX_CHAR; i++) {
    presentCharactersStr1[i] = 0;
    presentCharactersStr2[i] = 0;
  }

  //assigning the present characters in str1 as 1, else 0
  for (let i = 0; i < str1.length; i++)
    presentCharactersStr1[
      str1[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
    ] = 1;

  //assigning the present characters in str2 as 1, else 0
  for (let i = 0; i < str2.length; i++)
    presentCharactersStr2[
      str2[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
    ] = 1;

  if (str1.length > str2.length) {
    for (let i = 0; i < minLength; i++) {
      // if a character of str2 is also present
      // in str1, then mark its presence as -1
      if (
        presentCharactersStr1[
          str2[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
        ] == 1 ||
        presentCharactersStr1[
          str2[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
        ] == -1
      ) {
        presentCharactersStr1[
          str2[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
        ] = -1;
        presentCharactersStr2[
          str2[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
        ] = -1;
      }

      // else mark its presence as 2
      else {
        presentCharactersStr1[
          str2[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
        ] = 2;
        presentCharactersStr2[
          str2[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
        ] = 2;
      }
    }
  } else {
    for (let i = 0; i < minLength; i++) {
      if (
        presentCharactersStr2[
          str1[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
        ] == 1 ||
        presentCharactersStr2[
          str1[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
        ] == -1
      ) {
        presentCharactersStr1[
          str1[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
        ] = -1;
        presentCharactersStr2[
          str1[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
        ] = -1;
      }

      // else mark its presence as 2
      else {
        if (
          presentCharactersStr1[
            str1[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
          ] !== 0
        )
          presentCharactersStr1[
            str1[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
          ] = 2;
        if (
          presentCharactersStr2[
            str1[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
          ] !== 0
        )
          presentCharactersStr2[
            str1[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
          ] = 2;
      }
    }
  }

  //Required output
  for (let i = 0; i < MAX_CHAR; i++) {
    if (presentCharactersStr1[i] == 1 || presentCharactersStr1[i] == 2)
      op1 = op1 + String.fromCharCode(i + "A".charCodeAt(0));
    if (presentCharactersStr2[i] == 1 || presentCharactersStr2[i] == 2)
      op2 = op2 + String.fromCharCode(i + "A".charCodeAt(0));
  }
  if (op1 !== ""){
      for(let i=0; i<str1.length; i++) {
          if(op1.includes(str1[i].toUpperCase()) && !finalOp1.includes(str1[i].toUpperCase()))
          finalOp1 = finalOp1 + str1[i].toUpperCase();
      }
      document.getElementById("op1").innerHTML = finalOp1;
  } 
  else document.getElementById("op1").innerHTML = "null";
  if (op2 !== "") {
    for(let i=0; i<str2.length; i++) {
        if(op2.includes(str2[i].toUpperCase()) && !finalOp2.includes(str2[i].toUpperCase()))
        finalOp2 = finalOp2 + str2[i].toUpperCase();
    }
    document.getElementById("op2").innerHTML = finalOp2;
  }
  else document.getElementById("op2").innerHTML = "null";
}
