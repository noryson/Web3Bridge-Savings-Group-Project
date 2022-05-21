$(document).ready(function(){
        function preloaderFadeOutInit(){
        setTimeout(
          function()
          {
            $('.preloader').fadeOut(400);
            $('body').attr('id','');

            $('.hero__contentBody').animate({bottom: '0px'}, 1000);
            $('.hero__contentFooter').animate({bottom: '0px'}, 1400);
            $('.hero__linkSocial').animate({bottom: '0px'}, 1300);
          }, 2000);
        }
        // Window load function
        jQuery(window).on('load', function () {
            (function ($) {
                preloaderFadeOutInit();
            })(jQuery);
        });

        $(".projects__box").mouseenter(function(element){
            $(this).children(".projects__overlay").fadeIn();
            $(this).children(".projects__boxItem").addClass("projects__boxImageTransform");

            $(this).find(".projects__linkHeader").removeClass("projects__linkHeaderTransformOut");
            $(this).find(".projects__linkHeader").addClass("projects__linkHeaderTransformIn");

            $(this).find(".projects__linkBody").removeClass("projects__linkBodyTransformOut");
            $(this).find(".projects__linkBody").addClass("projects__linkBodyTransformIn");
        });

        $(".projects__box").mouseleave(function(element){
            $(this).children(".projects__overlay").fadeOut();
            $(this).children(".projects__boxItem").removeClass("projects__boxImageTransform");

            $(this).find(".projects__linkHeader").addClass("projects__linkHeaderTransformOut");
            $(this).find(".projects__linkHeader").removeClass("projects__linkHeaderTransformIn");

            $(this).find(".projects__linkBody").addClass("projects__linkBodyTransformOut");
            $(this).find(".projects__linkBody").removeClass("projects__linkBodyTransformIn");
        });



        /* ====================================================================
         * Project Carousel
         *
         *--------------------------------------------------------------------- */

         var images = new Array();
         var currentIndex = 0;
         var scale = 1.0;

         $(".projectCarousel__open").click(function(){
            startIndex = parseInt($(this)[0].getAttribute("datasrc"));
            openCarousel(startIndex);
            $(".projectCarousel").toggle();
         });

         $(".projectCarousel__close").click(function(){
            closeCarousel();
            $(".projectCarousel").toggle();
         });

         $(".projectCarousel__rightArrow").click(function(){
            nextImage();
         });

         $(".projectCarousel__leftArrow").click(function(){
            previousImage();
         });

         $(".projectCarousel__footerMenuBoxToggle").click(function(){
            $(".projectCarousel__footer").toggleClass("projectCarousel__footerOpened");
         });

         $(".projectCarousel__toolbarZoomIn").click(function(){
                scale += 0.1
                $(".projectCarousel__image").css("transform", `scale(${scale})`);
         });

         $(".projectCarousel__toolbarZoomOut").click(function(){
                if(scale > 1)
                    scale -= 0.1
                $(".projectCarousel__image").css("transform", `scale(${scale})`);
         });

         $(".projectCarousel__toolbarFullscreen").click(function(){
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    document.documentElement.requestFullscreen();
                }
         });

         $(".projectCarousel__toolbarPlay").click(function(){
                play();
                $(this).hide();
                $(".projectCarousel__toolbarPause").show();
         });

         $(".projectCarousel__toolbarPause").click(function(){
                pause();
                $(this).hide();
                $(".projectCarousel__toolbarPlay").show();
         });

         $(".projectCarousel__toolbarDownload").click(function(){
              var filename = images[currentIndex];
              var text = images[currentIndex];
              var element = document.createElement('a');
              element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
              element.setAttribute('download', filename);
              element.style.display = 'none';
              document.body.appendChild(element);

              element.click();
              document.body.removeChild(element);
         });

         $(".projectCarousel").mousemove(function(event){
            event.stopImmediatePropagation();
            $(".projectCarousel__header").fadeIn();
            $(".projectCarousel__leftArrow").fadeIn();
            $(".projectCarousel__rightArrow").fadeIn();
            $(".projectCarousel__footer").fadeIn();

            setTimeout(function(){
                $(".projectCarousel__header").fadeOut();
                $(".projectCarousel__leftArrow").fadeOut();
                $(".projectCarousel__rightArrow").fadeOut();
                $(".projectCarousel__footer").fadeOut();
            }, 5000);
         });

         function openCarousel(index){
            var newBox = ($(".projectCarousel__footerMenuBox")[0]).cloneNode(true);
            $(".projectCarousel__footerMenuBox").remove();

            for(i=0; i<$(".projects__boxItem").length; i++){
                images[i] = $(".projects__boxItem")[i].src;
                $(newBox).find(".projectCarousel__footerMenuBoxImage")[0].src = images[i];
                $(newBox)[0].datasrc = i;
                $(newBox).show();
                $(".projectCarousel__footerMenu").append(newBox);
                newBox = ($(".projectCarousel__footerMenuBox")[0]).cloneNode(true);
            }
            selectImage(index);

             $(".projectCarousel__footerMenuBox").click(function(){
                var newIndex = $(this)[0].datasrc;
                selectImage(newIndex, newIndex > currentIndex? "right": "left");
             });

             $(".projectCarousel").mouseenter();
         }

         function closeCarousel(){
            $(".projectCarousel__imageBox").hide();
            $(".projectCarousel__toolbarPause").click();
         }

         function previousImage(){
            if(currentIndex - 1 == -1){
                currentIndex = images.length - 1;
            }
            else{
                currentIndex--;
            }
            selectImage(currentIndex, "left");
         }

         function nextImage(){
            if(currentIndex + 1 == images.length){
                currentIndex = 0;
            }
            else{
                currentIndex++;
            }
            selectImage(currentIndex, "right");
         }

         function selectImage(index, direction){
            if(index >= images.length || index < 0)
                return;

            if(direction == "right"){
                var dirValue1 = "-100%";
                var dirValue2 = "100%";
            }
            else{
                var dirValue1 = "100%";
                var dirValue2 = "-100%";
            }

            if($(".projectCarousel__imageBox").length > 1)
                $(".projectCarousel__imageBox")[0].remove();

            var current = $(".projectCarousel__imageBox")[0];
            var next = current.cloneNode(true);

            $(next).find(".projectCarousel__image")[0].src = images[index];
            $(next).removeAttr('style');
            $(next).css({right: dirValue1, left: dirValue2});
            $(next).show();
            $(".projectCarousel").append(next);

            $(current).animate({right: dirValue2, left: dirValue1});
            $(next).animate({right: "0%", left: "0%"});

            currentIndex = index;
            updateLabels();
            $(".projectCarousel__footerMenuBox").removeClass("projectCarousel__footerMenuBoxSelected");
            $($(".projectCarousel__footerMenuBox")[index]).addClass("projectCarousel__footerMenuBoxSelected");
         }

         function updateLabels(){
            $(".projectCarousel__projectNumber")[0].innerHTML = `${currentIndex + 1} / ${images.length}`

            $(".projectCarousel__footerDetailsHeader")[0].innerHTML =
                        $(".projects__linkHeaderText")[currentIndex * 2 + 1].innerHTML;

            $(".projectCarousel__footerDetailsBody")[0].innerHTML =
                        $(".projects__description")[currentIndex].innerHTML;

            $(".projectCarousel__footerDetailsLink")[0].href =
                        $(".projects__description")[currentIndex].href;
         }

         var timer, width;
         function play(){
            moveProgressBar();
            timer = setInterval(nextAndMove, 6000);
         }

         function pause(){
            clearInterval(timer);
            $("#progress").hide();
            width = 100;
         }

         function nextAndMove(){
            nextImage();
            moveProgressBar();
         }

         async function moveProgressBar() {
            var elem = document.getElementById("progressBar");
            elem.style.width = "0%";
            $("#progress").show();

            width = 0;
            for(; width<=100; width++){
                elem.style.width = width + "%";
                await sleep(50);
            }
        }

        async function sleep(ms){
            return new Promise(resolve => setTimeout(resolve, ms));
        }


        /* ====================================================================
         * Stats
         *
         *--------------------------------------------------------------------- */


//        $(".stats__boxNumber").click(function(){
        var boxes = $(".stats__boxNumber");
        var noOfBoxes = boxes.length;
            for(let i=0; i<noOfBoxes; i++){
                count(boxes[i], boxes[i].innerHTML);
            }
//        });

        async function count(box, number){
            var delay = Math.floor(2000/(number/20));
            for(let i=0; i<=number; i=i+20){
                box.innerHTML = i;
                await sleep(delay);
            }
        }
});
