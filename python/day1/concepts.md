# 📖 **DAY 1: FOUNDATION & BASICS**
## **Goal: Master the core building blocks of Python**

---

## 🎯 **आज तू क्या सीखेगा (What You'll Learn Today)**

1. **Variables और Data Types**
2. **Input/Output Operations** 
3. **Basic Operations**
4. **String Formatting**
5. **Type Conversion**

---

## 📚 **CONCEPT 1: VARIABLES & DATA TYPES**

### **Variables क्या होते हैं?**
Variables are like **boxes** जिनमें हम data store करते हैं।

```python
# Variables बनाना
name = "Shrey"          # String (text)
age = 20               # Integer (whole number)
height = 5.8           # Float (decimal number)
is_student = True      # Boolean (True/False)

print(name)            # Output: Shrey
print(age)             # Output: 20
print(type(name))      # Output: <class 'str'>
```

### **Variable Naming Rules:**
```python
# ✅ Correct
student_name = "Rahul"
age1 = 18
_private = "secret"

# ❌ Wrong
2name = "Error"        # Can't start with number
student-name = "Error" # Can't use hyphen
class = "Error"        # Can't use keywords
```

---

## 📚 **CONCEPT 2: INPUT/OUTPUT**

### **Output देना (Printing):**
```python
print("Hello World!")
print("My name is", name)
print("I am", age, "years old")

# Multiple values print करना
print("Name:", name, "Age:", age, "Height:", height)
```

### **Input लेना (Taking User Input):**
```python
# String input (default)
user_name = input("Enter your name: ")
print("Hello", user_name)

# Number input (conversion required)
user_age = int(input("Enter your age: "))
user_height = float(input("Enter your height: "))

print("You are", user_age, "years old")
print("Your height is", user_height, "feet")
```

---

## 📚 **CONCEPT 3: BASIC OPERATIONS**

### **Arithmetic Operations:**
```python
a = 10
b = 3

print("Addition:", a + b)        # 13
print("Subtraction:", a - b)     # 7
print("Multiplication:", a * b)   # 30
print("Division:", a / b)        # 3.333...
print("Floor Division:", a // b) # 3
print("Remainder:", a % b)       # 1
print("Power:", a ** b)          # 1000
```

### **String Operations:**
```python
first_name = "Shrey"
last_name = "Sharma"

# String concatenation
full_name = first_name + " " + last_name
print(full_name)  # Shrey Sharma

# String repetition
print("Ha" * 5)   # HaHaHaHaHa

# String length
print(len(full_name))  # 11
```

---

## 📚 **CONCEPT 4: TYPE CONVERSION**

### **Data Types को Convert करना:**
```python
# String to Number
age_str = "20"
age_num = int(age_str)
print(age_num + 5)  # 25

# Number to String
score = 95
score_str = str(score)
print("Your score is " + score_str)

# Examples
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
sum_result = num1 + num2
print("Sum is:", sum_result)
```

---

## 📚 **CONCEPT 5: STRING FORMATTING**

### **Modern Way (f-strings):**
```python
name = "Rahul"
age = 21
marks = 85.5

# f-string formatting (recommended)
print(f"My name is {name}")
print(f"I am {age} years old")
print(f"I scored {marks} marks")

# Mathematical operations inside f-strings
print(f"Next year I'll be {age + 1} years old")
print(f"My percentage is {marks}%")
```

---

## 💡 **PRACTICAL EXAMPLES**

### **Example 1: Simple Calculator**
```python
print("=== SIMPLE CALCULATOR ===")
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print(f"Addition: {num1} + {num2} = {num1 + num2}")
print(f"Subtraction: {num1} - {num2} = {num1 - num2}")
print(f"Multiplication: {num1} × {num2} = {num1 * num2}")
print(f"Division: {num1} ÷ {num2} = {num1 / num2}")
```

### **Example 2: Personal Info**
```python
print("=== PERSONAL INFO FORM ===")
name = input("Enter your name: ")
age = int(input("Enter your age: "))
city = input("Enter your city: ")
hobby = input("Enter your hobby: ")

print("\n=== YOUR INFO ===")
print(f"Name: {name}")
print(f"Age: {age}")
print(f"City: {city}")
print(f"Hobby: {hobby}")
print(f"In 10 years, you'll be {age + 10} years old!")
```

---

## 🚀 **KEY TAKEAWAYS**

1. **Variables** are containers for storing data
2. **input()** function हमेशा string return करता है
3. **Type conversion** जरूरी है numbers के लिए
4. **f-strings** are the modern way to format strings
5. **print()** function multiple values ले सकता है

---

## 🎯 **अगला कदम (Next Step)**
अब `practice_problems.py` file में problems solve कर!

**Remember:** हर line को समझने की कोशिश कर, speed की tension मत ले! 🐌➡️🚀
