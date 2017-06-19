![CF](https://i.imgur.com/7v5ASc8.png)  Class 9: SQL Joins & Relations
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

The purpose of this class is to introduce the concepts of database normalization through the use of SQL joins.

---

## Daily Plan

**Code Review!!**

`10 minute break`

**Slides on SQL joins**

Also see this [reference document on joins](joins.md)

##### Normalization & Joins

- Database Relationships
- 1:1 Rel
- 1:Many / Many:1 Rel
- Many:Many Rel (Includes Junction Tables)
- Self-referencing Rel

##### Database Normalization

- Remove duplicate data
- Minimize database redesign
- Minimize modification anomalies

##### Joins

- Understanding Primary and Foreign Keys
	- Discuss how these keys are related and can be used for database normalization

- Inner Join
	- Discuss syntax
	- Discuss concepts

- High Level Overview of Other Join types

`10 minute break`

##### Demo

##### Lab Prep

- Be sure to carefully follow the setup instructions in the lab README to get today's lab up and running. You need to do a DROP TABLE on the articles table from yesterday's lab to prevent problems. Today we have two tables, one of which, 'articles', is the same name as the table we used yesterday but has a different structure, so it needs to be obliterated.

---

## Learning Objectives
<!--
ABCD:
  Audience: Program participants
  Behavior: Expected learning/behavior changes/results
  Condition:
    Circumstances that lead to change/result
    When change/result are expected to occur
  Degree: How much change occurs (%) for how many participants (#)
-->

- Understand how objects in a database can be interrelated with foreign keys
- Have familiarity with queries using SQL that select data from across multiple tables
- Have familiarity with different relationships in database tables

---

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->

* [SQLBolt (Lessons 6-7) (Essential)](http://sqlbolt.com/lesson/select_queries_with_joins)

* [A Primer on SQL (Chapter 11) (Reference)](https://leanpub.com/aprimeronsql/read#leanpub-auto-understanding-joins)

* [Visual Guide to SQL Joins](http://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins)
