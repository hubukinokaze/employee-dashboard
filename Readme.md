[![Build Status](https://travis-ci.org/akveo/ng2-smart-table.svg?branch=master)](https://travis-ci.org/akveo/ng2-smart-table)

# Employee Dashboard

Angular table component forked from [Akveo Team](https://github.com/akveo/ng2-smart-table) and modified by Jun Kawa.
This project uses Angular 2 as the front-end and Spring Boot as back-end.
You will be able to perform CRUD operations to update employees displayed on the table.

## Features
- Flexible Table
- Perform CRUD operations

## Installation

### What you'll need
- Angular 5.0.0
- Spring Boot 1.5.4
- MySQL
- Java 8 (1.8)
- Maven 3.5.2

### Setting up

- Clone this project
```
git clone https://github.com/hubukinokaze/employee-dashboard.git employee-dashboard
```
- Install dependencies
```
mvn clean install
```
or
```
mvn clean package
```

- Run your local MySQL database using something like [MAMP](https://www.mamp.info/en/)
- Run project
```
mvn spring-boot:run
```

- Access page at [http://localhost:8080](http://localhost:8080)

### Deploy WAR with Tomcat
- Download Tomcat
- Package your application into WAR
```
mvn clean package
```
- Move WAR file from target folder to Tomcat's webapps folder
- Rename it to ROOT.war for it to be accessible from the root page
- Go to Tomcat's bin folder and open up 'startup.bat'
- Access page at [http://localhost:8080](http://localhost:8080)

## License
[MIT](LICENSE.txt) license.

