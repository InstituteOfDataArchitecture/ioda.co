---
title: Optimizing a relational database
nextjs:
  metadata:
    title: Optimizing a relational database
    description: Quidem magni aut exercitationem maxime rerum eos.
---

Quasi sapiente voluptates aut minima non doloribus similique quisquam. In quo expedita ipsum nostrum corrupti incidunt. Et aut eligendi ea perferendis.

---

## The database optimization process

There are four key approaches to database optimization.

- Architecture
- Database Administration
- SQL
- Indexes

As the name suggests, the Institute of Data Architecture emphasizes data **architecture**. One of the strongest ways to optimize both database performance and business performance is to have a good architecture around data. In this section we will touch on a subsection of data architecture, namely schema design, and see how that can improve query performance.

**Database administration** for performance can be defined in optimizing settings in the database, usually performed by a DBA (Database Administrator). This is both an art and a science and requires intimate knowledge of the chosen database. Database performance tuning, though important, is not the focus of the Institute of Data Architecture. Today, modern hosted databases can handle more than a trillion (1 000 000 000 000) rows by implementing a good schema design and writing good SQL. So the DBA role is becoming more and more specialized.

The **SQL** approach focuses on writing more efficient queries. It's an abstract concept, influenced by various factors such as database type, brand, settings, business requirements, and hardware. All courses at the Institute of Data Architecture touch on this in some way.

**Indexes** can enhance query performance by enabling faster retrieval of specific rows from storage. This lesson focuses on indexes.

The aim is to provide you with a foundational understanding of database optimization and a mental model for how databases operate. You'll learn about understanding and balancing trade-offs, develop skills to reason through technical processes, address performance issues effectively, and importantly, understand how present decisions impact future outcomes.

## External links

- {% external_link title="5 Secrets for making PostgreSQL run BLAZING FAST. How to improve database performance." url="www.youtube.com/watch?v=YON9PliOYFk" /%}
- {% external_link title="PostgreSQL execution plan visualizer" url="explain.dalibo.com" /%}
- {% external_link title="Postgres Architecture Explained" url="www.youtube.com/watch?v=Q56kljmIN14" /%}
- {% external_link title="Database Indexing Explained (with PostgreSQL)" url="www.youtube.com/watch?v=-qNSXK7s7_w" /%}
- {% external_link title="Secret To Optimizing SQL Queries - Understand The SQL Execution Order" url="www.youtube.com/watch?v=BHwzDmr6d7s" /%}

{% articlefooter %}
