for(var i=0; i<3; i++){
setTimeout(()=> {
  console.log(i);
})

}

for(let i=0; i<3; i++){
  setTimeout(()=> {
    console.log(i);
  })
  
//   }
// const data =100
// console.log(data.toString())
// console.log((100).toString())


// all possible subsets

const nums = [1,2,3,4,5]

const subsets=(nums)=>{ 
    let res = []
    let n = nums.length
    for(let i=0; i<Math.pow(2,n); i++){
        let temp = []
        for(let j=0; j<n; j++){
            if(i & (1<<j)){
                temp.push(nums[j])
            }
        }
        res.push(temp)
    }
    return res
}
// console.log(subsets(nums))


list = [1,0,4,0,0,5]
// remove 0s and add them at the end
const moveZeroes = (list)=>{
    let n = list.length
    let count = 0
    let newList = []
    for(rec in list) {
      if(list[rec] === 0) {
        count = count + 1
      } else {
        newList.push(list[rec])
      }
    }
    for(let i=0; i< count; i++){
      newList.push(0) 
    }
    return newList
}
//console.log(moveZeroes(list))




function getElementbyStyle(property, value){
    let all = document.getElementsByTagName("*")
    const matchedElements = []
    for(let i=0; i<all.length; i++){
        if(all[i].style[property] === value){
            console.log(all[i])
            matchedElements.push(all[i])
        }
    }
}

//getElementbyStyle("color","red")


//console.log("3" + true)


// Race condition
// let x = 0  


const input  = "abbaca"; // remove consecutive duplicates

const removeDuplicates = ()=>{
    let stack = []
   
    for(let i=0; i<input.length; i++){
        if(stack.length === 0){
            stack.push(input[i])
        } else {
          console.log(stack)
          console.log(input[i])
            if(stack[stack.length-1] === input[i]){
                stack.pop()
            } else {
                stack.push(input[i])
            }
        }
    }
    return stack.join("")
}

//console.log(removeDuplicates())



// remove duplicate elements from an array
const removeDuplicatesFromArray = (arr)=>{
    let map = {}
    let res = []
    arr.reduce((acc,curr,index) => {
      console.log(acc)
      console.log(index)
     arr.lastIndexOf(acc) === index ? res.push(curr) : null
    },[])
    return res
}
//console.log(removeDuplicatesFromArray([1,2,3,4,3,2,6,1,5,5]))


const qq = [1,2,3,4,3,2,99,6,1,5,5,9]
function recordData() {
return qq.reduce((acc,curr,index) => {
  

 
  qq.lastIndexOf(curr) === index && qq.indexOf(curr) === index ? acc.push(curr) : []
  
   
  return acc

},[])
}
console.log(recordData()) 




// top 10 javascript coding interview question in javascript

// 1. reverse a string
const str = "hello world"

const reverseString = (str)=>{  
  return str.split("").reverse().join("")
}

console.log(reverseString(str))

// 2. longest word in a string
const str2 = "hello world this is a test"

const longestWord = (str)=>{
  let words = str.split(" ")
  let longest = ""
  for(let word of words){
    if(word.length > longest.length){
      longest = word
    }
  }
  return longest
}

// 3. a palindrome is a word that is spelled the same way forwards and backwards

const isPalindrome = (str)=>{
  return str === str.split("").reverse().join("")
}

// 4.remove duplicate elements from an array

const removeDuplicatesFromArray2 = (arr)=>{
  return arr.filter((item,index) => arr.indexOf(item) === index)
}

console.log(removeDuplicatesFromArray2([1,2,3,4,3,2,6,1,5,5]))

// 5. anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once

const isAnagram = (str1, str2)=>{
  return str1.split("").sort().join("") === str2.split("").sort().join("")
}

console.log(isAnagram("listen","silent"))

// 6. number of vowels in a string  

const numberOfVowels = (str)=>{
  return str.match(/[aeiou]/gi).length
}

// 7. largest number in an array

const largestNumber = (arr)=>{
  return Math.max(...arr)
}

// 8. prime number is a number that is only divisible by 1 and itself


const isPrime = (num)=>{
  for(let i=2; i<num; i++){
    if(num % i === 0){
      return false
    }
  }
  return num > 1
}

//9. fibonacci series

const fibonacci = (num)=>{

  let a = 1
  let b = 0
  let temp = 0
  let res = []
  while(num >= 0){
    temp = a
    a = a + b
    b = temp
    res.push(b)
    num--
  }
  return res
}

// 10. factorial of a number

const factorial = (num)=>{
  if(num === 0){
    return 1
  }
  return num * factorial(num - 1)
}

// 11. find the missing number in a given integer array of 1 to 100

const missingNumber = (arr)=>{
  let n = arr.length + 1
  let sum = n * (n + 1) / 2
  let actualSum = arr.reduce((acc,curr) => acc + curr,0)
  return sum - actualSum
}

// 12. remove all white spaces from a string

const removeWhiteSpaces = (str)=>{
  return str.replace(/\s/g,"")
}

