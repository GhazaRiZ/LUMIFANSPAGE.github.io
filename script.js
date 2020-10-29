$(document).on('mouseover', '.container .column', function () {
  $(this).addClass('active').siblings().removeClass('active')
});













var modals = [];


modals.push({
  title: 'Welcome to Lumi FansPage!',
  text: 'This website requires desktop web resolution to experience its features',
  icon: "success",
});



// modals.push({
//   title: 'Checking your screen resolutions',
//   text: 'Please wait',
//   timer: 1300,
//   onOpen: function () {
//     swal.showLoading()
//   }
// });



swal.queue(modals);





// swal.queue(modals);

// modals.push({
//     title: "Are you sure?",
//     text: "You will not be able to recover this imaginary file!",
//     type: "warning",
// }).then(result) {
//    //     if ($(window).width() < 1080) {
//         alert('Sorry, but your screen resolution cant feel all the features, please use the Desktop Version!' +
//             ' Your resolution is ' +
//             window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio);
//     } else {
//         alert('Congratulations, you can experience all of its features now! ' + ' Your resolution is ' + window.screen
//             .width *
//             window.devicePixelRatio + "x" +
//             window.screen.height *
//             window.devicePixelRatio);
//     }
// };


















// alert('This website requires desktop web resolution to experience its features')
// alert('Checking the size of the screen resolution you are using . . . . . . . . . . . .')
// if ($(window).width() < 1080) {
//     alert('Sorry, but your screen resolution cant feel all the features, please use the Desktop Version!' +
//         ' Your resolution is ' +
//         window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio);
// } else {
//     alert('Congratulations, you can experience all of its features now! ' + ' Your resolution is ' + window.screen
//         .width *
//         window.devicePixelRatio + "x" +
//         window.screen.height *
//         window.devicePixelRatio);
// }



// if ($(window).width() > 1080) {

// }

// video card js



















// 	alert('Click "Get Resolution" to check the resolution of your Website')


// 	function getResolution() {
// 		alert("Your screen resolution is: " + window.screen.width * window.devicePixelRatio + "x" + window.screen.height *
// 			window.devicePixelRatio);


// 		}
// 	}
// 


button = document.querySelector('.button-games');

button.addEventListener('mouseup', function () {
  this.classList.add('active');
  setTimeout(function () {
    button.classList.remove('active');
  }, 300);
});