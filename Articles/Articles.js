const myLink = document.querySelectorAll(".back-arrow");
const favicon = document.querySelector('.favicon');
const banner = document.querySelector('.banner');
const heroHead = document.querySelector(".hero-head");
const heroText = document.querySelector('.hero-text');
const footerImg = document.querySelector('.img-logo2');
const footerText = document.querySelector('.footer-link');




for (link of myLink){
link.href = "https://chiskeed.github.io/Canadian-Gateway/";
}
favicon.href = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Kzc3Nzc3Ny03Nzc1Nzc3Nzc3Nzc3NzU3NzU3MS03NTU4NTcyLP/AABEIABwAHAMBEQACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAFBgMEBwL/xAAqEAACAQIFAwMEAwAAAAAAAAABAgMEEQAFEiExBkFREyJxgaHB0WFikf/EABoBAAIDAQEAAAAAAAAAAAAAAAIEAQMFBgD/xAAnEQABBAEDAwMFAAAAAAAAAAABAAIDERIEITFBcYETMlEFItHh8P/aAAwDAQACEQMRAD8AxaGlqJ2ZIYJHdU9RlVTcLtv8bj/cetSATwnHLaCko4jJRq7pURqW9YhiUIvpNgNjfcfrCz5DdLb0uiYY8+cggGc5SlM4FDFUuqRepMz2YICSBuAPBxex+QtZmog9J+A3pCGRlCllYBhdSRyPIwaXWiUMoqctp2hqzOqxojOCR7gOCL7HbvzzhKSw4rp9AI5IG0QSOVbaL1IYSq+4goQO5B/NxgXG6KYgjDcmdBv4P7tdVcZSfRAT7LKCt7k2AJ+drY8Xb0oj04Mebh7tz/dkl9UvDNmSg1uto4gjBV1aTckjVffn6Xt2w3HYaua1hY6YlpsJly7I6KnqFr8qnkVWjJMLSeyRSuw41AXsdw3GKDI4jF4WuzRwMc2bTSeDYvzSgl6jbLp6imr6A00kcZlhDSaxI/C2IAGk+f6223wTYgQCCqpvqMrXvbIzE0QrcTVGeZW7VEEmXxT2IkE2qR15O2kWBHcn+bEYABsbttymHSza6ENkpjfn57Dqh02V9MUJENUxD2uDNI9yPPtsCNjxgs5nbgKo6b6XF9sjzfY/hLEGdZnTqqx105RAAqu2tVA4ABuBhgtB5CxWzSN9rinLpucdSUJfNYIJHpJ19IhLbkE3Pb6cGwuDbA41wrfVdKBnvSWsx6ozWpqJLTLCLkWjXf5ubn74kMahdqpXdUHqaieqkElVPLM4FtUjljbxc4KqVJJcbK//2Q==";
banner.textContent = 'Canadian Gateway High School';
banner.style.backgroundColor = '#273272';
banner.style.color = '#FF0000';
heroHead.textContent = 'Welcome to Canadian Gateway High School';
heroText.textContent = 'Gateway to Success';
footerImg.src = 'https://canadianghs.com/wp-content/uploads/2020/12/cropped-cropped-logo-canadaian2.png';
//footerText.textContent = 'Gentle Touch Schools';
