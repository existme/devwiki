#Functions

##Anonymous functions
Anonymous functions are the syntactic sugars of languages.

###Definition Samples
~~~scala
(x:Int) => x*x*x
(x:Int, y:Int) => x+y
~~~

<note></note> The type of the parameter can be ommited if it can be inferred
    by the compiler from the context.
    
##Higher Order functions

###Definition Samples
~~~scala
def sum(f: Int => Int, a:Int, b:Int): Int = 
    if (a>b) 0 else f(a) + sum(f,a+1,b)
~~~
or write in the **currying** form:
>Currying is when you break down a function that takes multiple arguments into a series of functions that take part of the arguments

~~~scala
def sum(f: Int => Int)(a:Int, b:Int): Int = 
    if (a>b) 0 else f(a) + sum(f)(a+1,b)

def cube(x: Int) = x*x*x
sum(cube)(2,2)
~~~
or even sum could be defined in a way that returns a function
~~~scala
def sum(f: Int => Int): (Int,Int)=> Int = {
    def sumF(a:Int,b:Int):Int=
      if (a > b) 0 else f(a) + sumF(a + 1, b)
    sumF
}
def cube(x: Int) = x*x*x
sum(cube)(2,2)
~~~

To write some in the tail recursive form:

~~~scala
def sum(f: Int=>Int)(a:Int,b:Int) = {
    def loop(a:Int, acc:Int):Int =
      if(a>b) acc
      else loop(a+1,f(a)+acc)
  
    loop(a,0)
}
sum(x=>x*x)(3,5)
~~~

If we want to combine different aspects of how to write higher order functions,
we can write:
~~~scala
def mapReduced(f: Int=>Int, combine:(Int,Int)=>Int,zero:Int)(a:Int,b:Int):Int=
    if(a>b) zero
    else combine(f(a),mapReduced(f,combine,zero)(a+1,b))

def product(f:Int=>Int)(a:Int,b:Int):Int = mapReduced(f,(x,y)=>x*y,1)(a,b)

def sum(f:Int=>Int)(a:Int,b:Int):Int = mapReduced(f,(x,y)=>x+y,0)(a,b)

def fact(n:Int) = product(x=>x)(1,n)
def sum2(n:Int) = sum(x=>x*x)(1,n)

fact(5) //120
sum2(3) //14
~~~
