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

- {% external_link title="5 Secrets for making PostgreSQL run BLAZING FAST. How to improve database performance." url="www.youtube.com/watch?v=YON9PliOYFk" /%}
- {% external_link title="PostgreSQL execution plan visualizer" url="explain.dalibo.com" /%}
- {% external_link title="Postgres Architecture Explained" url="www.youtube.com/watch?v=Q56kljmIN14" /%}
- {% external_link title="Database Indexing Explained (with PostgreSQL)" url="www.youtube.com/watch?v=-qNSXK7s7_w" /%}
- {% external_link title="Secret To Optimizing SQL Queries - Understand The SQL Execution Order" url="www.youtube.com/watch?v=BHwzDmr6d7s" /%}

{% articlefooter %}
