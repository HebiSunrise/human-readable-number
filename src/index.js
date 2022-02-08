module.exports = function toReadable (number) {
  let arr = String(number);
    let end = ""
    if (arr == 0) return "zero"
    if (arr == 1) return "one"
    if (arr == 2) return "two"
    if (arr == 3) return "three"
    if (arr == 4) return "four"
    if (arr == 5) return "five"
    if (arr == 6) return "six"
    if (arr == 7) return "seven"
    if (arr == 8) return "eight"
    if (arr == 9) return "nine"
    if (arr == 10) return "ten"
    if (arr == 11) return "eleven"
    if (arr == 12) return "twelve"
    if (arr == 13) return "thirteen"
    if (arr == 14) return "fourteen"
    if (arr == 15) return "fifteen"
    if (arr == 16) return "sixteen"
    if (arr == 17) return "seventeen"
    if (arr == 18) return "eighteen"
    if (arr == 19) return "nineteen"
    if (arr == 20) return "twenty"
    
    
    if (arr.length == 2) {
        
        if (arr[0] == "2") {end += "twenty"}
        if (arr[0] == "3") {end += "thirty"}
        if (arr[0] == "4") {end += "forty"}
        if (arr[0] == "5") {end += "fifty"}
        if (arr[0] == "6") {end += "sixty"}
        if (arr[0] == "7") {end += "seventy"}
        if (arr[0] == "8") {end += "eighty"}
        if (arr[0] == "9") {end += "ninety"}
        
        if (arr[1] == 1) {end += " one"}
        if (arr[1] == 2) {end += " two"}
        if (arr[1] == 3) {end += " three"}
        if (arr[1] == 4) {end += " four"}
        if (arr[1] == 5) {end += " five"}
        if (arr[1] == 6) {end += " six"}
        if (arr[1] == 7) {end += " seven"}
        if (arr[1] == 8) {end += " eight"}
        if (arr[1] == 9) {end += " nine"}
    }
    
    if (arr.length == 3) {
        
        if (arr[0] == "1") {end += "one hundred"}
        if (arr[0] == "2") {end += "two hundred"}
        if (arr[0] == "3") {end += "three hundred"}
        if (arr[0] == "4") {end += "four hundred"}
        if (arr[0] == "5") {end += "five hundred"}
        if (arr[0] == "6") {end += "six hundred"}
        if (arr[0] == "7") {end += "seven hundred"}
        if (arr[0] == "8") {end += "eight hundred"}
        if (arr[0] == "9") {end += "nine hundred"}
        
        if (arr[1]+arr[2] == 1)  {end += " one"; return end}
        if (arr[1]+arr[2] == 2) {end +=  " two"; return end}
        if (arr[1]+arr[2] == 3) {end +=  " three"; return end}
        if (arr[1]+arr[2] == 4) {end +=  " four"; return end}
        if (arr[1]+arr[2] == 5) {end +=  " five"; return end}
        if (arr[1]+arr[2] == 6) {end +=  " six"; return end}
        if (arr[1]+arr[2] == 7) {end +=  " seven"; return end}
        if (arr[1]+arr[2] == 8) {end +=  " eight"; return end}
        if (arr[1]+arr[2] == 9) {end +=  " nine"; return end}
        if (arr[1]+arr[2] == 10) {end +=  " ten"; return end}
        if (arr[1]+arr[2] == 11) {end +=  " eleven"; return end}
        if (arr[1]+arr[2] == 12) {end +=  " twelve"; return end}
        if (arr[1]+arr[2] == 13) {end +=  " thirteen"; return end}
        if (arr[1]+arr[2] == 14) {end +=  " fourteen"; return end}
        if (arr[1]+arr[2] == 15) {end +=  " fifteen"; return end}
        if (arr[1]+arr[2] == 16) {end +=  " sixteen"; return end}
        if (arr[1]+arr[2] == 17) {end +=  " seventeen"; return end}
        if (arr[1]+arr[2] == 18) {end +=  " eighteen"; return end}
        if (arr[1]+arr[2] == 19) {end +=  " nineteen"; return end}
        if (arr[1]+arr[2] == 20) {end +=  " twenty"; return end}
        
        if (arr[1] == "2") {end += " twenty"}
        if (arr[1] == "3") {end += " thirty"}
        if (arr[1] == "4") {end += " forty"}
        if (arr[1] == "5") {end += " fifty"}
        if (arr[1] == "6") {end += " sixty"}
        if (arr[1] == "7") {end += " seventy"}
        if (arr[1] == "8") {end += " eighty"}
        if (arr[1] == "9") {end += " ninety"}
        
        if (arr[2] == 1) {end += " one"}
        if (arr[2] == 2) {end += " two"}
        if (arr[2] == 3) {end += " three"}
        if (arr[2] == 4) {end += " four"}
        if (arr[2] == 5) {end += " five"}
        if (arr[2] == 6) {end += " six"}
        if (arr[2] == 7) {end += " seven"}
        if (arr[2] == 8) {end += " eight"}
        if (arr[2] == 9) {end += " nine"}
    }

    return end
}
