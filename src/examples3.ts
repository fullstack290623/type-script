async function fetchData(): Promise<any[]> {
    console.log("Fetching...");
    const response = await fetch("https://jsonplaceholder.org/posts");
    const data = await response.json();
    return data;
  }

//fetchData().then(data => console.log(data.slice(2, 3)));

(async() => {
    const res: any[] = await fetchData();
    console.log(res.slice(2, 3));
    

})()
const res3: any = fetchData();
console.log(res3);