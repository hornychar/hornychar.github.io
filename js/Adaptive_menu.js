/*Adaptive_menu*/

        (function ($, undefined) {
            "use strict";

            // Загрузився документ
            $(function () {

                // Клік по #nav
                $('#nav').click(function () {

                    // Обробка
                    if ($(this).hasClass('active'))
                        $(this).removeClass('active');
                    else
                        $(this).addClass('active');
                });
            });
        })(jQuery);