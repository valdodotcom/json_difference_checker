# json_difference_checker
A function that returns the following differences between two arrays of objects - if an object has been added, removed or its status has changed.

The function was written as part of a Node.js program to manage a system of alarms (the objects).
Alarms may be added to the system, removed from the system or may have their status change.
The function compares the two arrays (initial array & updated array) and returns the object showing the various differences that need to be accounted for.
