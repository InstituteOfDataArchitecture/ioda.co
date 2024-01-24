---
title: Training
nextjs:
  metadata:
    title: Training
    description: Training and self assessment for Relational databases for analysts
---

Training and self assessment for Relational databases for analysts

---

## How training and self assessment works

1. Start a new codespace.
1. Close and reopen the codespace.
   - To see that an already created codespace is much faster to open.
1. Open the terminal.
1. Execute `whoami`.
1. The `courses` and the `work` folder.
   - The `courses` folder contains the training material and **will** be changed by Ioda.
   - The `work` folder contains your work and **will NOT** be changed by Ioda.
1. Create the folders `1-relational-databases-for-analysts/1-test-the-setup/1-test-python` in the `work` folder.
1. Create, execute, and read results for `python_logging.py`.
1. The `answers.txt` file.
1. The `evaluate_answers.py` file.
   - python `/workspace/courses/evaluate_answers.py`
1. Commit and push your answers.
1. Open SQLTools and find the `sales` table.
1. Delete and start a new codespace.

```bash
python /workspace/courses/evaluate_answers.py
```

_About git and branching. If you are familiar with git, we encourage you to use branched and PRs when working on the answers. However, **if you are new to git, it is fine just to commit everything to the `main` branch**._

## 1. Relational databases for analysts

### 1.1 Developer tools

#### 1.1.1 What is the result of whoami?

Type `whoami` in the terminal and hit enter.

The answer is what the terminal returns.

{%
  training
  title="1.1.1 What is the result of whoami?"
  course="relational-databases-for-analysts"
  lesson="developer-tools"
  links_to="content"
/%}

#### 1.1.2 What is the number in the terminal?

After executing the Python code in the Test Python section, what is the number in the terminal?

{%
  training
  title="1.1.2 What is the number in the terminal?"
  course="relational-databases-for-analysts"
  lesson="developer-tools"
  links_to="content"
/%}

#### 1.1.3 What is the number in the logfile?

After executing the Python code in the Test Python section, what is the number in the logfile?

{%
  training
  title="1.1.3 What is the number in the logfile?"
  course="relational-databases-for-analysts"
  lesson="developer-tools"
  links_to="content"
/%}

#### 1.1.4 What are the value of total_population?

After executing the SQL code in the Test Postgres section, what is the number in the total_population?

{%
  training
  title="1.1.4 What are the value of total_population?"
  course="relational-databases-for-analysts"
  lesson="developer-tools"
  links_to="content"
/%}

### 1.2 Creating dummy data

### 1.3 SQL deep dive

### 1.4 Optimizing a relational database

### 1.5 Common data architectures

{% articlefooter %}
