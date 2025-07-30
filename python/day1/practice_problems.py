# 🐍 DAY 1 PRACTICE PROBLEMS
# Goal: Master Variables, Input/Output, Basic Operations
# Time: 1.5-2 hours

print("="*50)
print("🔥 DAY 1 PRACTICE PROBLEMS 🔥")
print("="*50)

# ==================================================
# PROBLEM 1: PERSONAL INFORMATION
# Difficulty: ⭐ (Very Easy)
# ==================================================
print("\n📝 PROBLEM 1: Personal Information")
print("Task: Take user's personal info and display it nicely")

# YOUR CODE HERE:
# 1. Ask user for name, age, city, favorite subject
# 2. Display all info in a formatted way
# 3. Calculate and show age after 5 years

"""
Expected Output:
Enter your name: Rahul
Enter your age: 20
Enter your city: Delhi
Enter your favorite subject: Python

=== YOUR PROFILE ===
Name: Rahul
Age: 20 years
City: Delhi
Favorite Subject: Python
After 5 years, you'll be 25 years old!
"""

# SOLUTION (Try first, then check):
# name = input("Enter your name: ")
# age = int(input("Enter your age: "))
# city = input("Enter your city: ")
# subject = input("Enter your favorite subject: ")
# 
# print("\n=== YOUR PROFILE ===")
# print(f"Name: {name}")
# print(f"Age: {age} years")
# print(f"City: {city}")
# print(f"Favorite Subject: {subject}")
# print(f"After 5 years, you'll be {age + 5} years old!")

print("\n" + "="*50)

# ==================================================
# PROBLEM 2: SIMPLE CALCULATOR
# Difficulty: ⭐ (Very Easy)
# ==================================================
print("📝 PROBLEM 2: Simple Calculator")
print("Task: Create a calculator for two numbers")

# YOUR CODE HERE:
# 1. Take two numbers from user
# 2. Perform all basic operations (+, -, *, /, %)
# 3. Display results in a nice format

"""
Expected Output:
Enter first number: 15
Enter second number: 4

=== CALCULATOR RESULTS ===
15 + 4 = 19
15 - 4 = 11
15 × 4 = 60
15 ÷ 4 = 3.75
15 % 4 = 3
"""

# SOLUTION (Try first, then check):
# num1 = float(input("Enter first number: "))
# num2 = float(input("Enter second number: "))
# 
# print("\n=== CALCULATOR RESULTS ===")
# print(f"{num1} + {num2} = {num1 + num2}")
# print(f"{num1} - {num2} = {num1 - num2}")
# print(f"{num1} × {num2} = {num1 * num2}")
# print(f"{num1} ÷ {num2} = {num1 / num2}")
# print(f"{num1} % {num2} = {num1 % num2}")

print("\n" + "="*50)

# ==================================================
# PROBLEM 3: RECTANGLE AREA & PERIMETER
# Difficulty: ⭐ (Very Easy)
# ==================================================
print("📝 PROBLEM 3: Rectangle Calculator")
print("Task: Calculate area and perimeter of rectangle")

# YOUR CODE HERE:
# 1. Take length and width from user
# 2. Calculate area (length × width)
# 3. Calculate perimeter (2 × (length + width))
# 4. Display results

"""
Expected Output:
Enter length of rectangle: 10
Enter width of rectangle: 5

=== RECTANGLE CALCULATIONS ===
Length: 10.0 units
Width: 5.0 units
Area: 50.0 square units
Perimeter: 30.0 units
"""

# SOLUTION (Try first, then check):
# length = float(input("Enter length of rectangle: "))
# width = float(input("Enter width of rectangle: "))
# 
# area = length * width
# perimeter = 2 * (length + width)
# 
# print("\n=== RECTANGLE CALCULATIONS ===")
# print(f"Length: {length} units")
# print(f"Width: {width} units")
# print(f"Area: {area} square units")
# print(f"Perimeter: {perimeter} units")

