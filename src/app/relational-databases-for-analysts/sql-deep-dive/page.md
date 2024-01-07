---
title: SQL deep dive
nextjs:
  metadata:
    title: SQL deep dive
    description:
---

{% upcoming /%}

## The SQL statements

In this leason we will go through the most important SQL statements. Under each description we will have an example SQL statement, that statement should be run in the DeveloperSetup Codespace.

VIDEO how to run the example SQL statement.

After we have gone through the SQL statements we have prepared a training section that can be done in the DeveloperSetup Codespace and the result can be part of your GitHub portfolio.

### Select statement

The select statement is the most important statement in SQL. It is used to retrieve data from a database. The basic syntax is:

```sql
select column1, column2, ...
from table_name;
```

#### Select distinct statement

select distinct is used to return only distinct (different) values. It is used to remove duplicate values from a result set.

```sql
select distinct column1, column2, ...
from table_name;
```

#### Top/limit statement

select top is used to return a specified number of records. The syntax varies between different databases.

```sql
select top number column1, column2, ...
from table_name;
```

### SQLFluff

SQLFluff is a linter for SQL. It can be used to check the syntax of SQL statements. It can be installed with pip:

```bash
pip install sqlfluff
```

### Where statement

The where statement is used to filter records. The basic syntax is:

```sql
select column1, column2, ...
from table_name
where condition;
```

### Group by statement

### Order of operation and the having statement

### Join statement

### Union statement

### Subqueries

### Window functions

### Case statements

### CTEs

### Views

### Indexes

### Transactions

### Insert statement

### Update statement

### Delete statement

### Upsert statement

### Create table statement

### Alter table statement

### Drop table statement

## Training

### How many people are in each department?

VIDEO: let's do the first one togeather

### from subquery to cte
