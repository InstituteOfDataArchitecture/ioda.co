---
title: Architectural Recommendations
nextjs:
  metadata:
    title: Architectural Recommendations
    description: Institute of Data Architecture's Architectural Recommendations.
---

Institute of Data Architecture's Architectural Recommendations.

---

## Never use smart keys

**Institute of Data Architecture** recommends that you **never** use smart keys.

Since smart keys are used as business keys, and business keys are used across systems, you will experience significant impact on business operation when you need to change a smart key, and you will have to change smart key.

**Changing smart keys:** Business logic change and mistakes are made.

Consider the example employee id: ´ENG-2023-001´.

For instance, ´ENG´ represents the engineering department. However, an employee may move to a different department.

The ´2023´ indicates the year of joining. However, mergers and acquisitions could alter this meaning, or the year itself might be incorrect.

The ´001´ is a zero-padded unique employee number. As the company grows, it could exceed 999 employees in the same department within a single year.

**Changing smart keys:** Impact on business operation.

The employee id can be used in multiple HR systems, payroll systems, ticketing systems, approval flows, and so forth.

If an employee id changes, the business must update **every** system or have systems that are no longer working togeather.

## Never use primary keys as business keys

It is recommended not to use the databases primary key as a business key.

Primary keys are subject to change at the discretion of database developers, and business keys may change based on business needs.

If primary keys are used as business keys they becomes tightly coupled with business operation, meaning, they cannot be changed without severe impact to business operation.
