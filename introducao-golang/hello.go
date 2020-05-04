package main

import "fmt"

var a int

const PI = 3.14

func main() {
	a = 22
	b := 40
	c := "Hello"
	d := 10.33
	e := false
	f := 'A'
	g := `
	fjskdjfds
	fkdsjfksdjf
	dkfskdjfs
	`

	// Imprime valores
	fmt.Printf("Hello, World!\n")
	fmt.Printf("%v \n", a)
	fmt.Printf("%v \n", b)
	fmt.Printf("%v \n", c)
	fmt.Printf("%v \n", d)
	fmt.Printf("%v \n", e)
	fmt.Printf("%v \n", f)
	fmt.Printf("%v \n", g)
	fmt.Printf("%v \n", PI)

	// Imprime tipos
	fmt.Printf("%T \n", a)  // int
	fmt.Printf("%T \n", b)  // int
	fmt.Printf("%T \n", c)  // string
	fmt.Printf("%T \n", d)  // float64
	fmt.Printf("%T \n", e)  // bool
	fmt.Printf("%T \n", f)  // int32
	fmt.Printf("%T \n", g)  // string
	fmt.Printf("%T \n", PI) // float64
}
