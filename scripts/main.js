document.addEventListener('DOMContentLoaded',()=>{
    const animation = document.querySelector('.header-animation');
    const stockAnimation = document.querySelector('.stock-animation');
    const stockTime = document.querySelector('.stock__time');
    const body = document.querySelector('body');
    const data = {
        info : {
            design: {
                title: 'Дизайн интерьера',
                desc: [
                    'Размещение технических люков на кухне и в санузлах, их габариты должны подбираться с учетом комфорта эксплуатации, свободы доступа и обслуживания.',
                    'Сантехоборудование (душевую кабинку, унитаз, ванну) следует устанавливать максимально близко к канализационным стоякам.',
                    'Стены, к которым примыкает мебель и сантехническое оборудование (запорная арматура, унитаз, биде, ограждение ванны, душевой кабинки), рекомендуют облицовывать гладким кафелем. Если в местах премыкания сантехнического оборудования применяют 3D плитку, клиент должен быть проинформирован о неудобствах, возможных при таком решении.',
                    'Выбор светильников и их количества осуществляется с учетом КЕО согласно требованиям к освещенности жилых помещений.'
                ],
                imgURL: 'img/dizajn-intere`era.jpg'
            },
            unbuild: {
                title: 'Демонтаж',
                desc: 
                [
                    'Демонтаж конструкций осуществляется согласно действующим нормам с соблюдением правил техники безопасности',
                    'При проведении таких работ важно максимально сохранить целостность имущества клиента. Поэтому обязательной упаковке подлежат датчики пожарной сигнализации, окна, радиаторы, двери и т.п',
                    'Производить демонтаж систем отопления, канализации, водопроводных труб и стяжек разрешено после отключения отопления и водоснабжения. При этом следует убедиться, что запорная арматура в данном помещении исправна.',
                    'Разборка несущих конструкций или установка в них проемов возможна при наличии разрешительных документов и утвержденного проекта. Мероприятия согласовываются с руководителем работ.'
                ],
                imgURL: 'img/demontazh.jpg'
            },
            otdelka: {
                title: 'Отделка',
                desc: [
                    'Грунтовка монолитного или кирпичного основания стен производится макловицей, оштукатуренного – валиком.',
                    'Просечно-вытяжная сетка набивается следующим образом: отверстия под ее размер предварительно набуриваются, после чего их грунтуют, а сетку наполняют.',
                    'Маяки для штукатурки устанавливаются строго по вертикали (горизонтали) относительно выступающих точек стены или потолка. По желанию клиента, периметр сохраняется. Дальнейшая расстановка промежуточных маяков производится по натянутому шнурку с учетом положения маяков, уже размещенных на краях (их выставляют на раствор). После застывания штукатурки маяки убирают.',
                    'Слой штукатурки наносят на прогрунтованную поверхность с учетом установленных маяков (на стенах они выставлены вертикально, на потолке – горизонтально). Полипропиленовую сетку укладывают в штукатурку в местах, где примыкают кладочные перегородки и монолит.',
                    'Армированную кирпичную кладку следует устанавливать, соблюдая перевязки. При этом на каждом третьем ряду используют закладные анкера, а на каждом четвертом – кладочную сетку. Там, где перегородка примыкает к железобетонным конструкциям, кладочную сетку крепят на ширину кладки и по высоте.',
                    'Стыки листов гипсокартона грунтуются и шпатлюются соответствующими шпатлёвками. Для этого обязательно применяется бандажная лента. Появление впадин и бугров на поверхности не допускается.',
                    'При установке гипсокартона применяют профиля CW и UW толщиной от 0,55 мм, набирая их с шагом 400 мм. Во внутреннем и наружном углу примыкания перегородок, где расположены дверные проемы, применяют усиленный профиль толщиной от 1,2 мм. Перегородки формируются из 2-ух листов гипсокартона, заполненных звукоизолирующим наполнителем и имеющих соответствующую перевязку. Если на фальшстену или перегородку крепятся навесные кухонные шкафы, применяют профиль CW и UW толщиной от 1,2 мм.',
                    'Фальшстены, коробы и навесной потолок монтируются с шагом 400 мм. П-образный крепеж при этом не должен превышать 500 мм, а прикручивать его нужно к профилю на 2 шурупа LN через тело с обеих сторон. Фронтальную часть потолка, фальшстены или короба скрепляют заклепками или шурупами LN с плоской шляпкой. Для участков, где балконные (оконные) рамы и ГКЛ примыкают друг к другу, стоит выбирать влагостойкий гипс, а крепить его нужно на оцинкованные саморезы.',
                    'При чистовой стяжке полов важно ориентироваться на расположение маяков, выравнивая при необходимости поверхность. После высыхания стяжки допустима неровность поверхности до 1,5 мм. В зависимости от размера стяжки и ее глубины, по периметру непременно производится деформационный шов, толщина которого составляет около 5-8 мм.',
                    'Армирование поверхностей, предназначенных под покраску, выполняется с помощью стеклохолста. Его плотность не должна быть ниже 50-й. Он клеится на тщательно прогрунтованные стены или потолок, которые обильно смазывают специальным клеем с помощью макловицы или валика. Клеить и разглаживать стеклохолст на поверхности следует, используя шпатель, а клей наносить на лицевую сторону материала.',
                    'Шпатлюя потолки и стены, особый акцент делают на таких участках: внутренние углы, откосы, места примыкания багетов, мебели, плинтусов и обналичников. Для таких работ используют готовые акриловые шпатлевки. Для получения равномерного цвета и одинакового оттенка рекомендуют применять смеси одной и той же торговой марки и серии.'
                ],
                imgURL: 'img/otdelka.jpg'
            },
            electro: {
                title: 'Электромонтаж',
                desc: [
                    'Электромонтажные работы выполняются в соответствии с проектом, который был утвержден заказчиком. Укладывают провода согласно нормам ПУЭ, ДБН и СНиП. Их располагают перпендикулярно или параллельно поверхности стен и прочно закрепляют',
                    'Соединение распределительных коробок выполняется посредством плотно скрученных проводов. Их длина должна быть не менее 50 мм. В дальнейшем их обжимают гильзой нужного диаметра или сваривают специальным электродом. Для изоляции проводов применяют термоусадку и ПВХ-изоленту.',
                    'Электрощит коммутируют согласно требованиям ПУЭ. Для этого рекомендуют использовать кабеля и провода одной торговой марки, чтобы избежать различий в цветах. До установки навесных потолков (фальшстен) и заделывания штроб все провода укладывают, электрощит и распределительные коробки коммутируются и тестируются, а проделанные работы принимаются руководителем проекта.'

                ],
                imgURL: 'img/yelektromontazh.jpg'
            },
            doors:{
                title: 'Установка дверей',
                desc: [
                    'Начинают такие монтажные работы с изучения геометрии проемов, затем уточняют направление открывания дверей (если нет согласованных планов) и осматривают комплектующие на наличие дефектов.',
                    'Руководитель информируется обо всех найденных дефектах.',
                    'После окончания отделочных работ производится монтаж дверных блоков на готовое напольное покрытие с применением клей-пены. Выравнивание порожков и плинтусов делается после установки наличников.',
                    'При монтировании дверных блоков не должна быть повреждена готовая отделка. Между напольным покрытием и торцом дверного полотна допустим зазор размером не более 10 мм. При этом предварительно следует выполнить выравнивание пола. По периметру дверного полотна в закрытом состоянии зазоры должны быть одинаковыми.',
                    'Как только руководитель примет проект, работы считают оконченными.'

                ],
                imgURL: 'img/ustanovka-dverej.jpg'
            },
            window:{
                title: 'Установка окон',
                desc: [
                    'Монтаж балконных и оконных блоков производится смежными специальными организациями. Горизонтальная плоскость для установки окон во всем помещении одинаковая. Для этого бригадир сообщает смежникам о пометке уровня чистого пола.',
                    'После завершения установки таких конструкций следует проверить: <br> 1) прочность их фиксации в проемах, принимая во внимание правильный выбор применяемых метизов и крепежных узлов; <br> 2) воздухонепроницаемость заполнения пеной щелей по всей длине рам; <br> 3) устойчивость крепления отливов и козырьков; <br> 4) легкость открытия и закрытия окон в любых режимах; <br> 5) отсутствие царапин и других дефектов на фрамугах, дверях, стеклопакетах, створках, рамах и т.д.; <br>6) отсутствие пены с внешней стороны конструкции; <br>7) удаление пленки работниками на внутренней части конструкции по окончанию отделочных мероприятий. <br>8) Законченными работы считают после того, как их примет руководитель.'
                ],
                imgURL: 'img/ustanovka-okon``.jpg'
            },
            paint:{
                title: 'Малярные работы',
                desc: [
                    'Поклейка обоев осуществляется только после завершения черновых работ и подготовительных мероприятий. Подоконники и окна должны быть чистыми, потолки и откосы покрашены, а поверхность полов, стен и потолков прогрунтована. Перед оклеиванием следует пересчитать требуемое количество рулонов, учитывая отходы и раскрой. Также нужно проверить, есть ли заводской брак на обоях и все ли они имеют одинаковую маркировку. Рулонов достаточно, на них нет дефектов или брака? Тогда можно открыть первый из них и выполнить его раскрой и поклейку трех полос. При этом необходимо учитывать рекомендации производителя обоев, указанные на упаковке, и использовать требуемый клей. Как только клиент одобрит готовый вариант поклейки первого рулона, работы можно продолжать.',
                    'Покраску следует производить по завершению подготовительных и черновых мероприятий, когда поверхности полов, стен и потолков будут прогрунтованы. Потолочные багеты должны быть закреплены, а в гипсокартоне следует сделать отверстия под светильники. Когда поверхности будут осмотрены и приняты руководителем, можно выполнять их дальнейшую покраску. Предметы, на которые может попасть краска (радиаторы, оконные блоки, подоконники и т.п.), должны быть накрыты пленкой и оклеены малярным скотчем. Применяя компрессор, методику покраски нужно согласовать с руководителем. При попадании краски на поверхности, пятна следует сразу же удалить.'
                ],
                imgURL: 'img/malyarnie-raboti.jpg'
            },
            blocks:{
                title: 'Плиточные работы',
                desc: [
                    'Перед выполнением укладки следует пересчитать требуемое количество кафеля для пола и стен, фриза, декоративных и других элементов (с учетом отходов). При этом ориентируются на карты разверток и укладки. Затем проверяют, соответствует ли выбранный клей размерам плитки, материалу и методике ее укладки.',
                    'Если разработан дизайн-проект, кафель нужно укладывать не отклоняясь от карты укладки. Поверхность для таких работ должна быть чистой и прогрунтованой, а плитку укладывают под гребенку (соответствующего номера). Перед этим стены, пол и поверхность кафеля нужно прошпатлевать клеем. При отсутствии карт и разверток, размещение плитки и участков подрезов необходимо согласовать с руководителем и клиентом. Во время укладки клейная масса не должна иметь полости и лакуны. В пределах 1 захватки швы и поверхность нужно промыть начисто. Наличие остатков клея на швах и кафеле недопустимо.'
                ],
                imgURL: 'img/plitochny`e-raboty`.jpg'
            },
            plumbing:{
                title: 'Сантехнические работы',
                desc: [
                    'Для установки ГВС, ВК и ОС нужно иметь утвержденный клиентом проект и техническую документацию на сантехническое оборудование. При этом требуется тот же материал, который применял застройщик.',
                    'На закрытых участках трубы водоснабжения и отопления в обязательном порядке изолируются. После установки всех узлов перед заделкой штроб системы опрессовывают.',
                    'Муровать резьбовые стыки и переходы с металла на пластик недопустимо. Они должны быть легкодоступными для обслуживания.',
                    'Подключение выпусков унитаза, душевой кабины и ванны к хозяйственно-бытовой канализации, монтаж бойлера к ГВС и ХВ производится «жестким» подсоединением. Исключение составляют те случаи, когда оно технически усложнено или невозможно.'
                ],
                imgURL: 'img/santehnicheskie-raboty`.jpg'
            },
            air:{
                title: 'Кондиционирование',
                desc: [
                    'Установка систем кондиционирования производится смежными специальными организациями. Места для монтажа внутренних блоков выбираются согласно проекту или утверждаются заказчиком в соответствии с техническими нормами.',
                    'Установка внутренних блоков выполняется согласно ТУ и требованиям их дальнейшей эксплуатации. Бригадир обязан предоставить смежникам отметку опуска поверхности пола для каждого помещения.',
                    'Работы включают 2 основных этапа:',
                    'установка наружных блоков и магистральных труб (во время черновой отделки до монтажа фальшстен и навесных потолков);',
                    'установка внутренних блоков (после заключительной отделки).',
                    'Контроль монтажных работ выполняется руководителем и бригадиром на всех этапах. Следует обеспечить термоизоляцию и герметичность систем трубопровода. Повороты магистралей делаются плавными. В участках прохождения магистралей через элементы конструкций отверстия должны быть воздухонепроницаемыми – оштукатуренными и запененными.',
                    'Если в помещении отсутствует возможность сброса конденсата наружу и нет ливневых стояков, конденсат выводится в хозяйственно-бытовую канализацию с помощью специальных сифонов. При этом доступ к дренажным насосам (при их наличии) и сифонам должен быть свободным. По окончанию монтажа наружных блоков по периметру крышки оставляются одинаковые зазоры.',
                    'Правильность функционирования системы тестируется до того, как появится конденсат (если он выведен на улицу). В других случаях – до получаса. При установке внутренних блоков недопустимы повреждения готовой отделки.',
                    'По завершению каждого этапа работы принимаются руководителем.'
                ],
                imgURL: 'img/kondetsionirovanie.jpg'
            },
            camera:{
                title: 'Слоботочные системы',
                desc: [
                    'Системы видеонаблюдения, спутниковое и кабельное ТВ, интернет, телефон, охранная и пожарная сигнализации относят к слаботочным сетям. Их прокладка выполняется специальными смежными организациями.',
                    'Монтаж и наладка оборудования производятся учреждениями, специализирующимися на этом виде услуг. Перед установкой слаботочных систем заказчик должен указать перечень требуемых сетей и выбрать фирму, которая будет заниматься обслуживанием.',
                    'Эти компании предоставляют ТУ и разрабатывают проект сети, указывают расположение слаботочных реле, щита, розеток и других узлов.',
                    'Установка слаботочных сетей выполняется в одно время с монтажом электросетей. Во избежание влияния помех, расстояние между слаботочными проводами и силовыми кабелями при прокладке должно быть от 50 см. Пересекаться они должны под прямым углом. Когда телефонные провода ведутся в одном направлении, их нужно прокладывать параллельно, плотно прижимая друг к другу. Слаботочные кабеля запрещено заводить в стояк, в который помещены электропровода.',
                    'По завершению установки сетей кабеля проверяют, а работа принимается руководителем.'
                ],
                imgURL: 'img/slabotochny`e-sistemy`.jpg'
            },
            trash:{
                title: 'Уборка и вывоз мусора',
                desc: [
                    'По окончании рабочего дня в помещениях выполняется текущая уборка.',
                    'Мусор собирается в помещении до объемов заполнения транспорта, применяемого для его вывоза. При этом учитывается площадь помещения и методика проведения работ. Участок для временного хранения мусора и срок его погрузки необходимо согласовать с управляющей ЖК организацией или клиентом.',
                    'Убрать мусор из помещения нужно за два часа до приезда транспортного средства.',
                    'После завершения работ производится уборка помещения и участка, по которому выносили мусор.'

                ],
                imgURL: 'img/uborka-i-vy`voz-my`sora.jpg'
            }
        },
        form: {
            price:  {
                title: 'Получите актуальный прайс',
                desc: 'desc form',
                btnTitle: 'Получить',
                comment: 'Прайс будет отправлен на вашу почту'
            },
            repairs:{
                title: 'Давайте рассчитаем точную стоимость ремонта',
                btnTitle: 'Рассчитать смету',
                comment: 'Мы перезвоним в течении двух часов'
            },
            key: {
                title: 'Оставьте заявку на качественный ремонт',
                btnTitle: 'Жду звонка',
                comment: 'Мы перезвоним в течении двух часов'
            }
        }
    }


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
    function checkType(){
        let servicesList = document.querySelectorAll('.services-list__item');

        servicesList.forEach(el=>{
            el.addEventListener('click',(e)=>{
                let type = el.dataset.modal;
                let infoType = el.dataset.info;

                e.preventDefault()
                showModal(drawModal(type,data,infoType))
                
            })
        })

        document.addEventListener('click',(e)=>{
            let type = e.target.dataset.modal;
            let infoType = e.target.dataset.info;

            if(type) {
                e.preventDefault()
                showModal(drawModal(type,data,infoType));
            }

            
            
        })
    }
    function showModal(modal) {
        let timer;
    
        document.addEventListener('click',(e)=>{
            if(e.target.classList.contains('modal-wrapper') ||
            e.target.classList.contains('modal-form__close') ||
            e.target.classList.contains('modal-form__hamburber') ){
                const wrapper = document.querySelector('.modal-wrapper');

                wrapper.classList.remove('open');
                body.style.overflow = 'visible';
                
                setTimeout(()=>{
                    wrapper.remove() 
                    clearTimeout(timer)
                },500)       
            }
        })
        
        
       
        body.insertAdjacentHTML('beforeend',modal);
        
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
    function drawModal(type,data,infoData = 'price'){
        let modal = '';
        let list = '';
        
        if(type == 'info') {
            body.style.overflow = 'hidden';
            data[type][infoData].desc.forEach(el=>{
                list+=`<li class='modal-info__item'>${el}</li>`
            })
            modal = `
            <div class="modal-wrapper open">
                <div class="modal-info">
                    <div class='modal-form__close' >
                        <span class='modal-form__hamburber' ></span>
                    </div>
                    <h2 class="modal-info__title">${data[type][infoData].title}</h2>
                    <img src="${data[type][infoData].imgURL}" class='modal-info__img'/>
                    <ul class='modal-info__desc'>${list}</ul>  
                    <div class='modal-info__faq'>
                        <h3 class='modal-info__subtitle'>
                            Остались вопросы? <br>
                            Оставьте номер и мы перезвоним
                        </h3>
                        <form class='modal-info__data'>
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class='input-des modal-info__inp' placeholder='Введите телефон'> 
                            <input type="submit" value='Жду звонка' class='main-btn modal-info__btn'/>
                        </form>
                    </div>
                    
                </div>
            </div>        
        `
        } else if(type == 'form') {
            body.style.overflow = 'hidden';
            modal = `
            <div class="modal-wrapper open">
                <div class="modal-form ">
                    <img src='img/modal-1.jpg' class='modal-form__img' />
                    <form class='modal-form__desc'>
                        <h3 class='modal-form__title'>${data[type][infoData].title}</h3>
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class='input-des modal-form__inp' placeholder='Введите телефон'> 
                        <input type="email" class='input-des modal-form__inp' placeholder='Введите e-mail'/>
                        <input type="submit" value='${data[type][infoData].btnTitle}' class='main-btn modal-form__btn'/>
                        <span class='modal-form__comment'>${data[type][infoData].comment}</span>    
                    </form> 
                    <div class='modal-form__close' >
                            <span class='modal-form__hamburber' ></span>
                    </div>
                </div>
            </div>        
        `
        } else if(type == 'form-message') {
            body.style.overflow = 'hidden';
            modal = `
            <div class="modal-wrapper open">
                <div class="modal-message ">
                    <img src='img/modal-1.jpg' class='modal-message__img' />
                    <div class='modal-message__wrapper'>
                        <h3 class="modal-form__title">Расскажите о своей задаче</h3>
                        <form action="" class="modal-message__desc main-form">
                            <div class="main-form__data">
                                <input placeholder="Введите имя" type="text" class="input-des">
                                <input placeholder="Введите e-mail" type="email" name="" id="" class="input-des">
                            </div>
                            <div class="main-form__message">
                                <textarea placeholder="Введите сообщение" maxlength='200' cols="30" rows="10" class="input-des main-form__area"></textarea>
                                <input type="submit" value="Жду звонка" class="main-form__submit main-btn btn-anim">
                            </div>
                        </form>
                    </div>
                    <div class='modal-form__close' >
                            <span class='modal-form__hamburber' ></span>
                    </div>
                </div>
            </div>        
        `
        }
        
        return modal
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

    accardion()
    sliderFnc()
    sideMenu()
    checkWindow()
    changeSwitch()
    checkType()
    stockOverTimer()
    teamMarvelAnimation()
})