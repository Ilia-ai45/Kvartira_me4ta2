
import React from 'react';

interface DistrictInfo {
    description: React.ReactNode;
}

export const districtData: Record<string, DistrictInfo> = {
    'микрорайон Зарека': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Думаете, Зарека — это просто «на другом берегу»? Как бы не так. Это район для тех, кто хочет жить в ритме города, но засыпать с видом на огни набережной.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'В чём его уникальность:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Шикарные панорамы'), ' на исторический центр и Туру.'),
                React.createElement('li', null, React.createElement('strong', null, 'Лучшая локация для прогулок:'), ' под боком обновленная набережная и новый парк «Европейский берег».'),
                React.createElement('li', null, React.createElement('strong', null, 'Доступность:'), ' до самого центра буквально 5-7 минут пешком через Мост Влюбленных.')
            ),
            React.createElement('p', null, 'Зарека — это идеальный компромисс между динамикой мегаполиса и спокойствием у воды.')
        ),
    },
    'микрорайон ДОК': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Ищете район, который меняется прямо сейчас и задает тренды? Встречайте ДОК — главную точку роста и реновации в Тюмени. Это место для тех, кто ценит новаторский подход и хочет жить в самом "свежем" пространстве города.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Что делает его особенным:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Новая набережная:'), ' Здесь формируется собственная уникальная зона отдыха у воды, которая обещает стать новой жемчужиной города.'),
                React.createElement('li', null, React.createElement('strong', null, 'Архитектура будущего:'), ' ДОК — это синоним современной застройки, где старое уступает место стильным ЖК и продуманной инфраструктуре.'),
                React.createElement('li', null, React.createElement('strong', null, 'Перспектива:'), ' Это выбор тех, кто инвестирует в будущее и хочет быть в центре событий завтрашнего дня.')
            ),
            React.createElement('p', null, 'ДОК — это про смелость, свежие решения и жизнь у воды в окружении ультрасовременной среды.')
        ),
    },
    'микрорайон Дом Обороны': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Ищете район, где не нужно выбирать между парком и быстрым доступом к центру? Тогда вам на "Оборону". Это один из самых «зеленых» и устоявшихся районов города, который парадоксально не страдает от пробок.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'В чём его главная ценность:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Транспортный узел:'), ' Отсюда вы без пробок доберетесь и в центр, и в аэропорт, и на вокзал. Это главная транспортная артерия города, которая "едет".'),
                React.createElement('li', null, React.createElement('strong', null, 'Экопарк «Затюменский»:'), ' Это не просто сквер, а огромный лесной массив для спорта и прогулок прямо у вашего дома.'),
                React.createElement('li', null, React.createElement('strong', null, 'Сложившаяся инфраструктура:'), ' Здесь всё на своих местах — школы, вузы (включая ТИУ), детские сады и поликлиники, которые работают десятилетиями.')
            ),
            React.createElement('p', null, 'Дом Обороны — это выбор тех, кто ценит свое время и любит дышать свежим воздухом, не жертвуя близостью к центру.')
        ),
    },
    'микрорайон Дударева': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Когда хочется жить «на земле», но не отрываться от города — все смотрят в сторону Дударева. Этот район сломал стереотип о том, что пригород — это долго и неудобно. Он для тех, кто хочет просыпаться от пения птиц, а не от шума машин.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Что здесь ценят жители:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Атмосфера:'), ' Это уже не городская суета, но еще не глухая деревня. Идеальный баланс тишины и цивилизации.'),
                React.createElement('li', null, React.createElement('strong', null, 'Экология:'), ' Район буквально стоит на границе с лесом. Здесь воздух, который хочется вдыхать, и места для прогулок прямо за порогом.'),
                React.createElement('li', null, React.createElement('strong', null, 'Новая среда:'), ' Дударева активно развивается, получая новую социальную инфраструктуру (школы, сады) вместе с современным жильем.')
            ),
            React.createElement('p', null, 'Это территория для тех, кто выбирает спокойный семейный уклад жизни, оставаясь в 10 минутах от главных городских артерий.')
        ),
    },
    'микрорайон Завод медоборудования (прим.)': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Многие знают этот район только "за спиной" улицы Республики, но в этом и есть его главный козырь. Это тот самый "тихий центр", о котором все мечтают. Здесь нет гула главных проспектов, зато есть уютная, сложившаяся застройка и свой, особый ритм.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Чем он берёт:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Доступность:'), ' Два шага — и вы на главной улице города. Вся деловая и развлекательная жизнь в пешей доступности.'),
                React.createElement('li', null, React.createElement('strong', null, 'Обжитая среда:'), ' Район с историей, где не нужно ждать, пока построят магазин или садик — всё уже есть.'),
                React.createElement('li', null, React.createElement('strong', null, 'Атмосфера:'), ' Это не "каменные джунгли" новостроек, а спокойное пространство с зелеными дворами.')
            ),
            React.createElement('p', null, 'Это выбор прагматиков, которые хотят жить в самом сердце Тюмени, но при этом ценить тишину по вечерам.')
        ),
    },
    'микрорайон Зайково': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Пока все смотрят на центр, по-настоящему практичные люди присматриваются к Зайково. Это тот самый «крепкий» спальный район, который живет своей собственной, налаженной жизнью. Его не штормит от мега-строек, здесь всё стабильно и предсказуемо.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Что делает его привлекательным:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Самодостаточность:'), ' Здесь есть всё — от школ и поликлиник до своих небольших рынков. Не нужно ехать "в город".'),
                React.createElement('li', null, React.createElement('strong', null, 'Транспортная логика:'), ' Район имеет быстрый и удобный выезд на Объездную дорогу (ТКАД), что ценно для владельцев авто.'),
                React.createElement('li', null, React.createElement('strong', null, 'Отсутствие суеты:'), ' Это тихая гавань, где вы не переплачиваете за «престиж», а платите за реальный комфорт.')
            ),
            React.createElement('p', null, 'Зайково — это надежная "база" для жизни, где всё необходимое уже есть под рукой.')
        ),
    },
    'микрорайон Затюменка': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Если для вас слова "экология" и "тишина" в городе стоят на первом месте, то ваш выбор очевиден. Затюменка — это, по сути, самый большой "курортный" район внутри Тюмени. Его главная ценность — не квадратные метры, а кубометры чистого воздуха.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Чем он уникален:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Атмосфера приватности:'), ' Здесь доминирует частный сектор и малоэтажная застройка, что создает редкое для города ощущение уединенности.'),
                React.createElement('li', null, React.createElement('strong', null, 'Экопарк как ваш личный двор:'), ' Район буквально растворяется в лесопарке «Затюменский». Это не просто парк рядом, это ваша среда обитания.'),
                React.createElement('li', null, React.createElement('strong', null, 'Статус:'), ' Это спокойное, респектабельное место для тех, кто устал от шума, но не готов жертвовать близостью к центру.')
            ),
            React.createElement('p', null, 'Затюменка — это выбор тех, кто хочет совместить городской комфорт с жизнью на природе.')
        ),
    },
    'микрорайон Гилёво': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Если где и искать знаменитую "Гилёвскую рощу", так это здесь. Этот район — синоним здорового образа жизни в Тюмени. Гилёво выбирают те, для кого ежедневная пробежка или велопрогулка в лесопарке — не роскошь, а базовая потребность.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Чем он уникален:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, '"Та самая" роща:'), ' Это не просто парк, а полноценный, огромный лесной массив, который стал точкой притяжения всего города. Жить здесь — значит иметь его в 2 минутах ходьбы.'),
                React.createElement('li', null, React.createElement('strong', null, 'Экологический оазис:'), ' Район находится в стороне от шумных магистралей, в окружении зелени. Это один из самых чистых уголков Тюмени.'),
                React.createElement('li', null, React.createElement('strong', null, 'Новая инфраструктура:'), ' Благодаря активной застройке, район быстро "обрастает" новыми школами, садами и торговыми центрами.')
            ),
            React.createElement('p', null, 'Гилёво — это идеальное место для тех, кто хочет первым выходить на лыжню зимой и дышать сосновым лесом круглый год.')
        ),
    },
    'микрорайон Войновка': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Многие считают Войновку "краем географии", но жители района с этим категорически не согласятся. Это настоящий "город в городе", который живет своей насыщенной и абсолютно автономной жизнью.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'В чем его сила:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Полная самодостаточность:'), ' Здесь есть свои поликлиники, школы, детские сады и огромный торговый узел "Восточный", который закрывает 90% бытовых нужд.'),
                React.createElement('li', null, React.createElement('strong', null, 'Зеленый оазис:'), ' Район окружен лесом, а совсем рядом находятся озера — идеальное место для отдыха в выходные.'),
                React.createElement('li', null, React.createElement('strong', null, 'Спокойный ритм:'), ' Отсутствие сквозного трафика делает его тихим, несмотря на внушительные размеры.')
            ),
            React.createElement('p', null, 'Войновка — это выбор тех, кто ценит предсказуемость, уют и не хочет зависеть от суеты большого центра.')
        ),
    },
    'микрорайон Казарово': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это не просто еще один район на карте, а место с собственным, ярко выраженным характером. Казарово — это исторический уголок Тюмени, который сохранил свою аутентичность и особую, добрососедскую атмосферу.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Что в нём особенного:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Уникальный колорит:'), ' Это один из центров сибирско-татарской культуры, что создает неповторимую среду и крепкое сообщество.'),
                React.createElement('li', null, React.createElement('strong', null, 'Формат жизни "на земле":'), ' Здесь почти нет многоэтажек. Это царство частных домов, коттеджей и таунхаусов.'),
                React.createElement('li', null, React.createElement('strong', null, 'Тишина:'), ' Район живет в спокойном, размеренном темпе, как в пригороде, хотя и находится в черте города.')
            ),
            React.createElement('p', null, 'Казарово — это выбор тех, кто ценит историю, приватность и хочет жить "на своей земле", не уезжая из Тюмени.')
        ),
    },
    'микрорайон Комарово': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Многие называют Комарово «спальником», но это давно не так. Сегодня это эталон современного семейного пригорода, который уже стал частью города. Район строили с нуля, поэтому здесь нет проблем "старого" фонда, зато есть логика и простор.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Что здесь ценят:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Фокус на детях:'), ' Здесь одна из самых новых и больших школ города, плюс современные детские сады "внутри" кварталов.'),
                React.createElement('li', null, React.createElement('strong', null, 'Продуманная среда:'), ' Широкие улицы, отсутствие хаотичной застройки и собственный "Комарово-Парк" для отдыха.'),
                React.createElement('li', null, React.createElement('strong', null, 'Ощущение "загорода":'), ' Район граничит с лесом, здесь тихо и нет ощущения "каменных джунглей".')
            ),
            React.createElement('p', null, 'Комарово — это выбор для тех, кто хочет сразу жить в молодой и продуманной среде, созданной для семьи.')
        ),
    },
    'микрорайон Корней': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это не просто новый ЖК, это заявка на совершенно новый формат жизни в Тюмени. "Корней" — это амбициозный проект "микрорайона-парка", который строится по принципу "не парк в районе, а район — это парк".'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Чем он кардинально отличается:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Тотальное озеленение:'), ' Вся концепция завязана на 4 километрах зеленых аллей, дворах без машин и ощущении, что вы живете внутри большого сада.'),
                React.createElement('li', null, React.createElement('strong', null, 'Самодостаточность:'), ' Это "город в городе", где с нуля проектируются свои школы, детские сады и вся коммерция.'),
                React.createElement('li', null, React.createElement('strong', null, 'Современный подход:'), ' Здесь всё по-новому — от модной архитектуры разной этажности до эксплуатируемых крыш и коворкингов.')
            ),
            React.createElement('p', null, '"Корней" — это выбор для тех, кто хочет жить в ультрасовременной среде, где природа и технологии стали единым целым.')
        ),
    },
    'микрорайон КПД': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'За этой "советской" аббревиатурой скрывается, возможно, самый понятный и честный район Тюмени. КПД — это про железобетонную надежность и проверенную классику.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Главные преимущества:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Инфраструктура "под ключ":'), ' Школы и детские сады здесь буквально в каждом дворе. Это не маркетинговый ход, а реальность.'),
                React.createElement('li', null, React.createElement('strong', null, 'Феноменальная транспортная развязка:'), ' Привет, улица 50 лет Октября! Отсюда легко добраться в любую точку города.')
            ),
            React.createElement('p', null, 'Это место для тех, кто выбирает проверенную классику, а не модную, но пустую "обертку".')
        ),
    },
    'микрорайон Матмасы': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Есть в Тюмени места, которые живут своей, почти обособленной жизнью. Матмасы — именно такое. Это бывшее татарское поселение, которое вошло в состав города, но умудрилось сохранить свой уникальный характер.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Чем он уникален:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Атмосфера комьюнити:'), ' Здесь нет шума больших проспектов, зато есть редкое для Тюмени добрососедство, где многие знают друг друга в лицо.'),
                React.createElement('li', null, React.createElement('strong', null, 'Зелень и спокойствие:'), ' Район представляет собой микс из крепких частных домов и небольших многоквартирников, утопающих в зелени.')
            ),
            React.createElement('p', null, 'Это выбор тех, кто ищет не просто "квадраты", а настоящее сообщество и размеренный уклад жизни.')
        ),
    },
    'микрорайон Маяк': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, '"Маяк" — это про редкий баланс. Район для тех, кто ищет золотую середину между частным сектором и городской жизнью. Он не пытается казаться ультрамодным, его сила в другом.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'В чем его сила:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Нет ощущения "человейника":'), ' Здесь доминирует частная застройка и малоэтажные дома.'),
                React.createElement('li', null, React.createElement('strong', null, 'Близость к центру:'), ' Расположен близко к Московскому тракту, но без его шума.'),
                React.createElement('li', null, React.createElement('strong', null, 'Сложившаяся инфраструктура:'), ' Лицей №34, поликлиника №5, детские сады — всё в шаговой доступности.')
            ),
            React.createElement('p', null, 'Это выбор для тех, кто ценит спокойствие, но не готов жертвовать временем на дорогу.')
        ),
    },
    'микрорайон Московский тракт': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это не просто район, а главный "западный портал" Тюмени, живущий в особом, динамичном ритме. Его выбирают за тотальную автономию и транспортную доступность.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Ключевые особенности:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Торговый кластер:'), ' "Колумб", "Лента", "Леруа Мерлен" — главный ритейл города находится здесь.'),
                React.createElement('li', null, React.createElement('strong', null, 'Идеальный баланс:'), ' "Старая" обжитая часть имеет школы и сады, а "новая" (Плеханово) добавляет современный комфорт.'),
                React.createElement('li', null, React.createElement('strong', null, 'Быстрый выезд из города:'), ' Лучший вариант для тех, кто часто ездит в сторону Екатеринбурга.')
            )
        ),
    },
    'микрорайон Московский поселок': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Многие думают, что это то же самое, что и Московский тракт, но это главная ошибка. Если "Тракт" — это про динамику и ТРЦ, то "Поселок" — это его тихий, респектабельный "сосед".'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Чем он отличается:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Царство частного сектора:'), ' Здесь преобладают коттеджи и таунхаусы, нет шума магистрали.'),
                React.createElement('li', null, React.createElement('strong', null, 'Вся инфраструктура рядом:'), ' "Загородный" ритм жизни, но вся мощь "Колумба" и "Ленты" в 5 минутах езды.')
            ),
            React.createElement('p', null, 'Это выбор тех, кто хочет приватности, но не хочет тратить на нее полжизни в дороге.')
        ),
    },
    'микрорайон Ново-Патрушево': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это, пожалуй, самый масштабный пример того, как в Тюмени строят "город в городе". Его не "достраивали" к старому фонду, а возводили с абсолютно чистого листа, посреди поля.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Главная ценность — всё "под ключ":'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Современные школы-гимназии'), ' и новые детские сады.'),
                React.createElement('li', null, React.createElement('strong', null, 'Собственная новая поликлиника'), ' (огромный плюс!).'),
                React.createElement('li', null, React.createElement('strong', null, 'Точки притяжения'), ' вроде "Сказочного бульвара".')
            ),
            React.createElement('p', null, 'Это выбор тех, кто хочет сразу "въехать во всё новое" и не ждать, пока инфраструктура догонит жилую застройку.')
        ),
    },
    'микрорайон Очаково': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Компактный и уютный район, который часто недооценивают. Он расположен недалеко от центра, но при этом скрыт от шума главных улиц. Здесь нет огромных новостроек, зато есть своя, уже сложившаяся инфраструктура и спокойная атмосфера.'),
            React.createElement('p', { className: "mt-4" }, 'Идеально подходит для тех, кто ищет доступное жилье рядом с центром, но в более тихой и предсказуемой обстановке.')
        ),
    },
    'микрорайон Парфеново': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это один из самых активно обновляющихся районов, который удачно сочетает близость к центру и тишину. Парфеново — точка притяжения для тех, кто ищет современное жилье, но в уже сложившейся, обжитой локации. Район проходит масштабную реновацию, где на месте старого фонда вырастают новые кварталы.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Чем он привлекателен:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Локация:'), ' Находится рядом с Зарекой, что гарантирует быстрый доступ к центру, но без шума больших магистралей.'),
                React.createElement('li', null, React.createElement('strong', null, 'Обновление:'), ' Это одна из главных площадок реновации, дающая возможность жить в абсолютно новом доме в районе с историей.'),
                React.createElement('li', null, React.createElement('strong', null, 'Близость к воде:'), ' Расположен у изгиба Туры, что открывает жителям доступ к набережной и прогулочным зонам.')
            ),
            React.createElement('p', null, 'Парфеново — это выбор тех, кто хочет жить в новом и одновременно ценит спокойствие.')
        ),
    },
    'микрорайон поселок Патрушева': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Если Ново-Патрушево — это "каменные джунгли" с нуля, то "старое" Патрушева — это тюменская "Рублевка". Это исторически сложившаяся деревня, которая превратилась в один из самых престижных коттеджных районов города.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Главные фишки:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Приватность и статус:'), ' Это район для тех, кто ищет уединения и предпочитает собственный дом квартире.'),
                React.createElement('li', null, React.createElement('strong', null, 'Медицинский кластер:'), ' Именно здесь находится "сердце" тюменской медицины — Федеральный центр нейрохирургии, МСЧ "Нефтяник" и Областная больница.'),
                React.createElement('li', null, React.createElement('strong', null, 'Доступность:'), ' Сохраняя "загородный" формат, район имеет выезд на Червишевский и Московский тракты.')
            ),
            React.createElement('p', null, 'Патрушева — это выбор тех, кто ценит комфорт, приватность и доступ к лучшей медицине.')
        ),
    },
    'микрорайон Рощино': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Этот район — настоящий "курорт" и "воздушные ворота" Тюмени одновременно. Он буквально живет в окружении соснового бора, что делает его одним из самых экологически чистых в городе.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Главные ценности:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Природа:'), ' Прямой доступ к лесу, базам отдыха и горячим источникам "Верхнего Бора".'),
                React.createElement('li', null, React.createElement('strong', null, 'Экология:'), ' Просыпаться от пения птиц и дышать свежим воздухом — это про Рощино.'),
                React.createElement('li', null, React.createElement('strong', null, 'Мобильность:'), ' Идеальная локация для тех, кто часто путешествует — аэропорт здесь "свой", в 5 минутах езды.')
            ),
            React.createElement('p', null, 'Рощино — это жизнь в гармонии с природой, не теряя связи со всем миром.')
        ),
    },
    'микрорайон СМП': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это один из тех "неочевидных" районов, и в этом его главный плюс. Он удачно "спрятан" от шума больших магистралей, сохраняя свою обособленную и спокойную атмосферу.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Чем он хорош:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Дух "старой школы":'), ' Район вырос из "железнодорожной" истории, что создало здесь особое комьюнити и ощущение стабильности.'),
                React.createElement('li', null, React.createElement('strong', null, 'Размеренный ритм:'), ' Здесь нет суеты, зато есть редкое чувство сложившегося добрососедства.')
            ),
            React.createElement('p', null, 'Это выбор для тех, кто ищет максимальное спокойствие, но не готов уезжать далеко от города.')
        ),
    },
    'микрорайон Стрела': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это, пожалуй, один из самых "камерных" и уютных районов Тюмени. "Стрела" — это тот самый тихий, зеленый анклав, который спрятался от шума больших улиц, но при этом находится в двух шагах от Дома Обороны.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'За что его любят:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, '"Ламповая" атмосфера:'), ' Здесь нет гигантских новостроек, зато есть очень спокойный ритм жизни.'),
                React.createElement('li', null, React.createElement('strong', null, 'Исторический контекст:'), ' Свое "заводское" название он получил от приборостроительного завода, что добавляет ему особого шарма.'),
                React.createElement('li', null, React.createElement('strong', null, 'Близость к центру:'), ' Тишина и спокойствие, но вся инфраструктура "Обороны" под боком.')
            )
        ),
    },
    'микрорайон Суходолье': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Суходолье — это яркий пример того, как Тюмень научилась строить "под ключ". Это не просто спальный район, а территория, которая сразу получила "полный комплект" новейшей инфраструктуры.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Фокус на молодые семьи:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Лучшая "социалка":'), ' Главная точка притяжения — одна из самых современных школ (Гимназия №49) и новые детские сады.'),
                React.createElement('li', null, React.createElement('strong', null, 'Готовая среда:'), ' В Суходолье вы получаете не просто квартиру, а сразу всю продуманную и молодую среду для жизни.')
            )
        ),
    },
    'микрорайон Тарманы': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это, пожалуй, самый "природный" район на севере Тюмени, настоящие "зеленые легкие" города. Его выбирают те, кто хочет жить в окружении зелени и воды, но с сохранением всей городской инфраструктуры.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Главные сокровища района:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Парк Гагарина:'), ' Район буквально "обнимает" самый большой лесной массив Тюмени. Это не просто сквер, а полноценный лес для прогулок, спорта и отдыха.'),
                React.createElement('li', null, React.createElement('strong', null, 'Озеро Алебашево:'), ' Жители получают прямой доступ к озеру, которое сейчас превращается в главную "событийную" площадку города.')
            ),
            React.createElement('p', null, 'Тарманы — это идеальный выбор для активной жизни на природе без отрыва от города.')
        ),
    },
    'микрорайон Тюменский 1': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это "отец-основатель" всех "Тюменских", с которого началась застройка этой огромной территории. Район — настоящий образец "чистого" спальника, который уже прошел "проверку временем" и полностью обжит.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'В чём его фишка:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Зрелость и надежность:'), ' Здесь всё на своих местах: от крупного "Мегамарта" до престижных кирпичных домов.'),
                React.createElement('li', null, React.createElement('strong', null, 'Встроенная коммерция:'), ' Вся жизнь (банки, магазины, услуги) удобно расположена на первых этажах домов.')
            ),
            React.createElement('p', null, 'Это выбор для тех, кто ценит стабильность и готовую инфраструктуру.')
        ),
    },
    'микрорайон Тюменский 2': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это не просто район, это главный "шопинг-квартал" Тюмени. Именно здесь сложился самый мощный торговый кластер города. Это место, куда весь город едет за покупками, а вы здесь просто живете.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Чем он уникален:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Всё для шопинга:'), ' "Кристалл", "Ашан", "Лента" и "Метро" находятся в 5-минутной пешей доступности.'),
                React.createElement('li', null, React.createElement('strong', null, 'Семейный комфорт:'), ' При всей торговой мощи, он остается комфортным районом со своими "якорями" — популярной школой №92 и несколькими детскими садами.')
            )
        ),
    },
    'микрорайон Тюменский 3': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Если Тюменский-2 — это про шопинг, то Тюменский-3 — это про баланс. Он впитал в себя все плюсы "соседей", но при этом стал более современным и продуманным.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Главные ценности:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Удобное расположение:'), ' Между крупными ТРЦ ("Кристалл", "Леруа") и ключевой транспортной артерией — Объездной дорогой.'),
                React.createElement('li', null, React.createElement('strong', null, 'Новые парки:'), ' Именно здесь находятся Сквер Льва Ровнина и Сквер Равновесия — одни из самых новых и стильных парков города, ставшие центром семейной жизни района.')
            )
        ),
    },
    'микрорайон Утешево': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это тот самый случай, когда "поселок в составе города" — это преимущество, а не компромисс. Утешево — это уникальная "деревенская" автономия.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'В чем его уникальность:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Полная "социалка":'), ' В отличие от многих отдаленных районов, здесь есть и школа, и детский сад, и даже свой центр культуры.'),
                React.createElement('li', null, React.createElement('strong', null, 'Атмосфера пригорода:'), ' Здесь доминирует частный сектор и малоэтажная застройка.')
            ),
            React.createElement('p', null, 'Это выбор тех, кто хочет жить на своей земле, но при этом водить детей в сад и школу пешком.')
        ),
    },
    'микрорайон Учхоз': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это тот самый район для тех, кто ищет максимального уединения и жизни "на земле", но в черте города. "Учхоз" — это, по сути, небольшой поселок, окруженный Тюменью.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Главные фишки:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Никаких высоток:'), ' Здесь полное доминирование малоэтажной застройки, свои тихие улицы и собственный детский сад.'),
                React.createElement('li', null, React.createElement('strong', null, 'Транспортная доступность:'), ' Он стоит прямо у объездной дороги, что дает феноменальную логистику в любую точку города, минуя пробки центра.')
            )
        ),
    },
    'микрорайон Электрон': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это район с "производственным" характером, который прямо сейчас получает второе дыхание. Исторически "Электрон" — это промзона, но сегодня это одна из главных точек реновации в Тюмени.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Что происходит сейчас:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Реновация:'), ' Старые территории активно застраиваются новыми, современными жилыми комплексами (как ЖК "Новатор").'),
                React.createElement('li', null, React.createElement('strong', null, 'Новый фонд:'), ' Район превращается из "рабочего" в "жилой", сочетая уже сложившуюся логистику и абсолютно новое жилье.')
            )
        ),
    },
    'микрорайон Южный': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это один из самых "крепких" и проверенных временем спальных районов Тюмени. "Южный" — это про комфортную жизнь без "сюрпризов".'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'В чем его сила:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Самодостаточная инфраструктура:'), ' Гимназия №83, школы, детские сады, поликлиники и даже собственный пруд "Южный" для прогулок — всё уже есть.'),
                React.createElement('li', null, React.createElement('strong', null, 'Идеальный баланс:'), ' Он тихий и зеленый, но при этом находится "на первой линии" улицы Мельникайте, что дает быстрый доступ и к центру, и к ТРЦ.')
            )
        ),
    },
    'микрорайон Ямальский-1': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Это, пожалуй, самый известный "социальный" проект во всей Тюмени. Район не просто строился, а целенаправленно создавался для "северян", переезжающих с Ямала "на юг". Это сразу задало ему особый, дружный характер и очень высокий стандарт инфраструктуры "с нуля".'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Главные ценности:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Новая "социалка":'), ' Здесь сразу "выросла" одна из самых современных школ (№94) и новые детские сады.'),
                React.createElement('li', null, React.createElement('strong', null, 'Особое комьюнити:'), ' Район заселялся "волнами" земляков, что создало редкую для новостроек атмосферу добрососедства.'),
                React.createElement('li', null, React.createElement('strong', null, 'Транспортная логика:'), ' Расположен прямо у развязки ТКАД, что идеально для автомобилистов.')
            ),
            React.createElement('p', null, 'Это территория для тех, кто ищет полностью готовую и "заряженную" социальную среду.')
        ),
    },
    'микрорайон Ямальский-2': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Если Ямальский-1 "запускал" этот район, то Ямальский-2 сделал его по-настояшему "обжитым" и комфортным. Он взял всю готовую инфраструктуру "соседа" (школу №94, удобную развязку ТКАД), но добавил к ней главный "зеленый" якорь.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Что его выделяет:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2" },
                React.createElement('li', null, 'Сердце района — это ', React.createElement('strong', null, 'Сквер "Ямальский"'), '. Это большое, стильное пространство, которое сразу стало главной точкой притяжения для семей и прогулок.')
            ),
            React.createElement('p', { className: "mt-4" }, 'Это выбор для тех, кто хочет жить в новом, но уже "упакованном" районе с собственным парком.')
        ),
    },
    'микрорайон Мыс': {
        description: React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Говорят "Мыс" — имеют в виду "отдых". Это, без преувеличения, главный "курортный" район Тюмени. Он уникально расположен на "полуострове", окруженном Турой.'),
            React.createElement('h4', { className: "font-semibold text-white my-3" }, 'Чем он уникален:'),
            React.createElement('ul', { className: "list-disc list-inside space-y-2 mb-4" },
                React.createElement('li', null, React.createElement('strong', null, 'Отдых и развлечения:'), ' Здесь находится легендарная база "Верхний Бор" с горячими источниками.'),
                React.createElement('li', null, React.createElement('strong', null, 'Полная автономия:'), ' На Мысу есть свой гигантский "Сити Молл" для шопинга, а современные ЖК (вроде "Звездного") задали новый стандарт комфорта.')
            ),
            React.createElement('p', null, 'Это выбор для тех, кто ценит жизнь в стиле "отпуск круглый год".')
        ),
    }
};
