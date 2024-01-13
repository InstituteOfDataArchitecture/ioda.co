---
title: Optimizing a relational database
nextjs:
  metadata:
    title: Optimizing a relational database
    description: Optimizing a relational database involves enhancing its performance by restructuring its schema, indexing, query design, and other configurations for more efficient data management and retrieval.
---

Optimizing a relational database involves enhancing its performance by restructuring its schema, indexing, query design, and other configurations for more efficient data management and retrieval.

---

SKRIV HEADLINES TIL DET HELE

## The database optimization process

There are four key approaches to database optimization.

- Architecture
- Database Administration
- SQL
- Indexes

As the name suggests, the Institute of Data Architecture emphasizes data **architecture**. One of the strongest ways to optimize both database performance and business performance is to have a good architecture around data. In this section we will touch on a subsection of data architecture, namely schema design, and see how that can improve query performance.

**Database administration** for performance can be defined in optimizing settings in the database, usually performed by a DBA (Database Administrator). This is both an art and a science and requires intimate knowledge of the chosen database. Database performance tuning, though important, is not the focus of the Institute of Data Architecture. Today, modern hosted databases can easily handle a billion rows and often handle more than a trillion (1 000 000 000 000) rows by implementing a good schema design and writing good SQL. So the DBA role is becoming more and more specialized.

The **SQL** approach focuses on writing more efficient queries. It's an abstract concept, influenced by various factors such as database type, database brand, settings, business requirements, and hardware. All courses at the Institute of Data Architecture touch on this in some way.

**Indexes** can enhance query performance by enabling faster retrieval of specific rows from storage. This lesson focuses on indexes.

## This is just an introduction

If you are not familiar with computer sceince, this lesson will seem a bit overwhelming. Don't worry, you don't need to understand everything, and the training will not be difficult. The aim is just to give you a high-level mental model of what database optimization is.

## IO The most important factor

The IO (Input/Output) between storage and CPU is the most common bottleneck of a database.

IO is the communication between the CPU and storage. Everytime the CPU needs a piece of data, it has to ask the storage for it. The storage then sends the data back to the CPU. This is called IO. And this operation has a small overhead.

The overhead is small, but not negligible.

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

The table `users` still have 10 000 rows, and the table `orders` have 1 000 000 rows.

In this case the database will have to read each row from the table `orders` for every row in the table `users`. That will take 10 000 \* 1 000 000 = 10 000 000 000 IO operations, that is 115 days, 17 hours, 46 minutes, and 40 seconds.

#### Scalability issues of bad joins

#### Optimizing with an index

## Intexes deep dive (optional)

## The b-tree index

There are many different types of database indexes, and the ones available depend on the database you are using. The most common index is the B-tree index. It is the default index in most relational databases including Postgres.

In this lesson we will focus on the b-tree index.

## External links

- {% external_link title="5 Secrets for making PostgreSQL run BLAZING FAST. How to improve database performance." url="www.youtube.com/watch?v=YON9PliOYFk" /%}
- {% external_link title="PostgreSQL execution plan visualizer" url="explain.dalibo.com" /%}
- {% external_link title="Postgres Architecture Explained" url="www.youtube.com/watch?v=Q56kljmIN14" /%}
- {% external_link title="Database Indexing Explained (with PostgreSQL)" url="www.youtube.com/watch?v=-qNSXK7s7_w" /%}
- {% external_link title="Secret To Optimizing SQL Queries - Understand The SQL Execution Order" url="www.youtube.com/watch?v=BHwzDmr6d7s" /%}

## What is database optimization?

If you haven't worked profesionally with databases, this next statements may seem controversial:

- Very often, you are not able to make a database run faster by bying more expensive hardware.
- Nearly all issues with query performance is related to IO (Input/Output between the CPU and storage), not CPU, number of cores, ram, .

## Overly simplified, what is an index?

{% articlefooter %}
