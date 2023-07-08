import { test as myTest } from "@playwright/test";
// type aymen = {
//     age: number,
//     email: string
// }

const myFixtureTest = myTest.extend<{
    age: number,
    email: string
}>({
    age: 37,
    email:"aymen@gmail.com"
})

export const test = myFixtureTest;