/*document.getElementById('anime__img').addEventListener('click',function(){
  //拡大縮小
  anime({
    targets: '#anime__img',
    scale:0.8
  });
});
*/

function animation(ele){
  anime({
    targets: ele,
    scale:0.8,
    direction: 'alternate'
  });
};
