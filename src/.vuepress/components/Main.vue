<template>
    <div class="main-content">

        <section class="preview">

            <div class="preview__overlay"></div>
            
            <div class="container">
                
                <div class="preview__content">
                
                    <div class="preview__item">
                        
                        <div class="preview__content-wrapper">
                            <h1 class="preview__title">Блочное программирование - Ardugraph!</h1>
                            <p class="preview__description">
                                Сосредоточтесь на творчестве с помощью блочного редактора Ardugraph! 
                                Cтройте блоки быстро и эффективно без излишеств
                            </p>
                            <a href="#product" class="preview__button btn">
                                <img src="img/icons/download-white.svg" alt="Download icon" class="btn__icon">
                                <span class="btn__text">Скачать</span>
                            </a>
                        </div>

                    </div>
                    
                    <div class="preview__item preview__item_media">
                        <video class="preview__video" width="100%" height="400" src="files/preueVideo.mp4" autoplay loop muted></video>
                    </div>

                </div>

            </div>

        </section>

        <section class="vantage">

            <div class="container">

                <h2 class="vantage__title">Преимущества программы</h2>

                <div class="vantage__content">

                    <div class="vantage__item">
                        <div class="vantage__text vantage__text_align">
                            <h3 class="vantage__subtitle">Просто и понятно</h3>
                            <p class="vantage__description">
                                Не загружай голову океаном ненужных кнопок
                                мы постарались включить в Ardugraph только полезное!
                            </p>
                        </div>
                    </div>

                    <div class="vantage__item vantage__item_img--first">
                        <picture>
                            <source srcset="img/webp/img1_converted.webp" type="image/webp">
                            <img class="vantage__img" src="img/img1.png" alt="Ardugraph project initial interface">
                        </picture>
                    </div>
                    
                    <div class="vantage__item vantage__item_img--second">
                        <picture>
                            <source srcset="img/webp/img2_converted.webp" type="image/webp">
                            <img class="vantage__img" src="img/img2.png" alt="Ardugraph work space interface">
                        </picture>
                    </div>

                    <div class="vantage__item">
                        <div class="vantage__text vantage__text_align_right">
                            <h3 class="vantage__subtitle">Собери по кирпичикам</h3>
                            <p class="vantage__description">
                                Блочное программирование, как ни странно, намного приятнее и эффективнее, чем чистый кодинг. 
                                Не трать время, просто бери и делай!
                            </p>
                        </div>
                    </div>

                    <div class="vantage__item">
                        <div class="vantage__text vantage__text_align">
                            <h3 class="vantage__subtitle">Больше чем просто блоки</h3>
                            <p class="vantage__description">
                                Мы даём возможность:
                                <ol class="vantage__list">
                                    <li class="vantage__list-item">конвертировать блоки в код,</li>
                                    <li class="vantage__list-item">добавлять различные библиотеки,</li>
                                    <li class="vantage__list-item">открывать старые проекты, написанные на языках программирования</li>
                                </ol>
                            </p>
                        </div>
                    </div>

                    <div class="vantage__item vantage__item_img--third">
                        <picture>
                            <source srcset="img/webp/img3_converted.webp" type="image/webp">
                            <img class="vantage__img" src="img/img3.png" alt="Ardugraph capabilityes">
                        </picture>
                    </div>

                    <div class="vantage__item vantage__item_img--fourth">
                        <picture>
                            <source srcset="img/webp/img4_converted.webp" type="image/webp">
                            <img class="vantage__img" src="img/img4.png" alt="Ardugraph for all ages">
                        </picture>
                    </div>

                    <div class="vantage__item">
                        <div class="vantage__text vantage__text_align_right">
                            <h3 class="vantage__subtitle">Подходит всем</h3>
                            <p class="vantage__description">
                                Аудитория Ardugraph
                                это как начинающие программисты,
                                так и специалисты
                                среднего и высокого уровней.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
        
        <!-- Секция отзывов со слайдером  -->
        <!-- <section class="feedback">
            
            <div class="container">

            <h2 class="feedback__title">Отзывы пользователей</h2>

            <div class="slider">
                <div class="slider__wrapper">
                <div class="slider__items">
                    <div class="slider__item">
                    <div class="slider__item_inner">
                        <span class="slider__item_img">
                        <img class="slider__item_photo" src="https://via.placeholder.com/150" alt="">
                        </span>
                        <span class="slider__item_testimonial">
                        <span class="slider__item_name">Ismael Matsuura</span>
                        <span class="slider__item_post">Web Developer</span>
                        <span class="slider__item_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil quo molestiae perspiciatis qui vero?
                        </span>
                        </span>
                    </div>
                    </div>
                    <div class="slider__item">
                    <div class="slider__item_inner">
                        <span class="slider__item_img">
                        <img class="slider__item_photo" src="https://via.placeholder.com/150" alt="">
                        </span>
                        <span class="slider__item_testimonial">
                        <span class="slider__item_name">Lawanda Batchelder</span>
                        <span class="slider__item_post">Web Designer</span>
                        <span class="slider__item_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil quo molestiae perspiciatis qui vero?
                        </span>
                        </span>
                    </div>
                    </div>
                    <div class="slider__item">
                    <div class="slider__item_inner">
                        <span class="slider__item_img">
                        <img class="slider__item_photo" src="https://via.placeholder.com/150" alt="">
                        </span>
                        <span class="slider__item_testimonial">
                        <span class="slider__item_name">Bennett Arbogast</span>
                        <span class="slider__item_post">Web Developer</span>
                        <span class="slider__item_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil quo molestiae perspiciatis qui vero?
                        </span>
                        </span>
                    </div>
                    </div>
                    <div class="slider__item">
                    <div class="slider__item_inner">
                        <span class="slider__item_img">
                        <img class="slider__item_photo" src="https://via.placeholder.com/150" alt="">
                        </span>
                        <span class="slider__item_testimonial">
                        <span class="slider__item_name">Shanna Parcell</span>
                        <span class="slider__item_post">Web Designer</span>
                        <span class="slider__item_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil quo molestiae perspiciatis qui vero?
                        </span>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                <a class="slider__control slider__control_prev" href="#" role="button" data-slide="prev"></a>
                <a class="slider__control slider__control_next" href="#" role="button" data-slide="next"></a>
            </div>

            </div>
        </section> -->

        <section class="product" id="product">

            <div class="container">

                <h2 class="product__title">Скачать для своей платформы</h2>

                <p class="product__description">
                    * на данный момент <strong>доступна только версия для Windows</strong> появятся ли остальные версии зависит от вашей поддержки =)
                </p>
                
                <div class="product__content">

                    <div class="product__item">

                        <div class="product__card product__card_disabled platform">
                        
                            <div class="platform__header">
                                <picture>
                                    <source srcset="img/webp/linux-logo_converted.webp" type="image/webp">
                                    <img width="200" height="200" src="img/linux-logo.png" alt="Platform image" class="platfotm__img">
                                </picture>
                            </div>

                            <div class="platform__body">
                                <!-- if ready Add link and attribute "download" -->
                                <a href="#" class="plarform__button btn" >
                                    <img src="img/icons/download-white.svg" alt="Download icon" class="btn__icon">
                                    <span class="btn__text">.deb</span>
                                    <span class="btn__plarform-name">Ubuntu</span>
                                    <span class="btn__plarform-name">Debian</span>
                                </a>

                            </div>

                            <div class="platform__footer">
                                
                                <span class="platform__installer">
                                    <span>.deb: </span> 
                                    <span class="platform__version">
                                        <a href="#">64 bit</a>
                                        <a href="#">32 bit</a>
                                        <a href="#">ARM</a>
                                    </span>
                                </span>

                            </div>

                        </div>

                    </div>

                    <div class="product__item">

                        <div class="product__card platform">

                            <div class="platform__header">
                                <picture>
                                    <source srcset="img/webp/windows-logo_converted.webp" type="image/webp">
                                    <img width="200" height="200" src="img/windows-logo.png" alt="Platform image" class="platfotm__img">
                                </picture>
                            </div>

                            <div class="platform__body">

                                <a href="files/ArduGraph.exe" class="plarform__button btn" download>
                                    <img src="img/icons/download-white.svg" alt="Download icon" class="btn__icon">
                                    <span class="btn__text">Windows</span>
                                    <span class="btn__plarform-name">7, 8, 10</span>
                                </a>

                            </div>

                            <div class="platform__footer platform__footer_windows">
                                <span class="platform__installer">
                                    <span>User installer: </span> 
                                    <span class="platform__version">
                                        <a href="files/ArduGraph.exe">64 bit</a>
                                        <a href="#">32 bit</a>
                                        <a href="#">ARM</a>
                                    </span>
                                </span>
                                <!-- <span class="platform__installer">
                                <span>System installer: </span>
                                <span class="platform__version">
                                    <a href="#">64 bit</a>
                                    <a href="#">32 bit</a>
                                    <a href="#">ARM</a>
                                </span>
                                </span>
                                <span class="platform__installer">
                                <span>.zip: </span>
                                <span class="platform__version">
                                    <a href="#">64 bit</a>
                                    <a href="#">32 bit</a>
                                    <a href="#">ARM</a>
                                </span>
                                </span> -->
                            </div>
                        </div>

                    </div>

                    <div class="product__item">

                        <div class="product__card product__card_disabled platform" >

                            <div class="platform__header">
                                <img width="200" height="200" src="img/icons/apple-logo.svg" alt="Platform image" class="platfotm__img">
                            </div>

                            <div class="platform__body">
                                <!-- if ready Add link and attribute "download" -->
                                <a href="#" class="plarform__button btn">
                                    <img src="img/icons/download-white.svg" alt="Download icon" class="btn__icon">
                                    <span class="btn__text">Mac</span>
                                    <span class="btn__plarform-name">macOS 10.11+</span>
                                </a>

                            </div>

                            <div class="platform__footer">
                                <span class="platform__installer">
                                    <span>.zip: </span>
                                    <span class="platform__version">
                                        <a href="#">Universal</a>
                                        <a href="#">Intel Chip</a>
                                        <a href="#">Apple Silicon</a>
                                    </span>
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    </div>
</template>