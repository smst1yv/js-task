
//1.

// function sumArrayElements(array) {
//     let number1 = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (typeof array[i] === 'number') {
//         number1 += array[i];
//       }
//     }
//     return number1;
//   }
  

//   let array = [23, 45, 22, 36, -45, 84];
//   let number1 = sumArrayElements(array);
//   console.log(number1);
  




   //3
    //  function countElements(array){
    //     var step1 = 0;
    //     var step2 = 0;
        
    //     for (var i=0; i < array.length; i++){
    //         if(array[i] %2 === 0){
    //             step2++;
    //         }else{
    //             step1++
    //         }
    //     }
    //     console.log("Cut:" + step2 + " , Tek:" + step1)
    //  }

    //  var myArray = [1, 5, 20, 32, 54, 79, 82, 91, 564, 351];
    //  countElements(myArray);




//4

// var array1 = ['Tofiq', 'Ruslan', 'Səma', 3, null, 'Məhəmməd', {'type': "user"}, [1, 2, 3]]
//  for (var a in array1){
//         // console.log(typeof a);
//     if (typeof array1[a] === "string"){
//         console.log(array1[a])
//     }
//  }



//5

// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
//  ].forEach(function(element){
//     console.log(element.title)
//  })


//6


// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
// ].forEach(function(element){
//         if (element.readingStatus == true){
//             console.log(element.title)
//         }
//     })


//6
 
// function countElementsBySimilar(array) {
//     let counts = {};
//     for (let i = 0; i < array.length; i++) {
//       let element = array[i];
//       if (counts[element] === undefined) {
//         counts[element] = 1;
//       } else {
//         counts[element]++;
//       }
//     }
//     return counts;
//   }

//   let array = [1, 1, 5, 'Mahammad', 'Mahammad', null, null, null, undefined, undefined, 4, 5, 5, 4];
// let counts = countElementsBySimilar(array);
// console.log(counts);

  


