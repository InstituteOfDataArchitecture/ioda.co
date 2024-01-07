---
title: Creating dummy data
nextjs:
  metadata:
    title: Creating dummy data
    description: Using Python to create dummy data.
---

Using Python to create dummy data.

---

## How we will use the dummy data

All courses from the Institute of Data Architecture will rely on handson experience, to do your use dummy data.

The dummy data is created in a way so it will always be the same. Same data, same order, same structure, same values.

## The code that generate the dummy data

The code that generate the dummy data is located in the file below.

It is **not** a requirement to deeply understand the code. An {% badge %}Optional{% /badge %} task is to read through, or even play around with, the code and try to understand what it does.

{%
    githubfile
    githubName="InstituteOfDataArchitecture"
    repo="DevelopmentSetup"
    branch="main"
    filePath="courses/1-relational-databases-for-analysts/2-dummy-data/create_dummy_data.py"
    language="python"
/%}

## The code that generate the dummy data external resources

- {% external_link title="Generating Professional Sample Data with Faker in Python" url="www.youtube.com/watch?v=7M2Q5wrqC7I" /%} {% badge %}Optional{% /badge %}
- {% external_link title="Why Is random.seed() So Important In Python?" url="www.youtube.com/watch?v=7M2Q5wrqC7I" /%} {% badge %}Optional{% /badge %}

## Generate the dummy data in your development setup

Go to `courses/1-relational-databases-for-analysts/2-dummy-data/`

```bash
cd courses/1-relational-databases-for-analysts/2-dummy-data/
```

Execute `create_dummy_data.py`

_We have {% external_link title="setup the Codespace" url="github.com/InstituteOfDataArchitecture/DevelopmentSetup/blob/main/.devcontainer/Dockerfile#L18" /%} so typing `python` in front of a file will execute the file._

```bash
python create_dummy_data.py
```

It should take around 4 minutes to finish.

{% youtube videoId="_qDa6o4behU" /%}

### Generate the dummy data automatically when creating a codespace

Since we are using the dummy data for all of the following courses, we should streamline the process of creating the dummy data.

Right now we first create the codespace and when it is created we can run the Python command that create the dummy data.

To streamline the process we can ask codespaces to create the dummy data right after the codespace is created.

What we want is to run the following command after the codespace is created:

```sh
python courses/1-relational-databases-for-analysts/2-dummy-data/create_dummy_data.py
```

In the codespace creation scripts we have the following file that is executed everytime right after the codespace is created:

{%
    githubfile
    githubName="InstituteOfDataArchitecture"
    repo="DevelopmentSetup"
    branch="main"
    filePath=".devcontainer/01_create_dummy_data.zsh"
    language="sh"
/%}

As you can see, if `BUILD_DUMMY_DATA` = `TRUE` then the Python script is executed.

### Setting the BUILD_DUMMY_DATA env

In the terminal in your codespace run the command `env`. Now you'll see a list of all the environment variables on the system.

Note that `BUILD_DUMMY_DATA` is **not** set.

![ENV result before BUILD_DUMMY_DATA](https://imagedelivery.net/8am9NHbT8J87BrE5c7SB0Q/3e0dc7cc-5c72-4172-5950-6c50d6d99900/HighQuality)

To set an env on your codespace do the following: Settings -> Secrets and variables -> Codespaces -> New repository secret

_**Note.** the codespace name for env is secret._

![New codespace secret](https://imagedelivery.net/8am9NHbT8J87BrE5c7SB0Q/6552bcf4-5291-4a53-759b-9fc5867b5300/HighQuality)

- **Name:** BUILD_DUMMY_DATA
- **Secret:** TRUE

![Set env on codespace](https://imagedelivery.net/8am9NHbT8J87BrE5c7SB0Q/f6e709cb-0e5c-4082-7a62-71c75c5eba00/HighQuality)

After it is set you need to recreate or rebuild your codespace.

_**Note.** recreating or rebuilding a codespace means that everything that is not committet and pushed to GitHub will be deleted._

{% youtube videoId="foUkVWxODyA" /%}

![BUILD_DUMMY_DATA=TRUE](https://imagedelivery.net/8am9NHbT8J87BrE5c7SB0Q/c0d50c8a-573f-41a5-c96f-e47ecfed1600/HighQuality)

## Using SQLTools

{% external_link title="SQLTools" url="marketplace.visualstudio.com/items?itemName=mtxr.sqltools" /%} is a VSCode extension that makes it easy to connect to a database and execute SQL queries.

We have already {% external_link title="installed" url="github.com/InstituteOfDataArchitecture/DevelopmentSetup/blob/main/.devcontainer/devcontainer.json#L11-L12" /%} SQLTools in the DevelopmentSetup and {% external_link title="set it up" url="github.com/InstituteOfDataArchitecture/DevelopmentSetup/blob/main/.vscode/settings.json#L8-L19" /%} to connect to the local installation of Postgres.

{% youtube videoId="9Dtas7wtcQs" /%}

## Testing the dummy data

Number of rows: 446468

```sql
select count(*)
from sales
where
    created_at between '2023-01-01' and '2023-12-31'
    and total_price >= 500;
```

Size of table: 1832 MB

```sql
select pg_size_pretty(pg_total_relation_size('sales'));
```

{% articlefooter %}
