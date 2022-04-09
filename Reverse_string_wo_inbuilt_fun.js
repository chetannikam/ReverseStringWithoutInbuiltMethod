function cal_len(s)
{
  let cnt=0
  let i=0
  while(s[i]!=undefined)
  {
    i+=1
    cnt+=1

  }
  
  return cnt
}
let s = "chetan nikam likes cricket";
let temp=''
let rev_str=''
let length_of_string=cal_len(s)
console.log(length_of_string)
for(let i=0;i<length_of_string;i++)
{
  let temp=''
  let j=i
  while(s[j]!==' ')
  {
      console.log(j,i)
    if(j===length_of_string)
        break
    temp=temp+s[j]
    j+=1
    i+=1
  }
    
    console.log(temp,i)
  rev_str=temp+' '+rev_str
}
console.log(rev_str);