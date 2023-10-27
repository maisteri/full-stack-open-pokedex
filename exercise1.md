Project language is Python.

Python has multiple linters. Flake8 and Pylama are Python tools that packages multiple linters together. These linters include Pylint, PyFlakes, pycodestyle, Mccabe, Pylint and others. Python testing tools include PyUnit, PyTest and Robot Framework. Python code doens’t require a “building step” as code is deployed as it is.

Alternatives to setup CI include Travis CI, TeamCity, CircleCI, Bamboo, Buddy, Azure DevOps Server, Gitlab, Codeship, GoCD and many more.

I would choose cloud based solution for this hypothetical setup. Reading the chapter “Introduction to CI/CD”, cloud setup seems like a simpler choise with less time spent on configuring the setup. Team is only 6 people so configuring Jenkings or similar might not be worth the effort. I could lean towards self-hosted setup if e.g. the customer who the project is for would not allow using public cloud solutions. Second reason I could lean towards self-hosted setup is that if I knew that cloud-based solution like Github Acrtions would be missing some key features that would be required in the CI/CD pipeline of the project. Third reason I might lean towards jenkins is that if most the team members knew how to configure Jenkins and how to use it then configuring and using it would probably be quite smooth and painfree.
