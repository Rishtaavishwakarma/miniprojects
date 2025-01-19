# JavaScript Operator Quiz

## Questions

### 1. What will the following code output?
```javascript
let a = 5;
let b = a++ + ++a;
console.log(b);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 12  
  **Explanation:** a++ uses the current value (5) and then increments a to 6. ++a then increments a to 7, resulting in 5 + 7 = 12.
</details>

---

### 2. What will be the output of this code?
```javascript
let x = 2;
let y = x * 3 - x++ + x;
console.log(y);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 7  
  **Explanation:** x * 3 is 6, x++ uses 2 (then increments x to 3), so 6 - 2 + 3 = 7.
</details>

---

### 3. What will this code output?
```javascript
let str = "5" + 5 - 5;
console.log(str);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 50  
  **Explanation:** "5" + 5 becomes "55" (string concatenation), then "55" - 5 converts to 50.
</details>

---

### 4. What will be the output of this code?
```javascript
let a = 1;
let b = 2;
let c = a = b;
console.log(c);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 2  
  **Explanation:** a = b assigns 2 to a and returns 2, so c is 2.
</details>

---

### 5. What will the following code print?
```javascript
let d = null;
let e = 5;
let f = d ?? e;
console.log(f);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 5  
  **Explanation:** The nullish coalescing operator (??) returns the right operand (e) when the left operand (d) is null.
</details>

---

### 6. What will this code output?
```javascript
let g = 0;
let h = g || "default";
console.log(h);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "default"  
  **Explanation:** The || operator returns the first truthy value; since g is falsy, it returns "default".
</details>

---

### 7. What will the following code print?
```javascript
let i = 10;
let j = i > 5 ? "Greater" : "Smaller";
console.log(j);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Greater"  
  **Explanation:** The condition i > 5 is true, so the ternary operator returns "Greater".
</details>

---

### 8. What will this code output?
```javascript
let k = [1, 2, 3];
let l = k[0] + k[1] + k[2] + "4";
console.log(l);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 64  
  **Explanation:** k[0] + k[1] + k[2] evaluates to 6, and then "4" is concatenated resulting in "64".
</details>

---

### 9. What will be the output of this code?
```javascript
let m = 1;
let n = m++ + ++m;
console.log(n);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 5  
  **Explanation:** m++ uses 1 (then m becomes 2), and ++m makes it 3. So, 1 + 3 = 4.
</details>

---

### 10. What will this code output?
```javascript
let o = 3;
let p = o * 2 == 6 ? "Yes" : "No";
console.log(p);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Yes"  
  **Explanation:** o * 2 is 6, so the condition is true, and it returns "Yes".
</details>

---

### 11. What will be the output of this code?
```javascript
let q = 5;
let r = q++ + ++q;
console.log(r);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 12  
  **Explanation:** q++ uses 5 (then q becomes 6), and ++q becomes 7. So, 5 + 7 = 12.
</details>

---

### 12. What will this code output?
```javascript
let s = "10" - 5;
console.log(s);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 5  
  **Explanation:** The - operator converts the string "10" to a number, resulting in 10 - 5 = 5.
</details>

---

### 13. What will the following code print?
```javascript
let t = 1;
let u = t + (t = 3);
console.log(u);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 4  
  **Explanation:** The value of t before the assignment is 1, and the assignment t = 3 happens after the addition. So, 1 + 3 = 4.
</details>

---

### 14. What will this code output?
```javascript
let v = 1;
let w = v === "1" ? "Equal" : "Not Equal";
console.log(w);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Not Equal"  
  **Explanation:** The === operator checks both value and type. Since 1 (number) is not strictly equal to "1" (string), it returns "Not Equal".
</details>

---

### 15. What will this code output?
```javascript
let x = [1, 2, 3];
let y = x[0] + x[1] + "4";
console.log(y);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 34  
  **Explanation:** x[0] + x[1] evaluates to 1 + 2, which is 3, and then concatenates with "4" resulting in "34".
</details>

---

### 16. What will this code output?
```javascript
let z = 5;
let a = z > 10 ? "Big" : z < 3 ? "Small" : "Medium";
console.log(a);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Medium"  
  **Explanation:** The first condition is false, but the second condition is also false, so it returns "Medium".
</details>

---

### 17. What will the following code print?
```javascript
let b = 1;
let c = b + b++ + ++b;
console.log(c);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 5  
  **Explanation:** b starts at 1. The expression evaluates as 1 + 1 + 3 (after b is incremented twice), resulting in 5.
</details>

---

### 18. What will this code output?
```javascript
let d = [1, 2, 3];
let e = d.join('-');
console.log(e);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "1-2-3"  
  **Explanation:** The join() method creates a string by joining the elements of the array with - as the separator.
</details>

---

