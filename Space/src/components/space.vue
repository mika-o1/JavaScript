<template>
    <div class="space">
        <img class="ship" src="../assets/ship.png" alt="">
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "Space",
    mounted() {
        var posX = null;
        // var posY = null;
        window.addEventListener('keydown', function(event) {
            if(event.keyCode == 65) {
                posX -= 5;
                $('.ship').css('left', posX)
                console.log(posX)
            } else if(event.keyCode == 68) {
                posX += 5;
                $('.ship').css('left', posX)
                console.log(posX)
            } else if(event.keyCode == 83) {
                posX -= 5;
                $('.ship').css('bottom', posX)
                console.log(posX)
            }
            else if(event.keyCode == 87) {
                posX += 5;
                $('.ship').css('bottom', posX)
                console.log(posX)
            }
        });
    }
}
</script>