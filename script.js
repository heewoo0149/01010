 const buildings = [
     { country: "프랑스", name: "에펠탑", image: " https://i.namu.wiki/i/LFRIiqAJzEUKx0dbsftnohx78BLrGv9qznkKtCUTyephVHhu9gYo3pRs_7YyBnDNBo_6ttVnBw1AZ5KZgbH6tw.webp" },
     { country: "미국", name: "엠파이어 스테이트 빌딩", image: "https://tourimage.interpark.com//Spot/317/22787/202002/6371651876541833830.jpg" },
     { country: "이탈리아", name: "피사의 사탑", image: "https://i.namu.wiki/i/lI83jn5gj17g3OSAw5Rd40APO5pRIEBdOPUWjGWKGz-smrWqBMo74_VK33RkJUj6qsdxqJUE77Jb_8SSfFSzfQ.webp" },
     { country: "중국", name: "상하이 타워", image: "https://korean.shanghai.gov.cn/cmsres/73/73f471b199284c38b313d9b1ff0b5b5c/2382c315a6ba396be1932dd8dafaff52.png" },
     { country: "아랍에미리트", name: "부르즈 할리파", image: "https://i.namu.wiki/i/x1ZZNOc0tGfwwrlHgPjckDRN68JjdnlTzVMGZLc_8vwY_6XN7EKN1i1iJMu2TNxafFfPrqm5t8hMgl31bj3C0Q.webp" },
     { country: "스페인", name: "사그라다 파밀리아", image: "https://i.namu.wiki/i/j67-iKR3Hx769TT9hdBzLHwM0z5Ng2C-irZQfJbcO-bCZWFgVc08JQpEQzPJLa-mBhOz7d0GphRz5vLjxl3PYA.webp" },
     { country: "러시아", name: "크렘린 궁전", image: "https://i.namu.wiki/i/TzN7o2IQpfC5A3IfMcWNRdO9zKpBDvscwEOSrz1RO2wzwLmmHjqbdPp9hJdQHjJgp1-e8P16onionBozNj09HQ.webp" },
     { country: "일본", name: "도쿄 타워", image: "https://i.namu.wiki/i/YhfsSIpv2-kUxHuAKT7IjczYH2zr_H6IxzY-tkzvCWhbXev808r4NHrbf4s9GYhK_psYStWm9FjMfjLQxkW0PQ.webp" },
     { country: "독일", name: "브란덴부르크 문", image: "https://i.namu.wiki/i/RRJEd9xecIAgYhRVVCeUaME1_KcijP9MSgGrHWZYTiXadSVE-LOnLaPesUmigwNff3ToA5trUsNlRKQy1Cd-gA.webp" },
     { country: "인도", name: "타지마할", image: "https://dimg.donga.com/wps/NEWS/IMAGE/2015/10/01/73940079.3.jpg" }
 ];

 document.getElementById("random-btn").addEventListener("click", function () {
     const randomIndex = Math.floor(Math.random() * buildings.length);
     const building = buildings[randomIndex];

     // 부드러운 변경 효과 추가
     const imageElement = document.getElementById("building-image");
     imageElement.style.opacity = "0"; // 투명하게 만든 후 변경
     setTimeout(() => {
         document.getElementById("building-name").textContent = `${building.country} - ${building.name}`;
         imageElement.src = building.image;
         imageElement.alt = building.name;
         imageElement.style.opacity = "1"; // 다시 보이게 함
     }, 300);
 });