print("\n" + "="*50)

# ==================================================
# PROBLEM 4: TEMPERATURE CONVERTER
# Difficulty: ⭐⭐ (Easy)
# ==================================================
print("📝 PROBLEM 4: Temperature Converter")
print("Task: Convert Celsius to Fahrenheit and Kelvin")

# YOUR CODE HERE:
# 1. Take temperature in Celsius from user
# 2. Convert to Fahrenheit: (C × 9/5) + 32
# 3. Convert to Kelvin: C + 273.15
# 4. Display all three temperatures

"""
Expected Output:
Enter temperature in Celsius: 25

=== TEMPERATURE CONVERSIONS ===
Celsius: 25.0°C
Fahrenheit: 77.0°F
Kelvin: 298.15 K
"""

# SOLUTION (Try first, then check):
# celsius = float(input("Enter temperature in Celsius: "))
# 
# fahrenheit = (celsius * 9/5) + 32
# kelvin = celsius + 273.15
# 
# print("\n=== TEMPERATURE CONVERSIONS ===")
# print(f"Celsius: {celsius}°C")
# print(f"Fahrenheit: {fahrenheit}°F")
# print(f"Kelvin: {kelvin} K")

print("\n" + "="*50)

# ==================================================
# PROBLEM 5: STUDENT PERCENTAGE CALCULATOR
# Difficulty: ⭐⭐ (Easy)
# ==================================================
print("📝 PROBLEM 5: Student Percentage Calculator")
print("Task: Calculate percentage and total marks")

# YOUR CODE HERE:
# 1. Take marks of 5 subjects from user
# 2. Calculate total marks
# 3. Calculate percentage (assuming each subject is out of 100)
# 4. Display results nicely

"""
Expected Output:
Enter marks for Subject 1: 85
Enter marks for Subject 2: 92
Enter marks for Subject 3: 78
Enter marks for Subject 4: 88
Enter marks for Subject 5: 91

=== RESULT CARD ===
Subject 1: 85 marks
Subject 2: 92 marks
Subject 3: 78 marks
Subject 4: 88 marks
Subject 5: 91 marks
Total Marks: 434 / 500
Percentage: 86.8%
"""

# SOLUTION (Try first, then check):
# print("Enter marks for 5 subjects:")
# sub1 = float(input("Enter marks for Subject 1: "))
# sub2 = float(input("Enter marks for Subject 2: "))
# sub3 = float(input("Enter marks for Subject 3: "))
# sub4 = float(input("Enter marks for Subject 4: "))
# sub5 = float(input("Enter marks for Subject 5: "))
# 
# total = sub1 + sub2 + sub3 + sub4 + sub5
# percentage = (total / 500) * 100
# 
# print("\n=== RESULT CARD ===")
# print(f"Subject 1: {sub1} marks")
# print(f"Subject 2: {sub2} marks")
# print(f"Subject 3: {sub3} marks")
# print(f"Subject 4: {sub4} marks")
# print(f"Subject 5: {sub5} marks")
# print(f"Total Marks: {total} / 500")
# print(f"Percentage: {percentage}%")

print("\n" + "="*50)
print("🎉 DAY 1 COMPLETE! Great job!")
print("📚 Next: Check hackerrank_problems.md")
print("💪 You're building strong foundations!")
print("="*50)

# ==================================================
# BONUS CHALLENGE 🚀
# ==================================================
print("\n🚀 BONUS CHALLENGE (Optional)")
print("Create a simple BMI Calculator")
print("BMI = weight(kg) / (height(m))²")

# Try this if you finish early!

# ==================================================
# SELF-CHECK ✅
# ==================================================
print("\n✅ SELF-CHECK:")
print("Can you explain:")
print("1. What is a variable?")
print("2. Why do we use int() with input()?")
print("3. What does f-string do?")
print("4. What's the difference between / and // ?")
print("5. How to calculate remainder?")

print("\nIf you can answer these, you're ready for Day 2! 🔥")
