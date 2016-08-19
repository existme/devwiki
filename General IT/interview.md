
# <span class='no-print'>Interview questions</span>

## <span class='no-print'>Interview questions for senior Java developer</span>

### General

- What experience do you have in this integeration field? (ldap/oath?)

- Could you please tell us about your experience in Java development and middleware.

- What are the most 2 positive and negative things that your coworkers say about you?

- What challenges are you looking for this position?

### Rest
- What framework you had used to develop RESTFul services? 
    (Jeresy, Apache CFX) 
  
- If you have to develop web services which one you will choose SOAP OR RESTful and why?

### JEE
- Benefits of Using Spring Framework?
    - Spring is Lightweight container
    - No App Server Dependent – like EJB JNDI Calls
    - Objects are created Lazily , Singleton - configuration
    - Components can added Declaratively
    - Initialization of properties is easy – no need to read from properties file
    - Declarative transaction, security and logging service - AOP

- What is shallow cloning and deep cloning?
    - **shallow**: object is copied without its contained objects. Shallow clone only copies the top level structure of the object not the lower levels. It is an exact bit copy of all the attributes.
    - **deep**:  Deep clone copies all the levels of the object from top to the bottom recursively.
    
- What's the difference between EJB annotation and Inject?
    - @Inject can inject any bean, while @EJB can only inject EJBs. You can use either to inject EJBs, but I'd prefer @Inject everywhere.
    - @EJB allows circular injection whereas @Inject doesn't
    - In more advanced cases (e.g. when you heavily depend on @EJB's attributes like beanName, lookup or beanInterface) than in order to use @Inject you would need to define a @Producer field or method.

- What is JMS in Java?
    - Java Message Service (JMS) is used for creating the communication interface between two clients by using the message passing services. This helps the application to interact with other components irrespective of components location whether they rely on same system or connect to the main system through LAN or internet.

- What are new features introduced with Java 8 ?
  - Ans. Lambda Expressions , Interface Default and Static Methods , Method Reference , Parameters Name , Optional , Streams, Concurrency.

### Design

- Which Design Patterns have You Used in Your Java Project
    Explain how you used it with proper example and why you choose a particular pattern?

- Which UML diagrams you usually use for design ?
    - Ans. Use Case Diagram, Component Diagram for High level Design and Class Diagram , Sequence Diagram for low level design.

- ( Decorator, Dependency Injection Pattern, builder, factory, flyway )
    

### Application Server
-  Which web application framework you like and Why ?
    - Ans. I like Spring as it comes with inbuilt Dependency Injection framework. It has great online community and support and is proven to work well with ORMs like Hibernate. If we are not working with ORM and DI, Struts 2 is also good.

- Which application servers have you used for java-ee development and why? (wildfly, glassfish)
 
### Build Tool
- How would you configure an environment to maximize productivity of a development team?
  - Every developer should have a personal environment capable of executing the whole application
   in his/her local workstation. The project should be synchronized between developers using a 
   version control system. Integration routines must be executed periodically in order to verify 
   the compatibility and communication between all components of the system. 
   Unit and integration tests must be executed frequently.
- What build tool do you use gradle/maven? why?

- What is the best practice configuration usage for files in Maven - pom.xml or settings.xml ?  
  - Ans. The best practice guideline between settings.xml and pom.xml is that configurations in settings.xml must be specific to the current user and that pom.xml configurations are specific to the project.

### Java Test
- What is your experiece toward testing web applications and particulary backend?

- What testing frameworks have you used for automated testing? (arquillian, mockito, junit, powermock)

- Generally what aspects of the application do you test? How do you write your unit tests?

- How do you solve the problems with mocking objects?