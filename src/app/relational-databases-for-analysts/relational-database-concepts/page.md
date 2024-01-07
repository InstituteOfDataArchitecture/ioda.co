---
title: Relational database concepts
nextjs:
  metadata:
    title: Relational database concepts
    description: Core concepts of relational databases, including SQL, data types, keys, indexes, and constraints.
---

Core concepts of relational databases, including SQL, data types, keys, indexes, and constraints.

---

## SQL

SQL, the language of databases, enables you to declare your data requirements for both retrieval and manipulation.

**Example:** all rows and all columns from a table called customers:

```sql
select * from customers;
```

**Example:** email and full name of customers who has spent more than 1000 usd on January 7, 2023.

```sql
select
    customers.email,
    concat(customers.first_name, ' ', customers.last_name) as full_name,
    sum(sales.amount) as total_spent
from
    sales
left join customers
    on sales.customer_id = customers.id
where
    sales.date = '2023-01-07'
group by
    customers.email, customers.first_name, customers.last_name
having
    sum(sales.amount) > 1000;

```

### SQL external resources

- {% external_link title="SQL Explained in 100 Seconds" url="www.youtube.com/watch?v=zsjvFFKOm3c" /%}

## Data types

Data types define the kinds of data stored in database table columns. Each column in a database table is required to have a name and a data type. The data type constrains the type of data that can be stored in that column.

**Data types are important for two reasons:**

- **Constraints:** You will get an error if you put a decimal number into a column that only accepts whole numbers.
- **Optimization:** For instance, defining a boolean _(true or false)_ enables the database to use just one bit of space instead of multiple bytes.

**The most common data types are:**

- **Characters:** For text data. CHAR (fixed length) and VARCHAR (variable length).
- **Integer:** For whole numbers, like, `1`, `2`, and `10`.
- **Decimal:** For exact numerical values with decimals, like, `1.1`, `2.01`, and `10.0`.
- **Floating Point:** For approximate numerical values with floating point precision.
  - **Caution:** Avoid using floating points due to their imprecision. Resort to them only when performance constraints make it essential.\_
- **Date, Time, and Datetime:** To store dates, times, or both.
- **Boolean:** Stores `true` or `false` values.

### Data types external resources

- {% external_link title="Why TRUE + TRUE = 2: Data Types" url="www.youtube.com/watch?v=6otW6OXjR8c" /%} {% badge %}Optional{% /badge %}
- {% external_link title="Floating Point Numbers - Computerphile" url="www.youtube.com/watch?v=PZRI1IfStY0" /%} {% badge %}Optional{% /badge %}

## `NULL`

`NULL` represents an undefined or missing value in a cell. It's distinct from zeroes or empty strings, indicating the absence of a value rather than a specific one.

### `NULL` external resources

- {% external_link title="What exactly is NULL?" url="www.youtube.com/watch?v=PksUUwvq-po" /%} {% badge %}Optional{% /badge %}
- {% external_link title="Why Null?" url="www.youtube.com/watch?v=957GIlc7QDg" /%} {% badge %}Optional{% /badge %}

## Constraints

Constraints are set on tables and define what can be put in columns.

Constraints can be a way of ensuring correct and valid data in your tables. However, it may come with a performance hit when inserting data. We will go over that in [Optimizing a relational database](/relational-databases-for-analysts/optimizing-a-relational-database).

Below is an example of a table with multiple constraints.

```sql
create table example_table (
    id serial primary key,
    foreign_id integer references other_table (id),
    unique_column varchar(255) unique,
    not_null_column varchar(255) not null,
    constrained_integer int check (constrained_integer between 1 and 100)
);
```

### Example of failing insert due to constraints

