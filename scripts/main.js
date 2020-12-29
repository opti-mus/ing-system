document.addEventListener('DOMContentLoaded',()=>{
    const animation = document.querySelector('.header-animation');
    const stockAnimation = document.querySelector('.stock-animation');
    const stockTime = document.querySelector('.stock__time');
    const body = document.querySelector('body');
    

    
    function headerAnimation(){

    animation.classList.add('animation');
    stockAnimation.classList.add('animated');

    stockAnimation.addEventListener('animationend',()=>{
        checkAnimation(stockAnimation,'animated');
    })
    
    setInterval(()=>{
        animation.classList.remove('animation');
        setTimeout(()=>{
            animation.classList.add('animation');
        },500);
    },14000);
    }
    function sliderFnc() {
        tns({
            container: '.my-slider',
            mode: 'gallery',
            items: 1,
            slideBy: 'page',
            autoplay: false,
            nav: false,
            touch: false,
            controlsContainer: '.my-slider__nav',
            animateIn: 'tns-fadeIn',
            animateOut: 'tns-fadeOut',
            speed: 1000,
            swipeAngle: false
        })
        tns({
            container: '.works-slider__build',
            items: 1,
            slideBy: 'page',
            autoplay: false,
            nav: false,
            touch: false,
            controls: true,
            controlsContainer: '.works-slider__nav'
            
        })
        tns({
            container: '.works-slider__design',
            items: 1,
            slideBy: 'page',
            autoplay: false,
            nav: false,
            touch: false,
            controls: true,
            controlsContainer: '.works-slider__nav'
            
        })
        baguetteBox.run('.works-slider__item', {
            animation: 'fadeIn',
            noScrollbars: true
        });
    }
    function changeSwitch(){
        const workSwitch = document.querySelector('.works__switch');
        const slider = document.querySelectorAll('.works-slider [data-switch]');
        const workToggle = document.querySelectorAll('.works__toggle');
        
        workSwitch.addEventListener('click',(e)=>{
            
            slider.forEach(el=>{
                if(el.dataset.switch == e.target.dataset.switch) {
                    e.preventDefault()
                    hideSlide(slider,workToggle);
                    e.target.classList.add('is-active');
                    el.classList.add('show');
                }
            })
        })
    }
    function hideSlide(el,nav){
        nav.forEach(i=>{
            i.classList.remove('is-active');
        })
        el.forEach(item=>{
            item.classList.remove('show');
        })
    }
    function teamMarvelAnimation(){
        let teamMarvel = document.querySelectorAll('.team-marvel [data-marvel]');
        let teamMarvelImg = document.querySelectorAll('.team-marvel__wrapper .team-marvel__item');
        teamMarvel.forEach((el,inx)=>{
            el.addEventListener('mouseover',function(){
                teamMarvelImg[inx].classList.add('is-active');
                el.addEventListener('mouseleave',function(){
                    teamMarvelImg[inx].classList.remove('is-active');
                })
            })
        })
    }
    function checkAnimation(el,clazz) {
        el.classList.remove(clazz);
        setTimeout(()=>{
            el.classList.add(clazz);
        },500)
    }
    function stockOverTimer(){
        let sec = `30`;
        let min = `20`;
        let hours = `22`;
        let days = `00`;
        let timer;
        
            timer = setInterval(()=>{
                sec--
                if(+sec<10){
                    if(Math.floor(`0${sec}`) || sec == `00`) {
                        sec = `0${sec}`
                    } else {
                        if(+sec<0){
                            min--;
                            sec = 59
                            if(+min<10){
                                if(Math.floor(`0${min}`) || min == `00`) {
                                    min = `0${min}`
                                } else {
                                    if(+min<0){
                                        hours--;
                                        min = 59
                                        if(+hours<10){
                                            if(Math.floor(`0${hours}`) || hours == `00`) {
                                                hours = `0${hours}`
                                            } else {
                                                if(+hours<0){
                                                    days--
                                                    hours = 23
                                                    if(+days<10){
                                                        if(Math.floor(`0${days}`) || days == `00`) {
                                                            days = `0${days}`
                                                        } else {
                                                            if(+days<1){
                                                                clearInterval(timer);
                                                                return false;
                                                            }
                                                        }
                                                    }
                                                    
                                                }
                                            }
                                        }
                                        
                                    }
                                }
                            }
                            
                        }
                    }
                    
                    
                }
                
                
                stockTime.innerHTML = `<div class='stock__timer'><span class='stock__label'>${days}</span> : <span class='stock__label'>${hours}</span> : <span class='stock__label'>${min}</span> : <b class='stock__label'>${sec}<b></div>`;
            },1000)
        
    }
    function accardion(){
        const accardItem = document.querySelectorAll('.faq__accordion .faq__item');
        
        accardItem.forEach(el=>{
            el.addEventListener('click',function(e){
                e.preventDefault()
                this.classList.toggle('is-active');
            })
        })
    }  
    function sideMenu(){
        const menu = document.querySelector('.hide-menu');
        const hambur = document.querySelector('.humburger__container');
        const nav = document.querySelectorAll('.hide-menu__item');

        

        hambur.addEventListener('click',(e)=>{
            menu.classList.add('open');
            nav.forEach(el=>{
                el.addEventListener('click',()=>{
                    menu.classList.remove('open')
                })
            })
            menu.querySelector('.hide-menu__close').addEventListener('click',(e)=>{
                menu.classList.remove('open')
                
            })
        })
        
        
    }
    function checkWindow(){
        const nav = document.querySelectorAll('.header-nav .header-nav__item .header-nav__link');
        const faq = document.querySelector('#faq');
        const why = document.querySelector('#why')
        const header = document.querySelector('#header')
        const works = document.querySelector('#works')
        const services = document.querySelector('#services')
        const contacts = document.querySelector('#contacts')
        const price = document.querySelector('#price')

        let arr = [faq,why,header,works,services,contacts,price];
        

        document.addEventListener('scroll',(e)=>{
            
            arr.forEach(el=>{
               if((el.getBoundingClientRect().top <= 100)) {
                if(el.getBoundingClientRect().top +el.getBoundingClientRect().height-50 > 0)
                    nav.forEach(item=>{
                        let link = item.href.substr(item.href.lastIndexOf('#')+1);
                        
                        item.classList.remove('isActive');
                        if(link == el.id) {
                            item.classList.add('isActive')
                        }
                    })
                    
                } 
            })
        
        })
    }
    headerAnimation()
    accardion()
    sliderFnc()
    sideMenu()
    checkWindow()
    changeSwitch()
    stockOverTimer()
    teamMarvelAnimation()
    
})