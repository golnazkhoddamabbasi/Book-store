let books = [
    {
      name: "The Middlemarch",
      number: 21,
      amount: "12",
      due: "2012/01/12",
    },
    {
      name: "Nineteen Eighty-Four",
      number: 22,
      amount: "23",
      due: "2001/12/22",
    },
    {
      name: "The Lord of the Rings",
      number: 23,
      amount: "14",
      due: "1998/08/03",
    },
    {
      name:"His Dark Materials",
      number: 24,
      amount: "22",
      due: "2020/01/12",
    },
    {
      name: "Wuthering Heights",
      number: 25,
      amount: "10",
      due: "1991/02/14",
    },
  ];
  
  export const getBooks=()=>{
    return books
  }
  export const getBook=(number)=>{
  return books.find(book => book.number === number)
  }
  export const deletBook=(number)=>{
  books= books.filter((book)=>book.number !== number )
  }