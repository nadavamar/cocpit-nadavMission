async function fun1() {
  console.log("fun1 starts");

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  console.log("fun1 ends");
}

console.log(1);

fun1();

console.log(2);