### 19. What will the following code print?
```javascript
let f = 1;
let g = (f += 2) + (f += 3);
console.log(g);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 11  
  **Explanation:** The first f += 2 makes f equal to 3. The second f += 3 makes f equal to 6. So, 3 + 6 = 9.
</details>

---

### 20. What will this code output?
```javascript
let h = 1;
let i = h++ + ++h;
console.log(i);
```
<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** 5  
  **Explanation:** The first h++ uses 1 and then increments h to 2. The ++h increments h to 3, so the expression evaluates as 1 + 3 = 4.
</details>

---



# JavaScript Conditional Statements Quiz Questions

This repository contains a series of JavaScript quiz questions with detailed explanations of the expected outputs. It is designed to help developers improve their JavaScript knowledge and understanding of key concepts like comparison operators, conditional logic, truthy/falsy values, and more.


## Questions

### 1. What will the following code output?

```javascript
let x = 10;
if (x = 5) {
    console.log("Equal");
} else {
    console.log("Not Equal");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Equal"  
  **Explanation:** The code uses the assignment operator `=` instead of the comparison operator `==`. The value `5` is assigned to `x`, which is truthy, so the `if` block executes.
</details>

---

### 2. What will be the output of this code?

```javascript
let a = 0;
if (a) {
    console.log("True");
} else {
    console.log("False");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "False"  
  **Explanation:** The value `0` is falsy in JavaScript, so the `else` block executes.
</details>

---

### 3. What will be printed when the following code is executed?

```javascript
let b = null;
if (b == undefined) {
    console.log("Matched");
} else {
    console.log("Not Matched");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Matched"  
  **Explanation:** The `==` operator checks for equality with type coercion. `null` and `undefined` are considered equal when using loose equality.
</details>

---

### 4. What will the output be?

```javascript
let c = "5";
if (c === 5) {
    console.log("Strictly Equal");
} else {
    console.log("Not Strictly Equal");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Not Strictly Equal"  
  **Explanation:** The `===` operator checks both value and type. Since `c` is a string and `5` is a number, they are not strictly equal.
</details>

---

### 5. What will this code return?

```javascript
let d = 10;
if (d > 5 && d < 15) {
    console.log("In Range");
} else {
    console.log("Out of Range");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "In Range"  
  **Explanation:** Both conditions (`d > 5` and `d < 15`) are true, so the first block executes.
</details>

---

### 6. What will be the output of the following?

```javascript
let e = 10;
if (e > 5 || e < 5) {
    console.log("Condition Met");
} else {
    console.log("Condition Not Met");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Condition Met"  
  **Explanation:** The `||` operator checks if at least one condition is true. Since `e > 5` is true, the first block executes.
</details>

---

### 7. What will this code print?

```javascript
let f = 0;
if (f) {
    console.log("Truthy");
} else if (f === 0) {
    console.log("Falsy Zero");
} else {
    console.log("Default");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Falsy Zero"  
  **Explanation:** The first condition is false because `0` is falsy. The second condition checks if `f` is strictly equal to `0`, which is true, so this block executes.
</details>

---

### 8. What is the output of this code?

```javascript
let g = "Hello";
if (g.length > 5) {
    console.log("Long String");
} else {
    console.log("Short String");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Short String"  
  **Explanation:** The length of the string `"Hello"` is 5, which is not greater than 5, so the else block executes.
</details>

---

### 9. What will this code output?

```javascript
let h = "0";
if (h) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Truthy"  
  **Explanation:** Non-empty strings are truthy in JavaScript, so the first block executes.
</details>

---

### 10. What will the following code print?

```javascript
let i = NaN;
if (i) {
    console.log("Not NaN");
} else {
    console.log("Is NaN");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Is NaN"  
  **Explanation:** `NaN` (Not-a-Number) is falsy in JavaScript, so the `else` block executes.
</details>

---

### 11. What will this code return?

```javascript
let j = "false";
if (j) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Truthy"  
  **Explanation:** The string `"false"` is non-empty and thus truthy.
</details>

---

### 12. What will be the output of this code?

```javascript
let k = [1, 2, 3];
if (k) {
    console.log("Array is Truthy");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Array is Truthy"  
  **Explanation:** Arrays are objects in JavaScript and are considered truthy, so this block executes.
</details>

---

### 13. What will this code output?

```javascript
let l = undefined;
if (l === null) {
    console.log("Null");
} else {
    console.log("Not Null");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Not Null"  
  **Explanation:** `undefined` is not strictly equal to `null`, so the `else` block executes.
</details>

---

### 14. What will the following code print?

```javascript
let m = "10";
if (m == 10) {
    console.log("Loose Equality");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Loose Equality"  
  **Explanation:** The `==` operator performs type coercion, so the string `"10"` is converted to a number for comparison, resulting in equality.
</details>

---

### 15. What will be the output of this code?

```javascript
let n = "2";
if (n + 2 == 4) {
    console.log("True");
} else {
    console.log("False");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "False"  
  **Explanation:** The expression `n + 2` results in the string `"22"` due to string concatenation. When using `==`, the string is coerced to a number and compared to `4`, which results in false.
</details>

---

### 16. What will the following code output?

```javascript
let o = 1;
if (o) {
    console.log("One");
} else if (o === 0) {
    console.log("Zero");
} else {
    console.log("Not One or Zero");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "One"  
  **Explanation:** The value `1` is truthy, so the first block executes.
</details>

---

### 17. What will this code print?

```javascript
let p = [1, 2, 3];
if (p.length) {
    console.log("Array is Not Empty");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Array is Not Empty"  
  **Explanation:** The length of the array is `3`, which is truthy, so this block executes.
</details>

---

### 18. What will the output be?

```javascript
let q = "abc";
if (q === "abc") {
    console.log("Matched");
} else {
    console.log("Not Matched");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Matched"  
  **Explanation:** The string `q` is strictly equal to `"abc"`, so the first block executes.
</details>

---

### 19. What will this code output?

```javascript
let r = 5;
if (r > 0 && r < 10) {
    console.log("Between 0 and 10");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Between 0 and 10"  
  **Explanation:** Both conditions are true, so this block executes.
</details>

---

### 20. What will be the output of this code?

```javascript
let s = 0;
if (s == false) {
    console.log("Equal to false");
}
```

<details>
  <summary>Click to view Answer and Explanation</summary>
  **Answer:** "Equal to false"  
  **Explanation:** The value `0` is loosely equal to `false`, so this block executes.
</details>

---



