 document.getElementById("drawButton").addEventListener("click", function() {
     let numbers = [];
     while (numbers.length < 5) {
         let num = Math.floor(Math.random() * 25) + 1;
         if (!numbers.includes(num)) {
             numbers.push(num);
         }
     }

     Swal.fire({
         title: "🎉 당번 선정 완료!",
         text: "오늘의 당번: " + numbers.join(", "),
         icon: "success",
         confirmButtonText: "확인",
         confirmButtonColor: "#3085d6"
     });
 });
