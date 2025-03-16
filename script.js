const valueOfX = document.getElementById("ValueofX");
const valueOfY = document.getElementById("ValueofY");
const btn = document.getElementById("btn");


let targetX = Math.floor(Math.random() * window.innerWidth);
let targetY = Math.floor(Math.random() * window.innerHeight);


window.addEventListener("mousemove", (event) => {
  valueOfX.textContent = event.clientX;
  valueOfY.textContent = event.clientY;
});


  Swal.fire({
    title: '🎯 Target Position',
    html: `<b>X:</b> ${targetX} <br> <b>Y:</b> ${targetY}`,
    icon: 'info',
    confirmButtonText: 'Got it!',
    timer: 3000,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });


window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const currentX = parseInt(valueOfX.textContent);
    const currentY = parseInt(valueOfY.textContent);

    const tolerance = 20;

    if (
      Math.abs(currentX - targetX) <= tolerance &&
      Math.abs(currentY - targetY) <= tolerance
    ) {
      Swal.fire({
        title: '🎉 Success!',
        text: 'You nailed the position! 🥳',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        background: '#e6ffed',
        color: '#2d6a4f'
      });
    } else {
      Swal.fire({
        title: '❌ Wrong Position!',
        text: 'Try again carefully.',
        icon: 'error',
        timer: 1500,
        showConfirmButton: false,
        background: '#ffebee',
        color: '#b71c1c'
      });
    }
  }
});