![Failing insert due to constraints](https://imagedelivery.net/8am9NHbT8J87BrE5c7SB0Q/5cec456d-1344-4f91-3eff-1ef238ee4600/HighQuality)

Read the insert statement and see if you can see why it fails. It has 4 contraint violations. {% badge %}Optional{% /badge %}

### Not NULL constraint

The `not NULL` constraint on a column ensures that a cell in that column cannot hold a `NULL` value.

**Example:** `not_null_column varchar(255) not null`

### Unique constraint

The `unique` constraint on a column ensures that all values in that column has to be unique.

**Example:** `unique_column varchar(255) unique,`

### Check constraint

The `check` constraint on a table ensures that an individual column or a set of columns adheres to some logic at the row level.

**Example:** `constrained_integer int check (constrained_integer between 1 and 100)` ensures that the column constrained_integer only has values between 1 and 100.

### Foreign key constraint

The foreign key constraint ensures that a value in one table's column corresponds to a value in another table's column. The primary use case is to maintains referential integrity by linking two tables together.

**Example:** `foreign_id integer references other_table(id),` ensures that each cell in the `foreign_id` column of one table corresponds to a in the `id` column of `other_table`.

## Keys

In the context of keys in a database or data management, we use an identifier to uniquely distinguish a column.

Examples are primary keys in a database table, business keys like product id and customer id, and transaction numbers.

### Primary key

A primary key is a column, or a set of columns, that uniquely identifies each row in a table.

Key characteristics of a primary key include:

- **Uniqueness:** Each value in the primary key column must be unique. No two rows can have the same primary key value.
- **Non-nullable:** A primary key column cannot have NULL values. Every row must have a value for the primary key.
- **Stability:** The value in a primary key column should not change.

Primary keys are fundamental in establishing relationships between tables in a relational database, as they provide a unique reference point for foreign keys in other tables.

### Foreign key

A foreign key is a column, or a set of columns, in one table that references the primary key of another table. The main purpose of a foreign key is to ensure referential integrity of the data. This means it creates a link between two tables.

Key characteristics of a foreign key include:

- **Reference to Primary Key:** A foreign key in one table points to a primary key in another table.
- **Ensuring Data Integrity:** It ensures that the value in the foreign key column matches one of the values in the table it points to, maintaining the validity of the data relationships.
- **Support for ´null´ Values:** Unlike primary keys, foreign keys can be null, indicating that the relationship is optional.
- **Cascading Actions:** Actions like update or delete in the primary key table can be set to cascade or restrict similar actions in the foreign key table.

Foreign keys enable the maintenance of relationships and data consistency across different tables in a relational database.

### Business keys

Business keys are specific types of keys in a database, used to represent and identify entities in a way that is meaningful within a business context. Unlike technical keys like primary keys or foreign keys, business keys have real-world significance and are often used in daily business operations.

Key characteristics of business keys include:

- **Real-World Meaning:** They typically correspond to identifiers used in business processes, like customer numbers, transaction numbers, or part numbers.
- **Uniqueness Within Context:** Business keys are unique within the context of a specific business process or domain.
- **Stability:** Ideally, they should remain constant over time. However, unlike primary keys, they may be subject to change based on business needs.
- **Human-Readable:** These keys are often designed to be easily understood and used by people, not just systems.
- **Usable across systems:** You may need to refer to the same customer in both your accounting system and your CRM system.

Business and primary keys are mentioned in Institute of Data Architecture's Architectural Recommendations: [#never-use-primary-keys-as-business-keys](/ioda-conventions/iodas-architectural-recommendations#never-use-primary-keys-as-business-keys).

### Smart keys

Smart keys, also known as intelligent keys, are a type of business key where the key's value itself carries meaningful information about the entity it represents. These keys are designed to be both unique identifiers and sources of specific data.

Key characteristics of smart keys include:

- **Embedded Information:** A smart key encodes data within its structure, such as the date of creation, type of entity, or geographic location.
- **Uniqueness:** Like other business keys, they are unique within their business context.
- **Readability:** The format is often readable and interpretable by humans, allowing immediate insight into some aspects of the data.
- **Complexity:** Due to their informative nature, they can be more complex than simple numeric or alphanumeric identifiers.

Examples:

- **Employee id:** An employee id like ´ENG-2023-001´ might indicate the department (ENG for engineering), the year of joining (2023), and a unique employee number (001).
- **Product Serial Number:** A serial number like ´TV-65US-202312´ could reveal the product type (TV), model (65US), and manufacturing date (2023).
- **Invoice Number:** An invoice number such as ´NY-INV-2023-0567´ might denote the location (NY for New York), type of document (INV for invoice), year (2023), and a sequential number (0567).

Smart keys are mentioned in Institute of Data Architecture's Architectural Recommendations: [#never-use-smart-keys](/ioda-conventions/iodas-architectural-recommendations#never-use-smart-keys).

## Indexes

Indexes in a relational database are special lookup tables that the database search engine can use to speed up data retrieval. They work similarly to indexes in books, allowing the database to find data without having to scan the entire table.

Key characteristics of indexes include:

- **Efficiency:** Indexes can drastically improve the speed of data retrieval, particularly in tables with large volumes of data.
- **Selective Use:** While they are efficient for read-heavy tables, they can slow down write operations (like INSERT, UPDATE, DELETE) because the index also needs to be updated.
- **Various Types:** Common types of indexes include B-tree (balanced tree), hash, and full-text, each optimized for different kinds of queries and data patterns.
- **Physical Storage:** Indexes are stored separately from the table data and require additional disk space.

The section [Optimizing a relational database](/relational-databases-for-analysts/optimizing-a-relational-database) will mostly focus on indexing.

## Database Normalization

Database normalization is a process used in designing and organizing database tables to minimize data redundancy and improve data integrity. The primary focus of normalization is to divide large tables into smaller, and less redundant tables and define relationships between them. This process is guided by a series of rules known as "normal forms.

### Database Normalization external resources

- {% external_link title="Learn Database Normalization - 1NF, 2NF, 3NF, 4NF, 5NF" url="www.youtube.com/watch?v=GFQaEYEc8_8" /%}

{% articlefooter %}
