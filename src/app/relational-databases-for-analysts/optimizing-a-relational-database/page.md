---
title: Optimizing a relational database
nextjs:
  metadata:
    title: Optimizing a relational database
    description: Optimizing a relational database involves enhancing its performance by restructuring its schema, indexing, query design, and other configurations for more efficient data management and retrieval.
---

Optimizing a relational database involves enhancing its performance by restructuring its schema, indexing, query design, and other configurations for more efficient data management and retrieval.

---

## The database optimization process

There are four key approaches to database optimization.

- Architecture
- Database Administration
- SQL
- Indexes

As the name suggests, the Institute of Data Architecture emphasizes data **architecture**. In this section we will touch on a subsection of data architecture, namely _schema design_, and see how that can improve query performance.

**Database administration** for performance can be defined in optimizing settings in the database, usually performed by a DBA (Database Administrator). This is both an art and a science and requires intimate knowledge of the chosen database. Database performance tuning, though important, is not the focus of the Institute of Data Architecture.

The **SQL** approach focuses on writing more efficient queries. All courses at the Institute of Data Architecture touch on this in some way.

**Indexes** can enhance query performance by enabling faster retrieval of specific rows from storage. This lesson focuses on indexes.

## IO The most important factor

The IO (Input/Output) between storage and CPU is the most common bottleneck of a database.

IO is the communication between the CPU and storage. Everytime the CPU needs a piece of data, it has to ask the storage for it. The storage then sends the data back to the CPU. This is called IO. And this operation has a small overhead.

The overhead is small, but not negligible.

## Create

1. Create a text file
2. Create schema for 1.1.1
3. Create customers and sales table
4. Training: run a simple select query and see how long it takes
5. Training: add an index and see how long it takes
6. Training: run a bad join and see how long it takes
7. Training: run a god join and see how long it takes
8. Training: add an index and see how long it takes

### IO by example (overly simplified) - indfør 1000 rows

Let's say the database can read 1 rows in one IO operation, and that takes 1 ms (millisecond or one thousands of a second).

_**Note.** In reality, the database can usually read a lot more than one row in one IO operation._

If you need to read 10 000 rows, that will take 10 000 IO operations, and 10 seconds.

#### A simple where clause

So let's assume you have a table with 10 000 rows, and you want to find all rows where the column `name` is equal to `Lenny Dexter`.

```sql
select * from users where name = 'Lenny Dexter';
```

Eventhough we only want one row, the database will have to read all 10 000 rows to find the one row where `name` is equal to `Lenny Dexter`. That will take 10 000 IO operations.

#### A simple bad join

Let's say you have two tables, `users` and `orders`. And you want to find all orders for the user `Lenny Dexter`.

```sql
select *
from users, orders
where users.id = orders.user_id
and users.name = 'Lenny Dexter'
```

## What is database optimization?

If you haven't worked profesionally with databases, this next statements may seem controversial:

- Very often, you are not able to make a database run faster by bying more expensive hardware.
- Nearly all issues with query performance is related to IO (Input/Output between the CPU and storage), not CPU, number of cores, ram, .

## Overly simplified, what is an index?

## The database optimization process external resources

- {% external_link title="5 Secrets for making PostgreSQL run BLAZING FAST. How to improve database performance." url="www.youtube.com/watch?v=YON9PliOYFk" /%}
- {% external_link title="PostgreSQL execution plan visualizer" url="explain.dalibo.com" /%}
- {% external_link title="Postgres Architecture Explained" url="www.youtube.com/watch?v=Q56kljmIN14" /%}
- {% external_link title="Database Indexing Explained (with PostgreSQL)" url="www.youtube.com/watch?v=-qNSXK7s7_w" /%}
- {% external_link title="Secret To Optimizing SQL Queries - Understand The SQL Execution Order" url="www.youtube.com/watch?v=BHwzDmr6d7s" /%}

{% articlefooter %}
