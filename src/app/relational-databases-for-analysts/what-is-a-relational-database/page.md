---
title: What is a relational database?
nextjs:
  metadata:
    title: What is a relational database?
    description: Relational databases, essential in modern data management, organize data in tables, rows, and columns for efficient retrieval and manipulation.
---

Relational databases, essential in modern data management, organize data in tables, rows, and columns for efficient retrieval and manipulation.

---

## Institute of Data Architecture and Relational Databases

In **analytical** data management, like reporting, business intelligence, data warehouses, charts, and dashboard, it is most common to use relational databases as data storage, and since Institute of Data Architecture focuses on **analytical** data management a lot of emphasis has been put on SQL and relational databases.

## Definition and History of Relational Databases

Relational databases, conceptualized by E.F. Codd in 1970, marked a significant advancement in data management. They organize data into tables, rows, and columns, based on the relational model, which emphasizes structured data storage and easy accessibility. This model has evolved over decades, solidifying its role as a fundamental component in modern data systems.

### Definition and History of Relational Databases external resources

- {% external_link title="History of Databases" url="www.youtube.com/watch?v=KG-mqHoXOXY" /%}
- {% external_link title="What is a database in under 4 minutes" url="www.youtube.com/watch?v=Tk1t3WKK-ZY" /%}

## Key Components: Tables, Rows, Columns, and Relationships

Relational databases are organized into tables, which hold data. Each table has rows for unique records and columns for attributes. The connections between tables are formed through keys.

## Relational Database Management Systems (RDBMS)

Relational Database Management Systems (RDBMS), like Postgres, MySQL, Oracle, and SQL Server, manage relational databases.

They provide interfaces for data operations, ensuring integrity, security, and consistency. They also provide tools for data administration, such as backup and recovery, performance monitoring, and user management.

## The Role of SQL in Relational Databases

Structured Query Language (SQL) serves as the primary means of interacting with relational databases. It provides the functionality for a broad spectrum of database operations. These include querying for data, updating records, inserting new data, and deleting existing records. SQL also plays a crucial role in managing database transactions, ensuring data integrity and consistency across multiple operations.

## ACID

**ACID** stands for Atomicity, Consistency, Isolation, Durability. These are the key properties that ensure reliable transaction processing in database management systems.

**Atomicity:** This ensures that a transaction is treated as a single unit, which either succeeds completely or fails completely. If any part of the transaction fails, the entire transaction is rolled back.

**Consistency:** Ensures that a transaction brings the database from one valid state to another, maintaining database integrity. No transaction should leave the database in an inconsistent state.

**Isolation:** This property ensures that concurrent transactions are executed in an isolated manner, as if they are being executed sequentially. This prevents transactions from interfering with each other.

**Durability:** Once a transaction is committed, it is permanently written to the database. This guarantees that the changes made by the transaction survive system failures.

These principles are fundamental for ensuring data integrity and consistency in relational database systems.

### Example: Online Banking System

Imagine an online banking system where a user is transferring money to another account. This transaction involves two steps:

1. Deducting the amount from the sender's account.
2. Crediting the amount to the receiver's account.

Now, let's see why each ACID property is vital:

**Atomicity:** This ensures that both steps of the transaction are completed successfully. If, for any reason, the credit to the receiver's account fails (maybe due to a network issue), the entire transaction, including the deduction from the sender's account, is rolled back. Without atomicity, the sender could lose money without it being received by the intended recipient.

**Consistency:** The transaction respects the rules of the banking system (e.g., account balances cannot be negative). Consistency checks ensure that the transaction doesn't violate any of these rules, maintaining the integrity of the financial data.

**Isolation:** If multiple transactions are occurring simultaneously (like thousands of users transferring money), isolation ensures that these transactions do not interfere with each other. For instance, it prevents the same money from being 'double-spent' in two different transactions.

**Durability:** Once the transaction is complete and the money is transferred, the change is permanent. Even if there's a system crash immediately after, the record of the transaction won't be lost. The sender's and receiver's account balances will reflect the transaction accurately when the system is back online.

## Relational databases external resources

- {% external_link title="Relational Database Concepts" url="www.youtube.com/watch?v=NvrpuBAMddw" /%}
- {% external_link title="Primary & Foreign Keys" url="www.youtube.com/watch?v=B5r8CcTUs5Y" /%} {% badge %}Optional{% /badge %}
- {% external_link title="7 Database Paradigms" url="www.youtube.com/watch?v=W2Z7fbCLSTw" /%} {% badge %}Optional{% /badge %}
- {% external_link title="Relational vs. Non-Relational Databases" url="www.youtube.com/watch?v=E9AgJnsEvG4" /%} {% badge %}Optional{% /badge %}
- {% external_link title="Which Database Model to Choose?" url="www.youtube.com/watch?v=9mdadNspP_M" /%} {% badge %}Optional{% /badge %}

{% articlefooter %}
