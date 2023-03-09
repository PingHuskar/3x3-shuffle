# Tiles In Order

## Explained by ChatGPT
### What is "out of order pair"
```
In computer science, an "out of order pair" is a term used to describe a situation where two elements in a sequence or array are not in the expected order. Specifically, the first element appears after the second element.

For example, suppose we have an array [3, 5, 2, 1, 4]. The pair (2, 5) is an out of order pair because the element 2 comes before the element 5 in the array, but 5 should come before 2 in a sorted version of the array.

The number of out of order pairs in an array can give us information about how sorted or unsorted the array is. If an array is already sorted, it will have no out of order pairs. On the other hand, if an array is completely unsorted, it will have many out of order pairs.

Computing the number of out of order pairs can be useful in certain algorithms, such as merge sort, where it is used to determine the number of inversions in an array. It can also be used in applications such as data compression and image recognition.
```
### Example 
```
To determine the number of out of order pairs in the array [1, 6, 3, 4, 2, 5, 7, 8], we need to compare each pair of elements (i, j) where i < j. If a pair (i, j) is an out of order pair, it means that a[i] > a[j], and we count it.

So let's go through each pair of elements in the array:

(1, 6): not an out of order pair
(1, 3): not an out of order pair
(1, 4): not an out of order pair
(1, 2): not an out of order pair
(1, 5): not an out of order pair
(1, 7): not an out of order pair
(1, 8): not an out of order pair
(6, 3): out of order pair
(6, 4): out of order pair
(6, 2): out of order pair
(6, 5): out of order pair
(6, 7): not an out of order pair
(6, 8): not an out of order pair
(3, 4): not an out of order pair
(3, 2): out of order pair
(3, 5): not an out of order pair
(3, 7): not an out of order pair
(3, 8): not an out of order pair
(4, 2): out of order pair
(4, 5): not an out of order pair
(4, 7): not an out of order pair
(4, 8): not an out of order pair
(2, 5): out of order pair
(2, 7): out of order pair
(2, 8): out of order pair
(5, 7): not an out of order pair
(5, 8): not an out of order pair
(7, 8): not an out of order pair
```
```
Therefore, the number of out of order pairs in the array [1, 6, 3, 4, 2, 5, 7, 8] is 8: (6, 3), (6, 4), (6, 2), (6, 5), (3, 2), (4, 2), (2, 5), (2, 7), (2, 8).
```


## Source
- [The Math Needed for Computer Science](https://www.youtube.com/watch?v=eSFA1Fp8jc)