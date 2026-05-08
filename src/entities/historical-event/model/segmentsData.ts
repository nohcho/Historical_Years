import type { HistoricalSegment, LocalizedHistoricalSegment } from './types';

import type { Language } from '@/shared/config/i18n';

export const segmentsData: LocalizedHistoricalSegment[] = [
  {
    startYear: 1900,
    endYear: 1918,
    label: {
      ru: 'Начало XX века',
      en: 'Early 20th Century',
    },
    events: [
      {
        year: 1903,
        text: {
          ru: '17 декабря 1903 года в Кити-Хок, Северная Каролина, США, братья Орвилл и Уилбур Райт совершают первый в истории управляемый полёт на моторном летательном аппарате тяжелее воздуха — самолёте "Flyer". Первый полёт длился 12 секунд и прошёл на высоте около 3 метров, преодолев расстояние 36,5 метра. За этот день они выполнили 4 полёта, последний из которых длился 59 секунд. Аппарат был оснащён четырёхцилиндровым бензиновым двигателем мощностью 12 л.с. и винтами, созданными братьями самостоятельно. Их успех стал результатом многолетних исследований, испытаний планеров и крыльев в аэродинамической трубе, что заложило научные основы авиации. Этот полёт ознаменовал начало новой эры в транспорте и инженерии, навсегда изменив способы передвижения и военные стратегии, а также положив основу для бурного развития авиационной промышленности в XX веке.',
          en: 'On December 17, 1903, in Kitty Hawk, North Carolina, Orville and Wilbur Wright made the first controlled powered flight of a heavier-than-air aircraft, the Flyer. The first flight lasted 12 seconds and covered 36.5 meters at a height of about 3 meters. By the end of the day they had completed four flights, with the longest lasting 59 seconds. Their work with gliders, propellers, engines, and wind-tunnel tests helped establish the scientific foundations of aviation. The achievement opened a new era in transport and engineering and shaped the development of aircraft throughout the 20th century.',
        },
      },
      {
        year: 1912,
        text: {
          ru: '15 апреля 1912 года британский трансатлантический лайнер "Титаник", считавшийся незыблемым достижением инженерной мысли и объявленный "непотопляемым", затонул в холодных водах Атлантического океана после столкновения с айсбергом во время своего первого рейса из Саутгемптона в Нью-Йорк. На борту находились более 2200 человек, включая пассажиров всех классов и членов экипажа. В результате катастрофы погибло свыше 1500 человек — большинство из-за нехватки спасательных шлюпок и недостаточной подготовки к эвакуации. Это трагическое событие потрясло весь мир, вызвало масштабное общественное возмущение и стало отправной точкой в реформировании международных морских норм. Впоследствии были приняты меры по обеспечению безопасности на море, включая обязательное наличие спасательных средств для всех пассажиров, круглосуточное дежурство на радиостанциях и создание Международной конвенции по охране человеческой жизни на море (СОЛАС).',
          en: 'On April 15, 1912, the British liner Titanic sank in the cold waters of the Atlantic after striking an iceberg on its maiden voyage from Southampton to New York. More than 2,200 passengers and crew were on board, and over 1,500 people died, largely because there were too few lifeboats and evacuation procedures were inadequate. The disaster shocked the world and led to major reforms in maritime safety, including lifeboat requirements, continuous radio watch, and the development of the SOLAS convention.',
        },
      },
      {
        year: 1914,
        text: {
          ru: '28 июля 1914 года началась Первая мировая война — глобальный вооружённый конфликт, охвативший крупнейшие мировые державы того времени. Поводом стало убийство австрийского эрцгерцога Франца Фердинанда в Сараево 28 июня 1914 года, совершённое членом сербской националистической организации. Австро-Венгрия объявила войну Сербии, после чего в цепной реакции в конфликт были втянуты Германия, Россия, Франция, Великобритания и другие государства, образовав два враждующих блока: Антанту и Тройственный союз. Война охватила Европу, Ближний Восток, Африку и даже Тихоокеанский регион, впервые были массово применены пулемёты, отравляющие газы, танки и авиация. За четыре года боевых действий погибло более 20 миллионов человек, а последствия войны оказали колоссальное влияние на весь XX век — от распада империй до революций и предпосылок ко Второй мировой войне.',
          en: 'World War I began on July 28, 1914, after the assassination of Archduke Franz Ferdinand in Sarajevo set off a chain reaction among major European powers. Austria-Hungary declared war on Serbia, and Germany, Russia, France, Britain, and other states were soon drawn in. The war spread across Europe, the Middle East, Africa, and the Pacific, bringing mass use of machine guns, poison gas, tanks, and aircraft. More than 20 million people died, and the conflict reshaped the 20th century through the collapse of empires, revolutions, and the conditions that led toward World War II.',
        },
      },
      {
        year: 1917,
        text: {
          ru: 'Октябрьская революция в России, произошедшая 25 октября (7 ноября по новому стилю) 1917 года, стала ключевым событием в истории XX века. Под руководством большевиков во главе с Владимиром Лениным вооружённые отряды рабочих, солдат и матросов захватили ключевые точки в Петрограде, включая Зимний дворец, где находилось Временное правительство. В результате власть перешла в руки Советов, а в стране началась радикальная социалистическая трансформация. Было провозглашено установление диктатуры пролетариата, начата национализация земли, банков и промышленности, Россия вышла из Первой мировой войны. Революция стала отправной точкой для создания Советского Союза и повлияла на весь мир, породив волну коммунистических движений и идеологическое противостояние, которое определяло геополитическую карту мира на протяжении десятилетий.',
          en: 'The October Revolution in Russia took place on October 25, 1917, according to the old calendar, or November 7 in the modern calendar. Led by the Bolsheviks under Vladimir Lenin, armed workers, soldiers, and sailors seized key points in Petrograd, including the Winter Palace, where the Provisional Government was located. Power passed to the Soviets, and Russia entered a period of radical socialist transformation, nationalization, and withdrawal from World War I. The revolution led to the creation of the Soviet Union and influenced politics around the world for decades.',
        },
      },
      {
        year: 1918,
        text: {
          ru: '11 ноября 1918 года в 11 часов утра в железнодорожном вагоне близ французского города Компьен было подписано перемирие между Антантой и Германской империей, ознаменовавшее окончание Первой мировой войны. После четырёх лет кровопролитных боёв, разрушений и десятков миллионов жертв конфликт завершился поражением Центральных держав. Германия согласилась на прекращение огня, вывод войск, сдачу вооружения и отмену аннексий. Война привела к краху четырёх империй — Российской, Германской, Османской и Австро-Венгерской — и коренному изменению политической карты Европы. Компьенское перемирие стало прелюдией к подписанию в 1919 году Версальского договора, который установил жёсткие условия для Германии и породил серьёзные политические и экономические последствия, ставшие почвой для дальнейших конфликтов в XX веке, включая Вторую мировую войну.',
          en: 'At 11 a.m. on November 11, 1918, the Allies and the German Empire signed an armistice in a railway carriage near Compiegne, France, ending World War I. After four years of fighting and immense destruction, Germany accepted a ceasefire, troop withdrawals, and the surrender of weapons. The war brought down the Russian, German, Ottoman, and Austro-Hungarian empires and redrew the political map of Europe. The armistice was followed by the Treaty of Versailles in 1919, whose harsh terms created serious political and economic consequences.',
        },
      },
    ],
  },
  {
    startYear: 1939,
    endYear: 1945,
    label: {
      ru: 'Вторая мировая война',
      en: 'World War II',
    },
    events: [
      {
        year: 1939,
        text: {
          ru: '1 сентября 1939 года нацистская Германия под руководством Адольфа Гитлера вторглась на территорию Польши, начав тем самым Вторую мировую войну — крупнейший вооружённый конфликт в истории человечества. В течение нескольких дней немецкая армия использовала тактику блицкрига — молниеносной войны — с массированными ударами авиации и танковых дивизий, что позволило ей быстро продвигаться вглубь польской территории. 3 сентября Великобритания и Франция, соблюдая союзнические обязательства, объявили Германии войну. В течение месяца Польша была оккупирована и разделена между Германией и Советским Союзом согласно секретному протоколу к пакту Молотова — Риббентропа. Это событие стало началом глобального конфликта, в который впоследствии были втянуты десятки стран на разных континентах.',
          en: 'On September 1, 1939, Nazi Germany under Adolf Hitler invaded Poland, beginning World War II. German forces used blitzkrieg tactics, combining air attacks and armored divisions to advance rapidly. On September 3, Britain and France declared war on Germany. Within a month Poland was occupied and divided between Germany and the Soviet Union under the secret protocol of the Molotov-Ribbentrop Pact. The invasion marked the start of a global conflict that would involve dozens of countries across several continents.',
        },
      },
      {
        year: 1941,
        text: {
          ru: '7 декабря 1941 года Япония совершила внезапную атаку на военно-морскую базу США в Перл-Харборе, расположенную на Гавайских островах. В результате авиаудара были потоплены или повреждены десятки американских кораблей, включая 8 линкоров, и уничтожены сотни самолётов. Погибло более 2400 человек. Атака, совершённая без официального объявления войны, вызвала шок в американском обществе и привела к официальному вступлению США во Вторую мировую войну на следующий день — 8 декабря 1941 года. Это радикально изменило ход конфликта, превратив его в по-настоящему глобальную войну с участием всех крупнейших держав, и открыло новый Тихоокеанский фронт в противостоянии с Японией.',
          en: 'On December 7, 1941, Japan launched a surprise attack on the U.S. naval base at Pearl Harbor in Hawaii. The raid sank or damaged many American ships, including eight battleships, destroyed hundreds of aircraft, and killed more than 2,400 people. The attack, carried out without a formal declaration of war, shocked the United States and led to its entry into World War II on December 8. It transformed the conflict into a fully global war and opened the Pacific front against Japan.',
        },
      },
      {
        year: 1943,
        text: {
          ru: 'Сталинградская битва, длившаяся с 17 июля 1942 по 2 февраля 1943 года, стала крупнейшим и самым кровопролитным сражением Второй мировой войны. С обеих сторон в боях участвовало свыше 2 миллионов человек. Сражение велось за контроль над городом Сталинградом (ныне Волгоград) и стало символом несгибаемого сопротивления Красной армии. После окружения и капитуляции 6-й немецкой армии под командованием фельдмаршала Паулюса более 90 тысяч солдат вермахта сдались в плен. Победа СССР положила конец стратегической инициативе Германии на Восточном фронте и стала переломным моментом всей войны, начав освобождение советской территории и переход к наступательным действиям против нацистской Германии.',
          en: 'The Battle of Stalingrad lasted from July 17, 1942, to February 2, 1943, and became one of the largest and bloodiest battles of World War II. More than two million people fought for control of the city, now Volgograd. After the Soviet encirclement, the German 6th Army under Field Marshal Paulus surrendered, and more than 90,000 soldiers were taken prisoner. The Soviet victory ended the strategic initiative of Germany on the Eastern Front and became a turning point in the war.',
        },
      },
      {
        year: 1944,
        text: {
          ru: '6 июня 1944 года состоялась высадка союзных войск в Нормандии — крупнейшая десантная операция в истории, известная как День "D" (D-Day). Более 156 тысяч солдат из США, Великобритании, Канады и других стран пересекли Ла-Манш и начали масштабное наступление на оккупированную нацистами Францию. Операция "Оверлорд" проводилась при сложнейшей координации морских, воздушных и сухопутных сил. Успешное закрепление на берегу стало решающим шагом в открытии второго фронта в Европе, ускорившим падение Третьего рейха. Нормандская операция символизирует международное сотрудничество союзников и массовое жертвоприношение ради освобождения Европы от фашизма.',
          en: 'On June 6, 1944, Allied forces landed in Normandy in the largest amphibious operation in history, known as D-Day. More than 156,000 troops from the United States, Britain, Canada, and other countries crossed the English Channel and began a major offensive in Nazi-occupied France. Operation Overlord required complex coordination of naval, air, and ground forces. Securing the beachheads opened a second front in Europe and accelerated the fall of the Third Reich.',
        },
      },
      {
        year: 1945,
        text: {
          ru: '6 и 9 августа 1945 года Соединённые Штаты Америки сбросили атомные бомбы на японские города Хиросима и Нагасаки. Это стало первым и единственным в истории боевым применением ядерного оружия. Взрыв в Хиросиме унёс жизни более 140 тысяч человек, в Нагасаки — около 74 тысяч, большинство — мирные жители. Мгновенное разрушение городов, ужасные последствия радиации и международное давление вынудили Японию 15 августа объявить о безоговорочной капитуляции, а 2 сентября 1945 года подписать Акт о капитуляции. Эти события ознаменовали окончание Второй мировой войны и вступление человечества в ядерную эру, вызвав глобальные споры о морали, стратегическом сдерживании и международной безопасности.',
          en: 'On August 6 and 9, 1945, the United States dropped atomic bombs on Hiroshima and Nagasaki. These attacks remain the only wartime use of nuclear weapons. More than 140,000 people died in Hiroshima and about 74,000 in Nagasaki, most of them civilians. The destruction, radiation effects, and international pressure led Japan to announce its surrender on August 15 and sign the formal surrender on September 2. The events ended World War II and began the nuclear age.',
        },
      },
    ],
  },
  {
    startYear: 1957,
    endYear: 1969,
    label: {
      ru: 'Космическая гонка',
      en: 'Space Race',
    },
    events: [
      {
        year: 1957,
        text: {
          ru: 'СССР запускает спутник "Спутник-1" — начало космической эры. 4 октября 1957 года с космодрома Байконур на околоземную орбиту был выведен первый в истории искусственный спутник Земли. Аппарат весом 83,6 кг с четырьмя антеннами передавал радиосигналы, которые улавливались по всему миру. Разработка велась под руководством Сергея Королёва — главного конструктора советской космической программы. Успех миссии вызвал глобальный резонанс, шокировал США, и положил начало космической гонке. Это событие стимулировало развитие высоких технологий, фундаментальных наук, образовательных программ и принесло человечеству уверенность в возможности выхода в космос.',
          en: 'On October 4, 1957, the Soviet Union launched Sputnik 1 from Baikonur, placing the first artificial satellite into Earth orbit. The 83.6-kilogram spacecraft transmitted radio signals that were received around the world. Developed under Sergei Korolev, the mission stunned the United States and marked the beginning of the space age. It accelerated high technology, science education, and the space race between the two superpowers.',
        },
      },
      {
        year: 1961,
        text: {
          ru: '12 апреля 1961 года советский лётчик-космонавт Юрий Алексеевич Гагарин стал первым человеком, совершившим орбитальный полёт вокруг Земли на космическом корабле "Восток-1". Полёт длился 108 минут и прошёл по низкой околоземной орбите. Запуск с Байконура стал триумфом советской космической программы и научно-технической мысли. Фраза Гагарина "Поехали!" стала символом начала новой космической эры для всего человечества. Его полёт не только закрепил лидерство СССР в космической гонке, но и стал важнейшим событием в истории науки, инженерии и политического соперничества времён холодной войны.',
          en: 'On April 12, 1961, Soviet cosmonaut Yuri Gagarin became the first human to orbit Earth aboard Vostok 1. The flight lasted 108 minutes in low Earth orbit and became a triumph for the Soviet space program. The phrase used by Gagarin, "Poyekhali!", became a symbol of the new space era. The mission confirmed Soviet leadership in the early space race and became a landmark in science, engineering, and Cold War competition.',
        },
      },
      {
        year: 1963,
        text: {
          ru: '16 июня 1963 года Валентина Владимировна Терешкова стала первой женщиной-космонавтом, отправившейся в космос на корабле "Восток-6". Её полёт продолжался почти трое суток (2 дня 22 часа), в течение которых она совершила 48 витков вокруг Земли. Это достижение стало значительным прорывом не только в освоении космоса, но и в укреплении гендерного равенства, продемонстрировав, что женщины способны выполнять сложнейшие задачи в экстремальных условиях. Полёт Терешковой закрепил ведущую позицию СССР в космической гонке и стал знаковым достижением для всего человечества.',
          en: 'On June 16, 1963, Valentina Tereshkova became the first woman in space aboard Vostok 6. Her flight lasted almost three days, during which she completed 48 orbits around Earth. The achievement was an important milestone for space exploration and a powerful symbol of the ability of women to perform complex tasks in extreme conditions. Her mission strengthened the Soviet position in the space race and remains a historic human achievement.',
        },
      },
      {
        year: 1969,
        text: {
          ru: '20 июля 1969 года американский астронавт Нил Армстронг стал первым человеком, ступившим на поверхность Луны в рамках миссии "Аполлон-11". Его знаменитая фраза "Это один маленький шаг для человека, но гигантский скачок для человечества" прозвучала в прямом эфире по всему миру. Вслед за ним на Луну вышел Эдвин "Базз" Олдрин, в то время как третий член экипажа, Майкл Коллинз, управлял командным модулем на орбите. Посадка была осуществлена в Море Спокойствия. Это событие стало кульминацией космической гонки между США и СССР, символом научного прогресса, инженерного гения и международного соперничества времён холодной войны.',
          en: 'On July 20, 1969, American astronaut Neil Armstrong became the first person to step onto the Moon during Apollo 11. His words, "one small step for a man, one giant leap for mankind," were heard worldwide. Buzz Aldrin joined him on the surface while Michael Collins piloted the command module in lunar orbit. The landing in the Sea of Tranquility became the peak of the space race and a symbol of scientific progress and engineering ambition.',
        },
      },
    ],
  },
  {
    startYear: 1989,
    endYear: 1991,
    label: {
      ru: 'Конец Холодной войны',
      en: 'End of the Cold War',
    },
    events: [
      {
        year: 1989,
        text: {
          ru: '9 ноября 1989 года произошло падение Берлинской стены — одного из главных символов Холодной войны и разделения Европы. Стена, построенная в 1961 году, отделяла Западный Берлин от социалистической ГДР и служила преградой для эмиграции из Восточной Германии. На фоне массовых протестов, экономического кризиса и политических реформ в странах Восточной Европы, правительство ГДР объявило о свободном пересечении границы. Сотни тысяч людей устремились к контрольно-пропускным пунктам, где охрана отказалась применять силу. Люди начали вручную разбирать стену. Это событие стало символом крушения коммунистических режимов в Восточной Европе и предвестником конца Холодной войны.',
          en: 'On November 9, 1989, the Berlin Wall fell, ending one of the strongest symbols of the Cold War and the division of Europe. Built in 1961, the wall separated West Berlin from East Germany and restricted emigration. Amid mass protests, economic crisis, and reforms across Eastern Europe, East German authorities announced free border crossing. Crowds moved to the checkpoints, guards did not use force, and people began dismantling the wall. The event became a symbol of the collapse of communist regimes in Eastern Europe.',
        },
      },
      {
        year: 1990,
        text: {
          ru: '3 октября 1990 года произошло официальное объединение Германии — Федеративной Республики Германии (ФРГ) и Германской Демократической Республики (ГДР) — после почти 45 лет разделения. Этот процесс стал возможен благодаря распаду социалистического блока, падению Берлинской стены и поддержке международного сообщества. Объединение стало символом окончания послевоенного раскола Европы, укрепления демократии и завершения конфронтации между Востоком и Западом. Германия вновь обрела политическое и экономическое единство, а Берлин стал её столицей, сыграв важную роль в формировании новой архитектуры безопасности в Европе.',
          en: 'On October 3, 1990, the Federal Republic of Germany and the German Democratic Republic officially reunified after nearly 45 years of division. The process became possible through the collapse of the socialist bloc, the fall of the Berlin Wall, and international support. Reunification symbolized the end of the postwar split of Europe, the strengthening of democracy, and the closing phase of East-West confrontation. Germany regained political and economic unity, with Berlin becoming its capital again.',
        },
      },
      {
        year: 1991,
        text: {
          ru: '25 декабря 1991 года Советский Союз официально прекратил своё существование после подписания Беловежских соглашений и объявления отставки Михаила Горбачёва. В течение года 15 союзных республик провозгласили независимость. Распад СССР стал завершением эпохи, начавшейся с Октябрьской революции 1917 года, и ознаменовал конец Холодной войны. Это радикально изменило мировую политическую карту: бывшие советские республики начали формировать собственные государственности, а США остались единственной сверхдержавой. Мир вступил в новую эпоху — с глобализацией, новыми экономическими блоками и изменившимися правилами международной политики.',
          en: 'On December 25, 1991, the Soviet Union officially ceased to exist after the Belavezha Accords and the resignation of Mikhail Gorbachev. During that year, the 15 Soviet republics declared independence. The collapse ended the era that began with the 1917 revolution and marked the end of the Cold War. It transformed the world political map, led former Soviet republics to build independent states, and left the United States as the sole superpower.',
        },
      },
    ],
  },
  {
    startYear: 2001,
    endYear: 2011,
    label: {
      ru: 'Глобальные вызовы',
      en: 'Global Challenges',
    },
    events: [
      {
        year: 2001,
        text: {
          ru: '11 сентября 2001 года в США произошли крупнейшие в истории террористические атаки. Члены террористической организации "Аль-Каида" захватили четыре пассажирских авиалайнера: два из них были направлены в башни Всемирного торгового центра в Нью-Йорке, третий — в здание Пентагона в Вашингтоне, четвёртый разбился в Пенсильвании после сопротивления пассажиров. В результате атак погибло около 3000 человек, тысячи были ранены, а экономический и психологический ущерб оказался колоссальным. Эти события стали поворотным моментом в международной политике, положив начало глобальной "войне с терроризмом", вторжению США в Афганистан, усилению мер безопасности по всему миру и переформатированию международных отношений.',
          en: 'On September 11, 2001, the United States suffered the largest terrorist attacks in its history. Members of al-Qaeda hijacked four passenger aircraft: two struck the World Trade Center towers in New York, one hit the Pentagon, and one crashed in Pennsylvania after passengers resisted. Nearly 3,000 people died and thousands were injured. The attacks became a turning point in international politics, leading to the global war on terror, the U.S. invasion of Afghanistan, stricter security measures, and a reshaping of international relations.',
        },
      },
      {
        year: 2004,
        text: {
          ru: '26 декабря 2004 года в Индийском океане произошло мощнейшее землетрясение магнитудой 9,1–9,3 у побережья Суматры, вызвавшее гигантское цунами. Волны высотой до 30 метров обрушились на прибрежные районы Индонезии, Шри-Ланки, Индии, Таиланда, Мальдив, и других стран. В результате погибло более 230 тысяч человек в 14 странах, миллионы остались без жилья. Это одно из самых смертоносных природных бедствий в современной истории. Катастрофа вызвала беспрецедентный международный отклик и волну гуманитарной помощи, а также послужила толчком к созданию систем раннего предупреждения о цунами в регионе Тихого и Индийского океанов.',
          en: 'On December 26, 2004, a massive magnitude 9.1-9.3 earthquake off Sumatra triggered a devastating tsunami in the Indian Ocean. Waves up to 30 meters high struck coastal areas of Indonesia, Sri Lanka, India, Thailand, the Maldives, and other countries. More than 230,000 people died across 14 countries, and millions lost their homes. The disaster prompted a major international humanitarian response and led to improved tsunami warning systems in the Indian and Pacific Ocean regions.',
        },
      },
      {
        year: 2008,
        text: {
          ru: 'В 2008 году разразился мировой финансовый кризис — крупнейший со времён Великой депрессии. Его начало связано с обвалом ипотечного рынка в США, в частности — с крахом высокорискованных "субстандартных" кредитов. Это привело к банкротству крупнейших финансовых институтов, включая Lehman Brothers, и массовому падению фондовых рынков. Экономикам по всему миру пришлось справляться с рецессией, ростом безработицы и падением потребительского спроса. Правительства стран приняли масштабные антикризисные меры, включая программы финансовой помощи банкам и стимулирование экономики. Кризис выявил уязвимости в глобальной финансовой системе и вызвал широкие дискуссии о регулировании рынков, роли центробанков и неравенстве.',
          en: 'In 2008, the world faced the largest financial crisis since the Great Depression. It began with the collapse of the U.S. housing market and high-risk subprime mortgages, leading to the failure of major financial institutions including Lehman Brothers and a sharp fall in global stock markets. Economies around the world struggled with recession, unemployment, and falling demand. Governments introduced bank rescue packages and stimulus programs. The crisis exposed weaknesses in global finance and sparked debates about regulation, central banks, and inequality.',
        },
      },
      {
        year: 2011,
        text: {
          ru: 'В 2011 году на Ближнем Востоке и в Северной Африке началась "Арабская весна" — серия массовых протестов, революций и волнений, вызванных недовольством коррупцией, безработицей, авторитаризмом и нарушением прав человека. Волна протестов охватила Тунис, Египет, Ливию, Йемен, Бахрейн, Сирию и другие страны. В некоторых случаях она привела к свержению режимов, как в Тунисе и Египте. В Сирии протесты против президента Башара Асада переросли в кровопролитную гражданскую войну, затянувшуюся на годы и приведшую к масштабным жертвам, разрушениям и гуманитарному кризису. В конфликт были втянуты внешние игроки, включая США, Россию, Иран и Турцию, что превратило его в один из самых сложных международных конфликтов XXI века.',
          en: 'In 2011, the Arab Spring began across the Middle East and North Africa as a wave of protests, uprisings, and revolutions driven by anger over corruption, unemployment, authoritarian rule, and human rights abuses. Demonstrations spread through Tunisia, Egypt, Libya, Yemen, Bahrain, Syria, and other countries. Some regimes fell, including those in Tunisia and Egypt. In Syria, protests against Bashar al-Assad escalated into a long and devastating civil war involving outside powers such as the United States, Russia, Iran, and Turkey.',
        },
      },
    ],
  },
  {
    startYear: 2020,
    endYear: 2024,
    label: {
      ru: 'Новейшее время',
      en: 'Recent Era',
    },
    events: [
      {
        year: 2020,
        text: {
          ru: 'В 2020 году началась глобальная пандемия COVID-19, вызванная новым коронавирусом SARS-CoV-2, впервые обнаруженным в декабре 2019 года в китайском городе Ухань. Вирус стремительно распространился по миру, приведя к беспрецедентному количеству случаев заражения, миллионов смертей и перегрузке систем здравоохранения. Страны ввели строгие карантины, закрыли границы, отменили массовые мероприятия и перешли на удалённую работу и обучение. Мировая экономика пережила шок: замедление торговли, падение производства и рост безработицы. Пандемия изменила повседневную жизнь миллиардов людей, ускорив цифровизацию, развитие телемедицины и технологий удалённого взаимодействия, а также вызвав беспрецедентное международное научное сотрудничество.',
          en: 'In 2020, the COVID-19 pandemic spread globally after the SARS-CoV-2 coronavirus was first identified in Wuhan, China, in late 2019. The virus caused an unprecedented number of infections, millions of deaths, and heavy pressure on health systems. Countries introduced lockdowns, closed borders, canceled mass events, and shifted work and education online. The world economy suffered a major shock, while everyday life changed for billions of people. The pandemic accelerated digitalization, telemedicine, remote collaboration, and international scientific cooperation.',
        },
      },
      {
        year: 2021,
        text: {
          ru: '2021 год ознаменовался масштабной вакцинацией населения против COVID-19 по всему миру. Были применены вакцины от компаний Pfizer/BioNTech, Moderna, AstraZeneca, Sinopharm, "Спутник V" и другие. Несмотря на проблемы с логистикой и недоверием в отдельных странах, миллиарды доз были введены в рекордные сроки. Это стало крупнейшей в истории глобальной вакцинационной кампанией, сыгравшей ключевую роль в снижении смертности и частоты тяжёлых случаев. Также в этом году началось активное развёртывание спутникового интернета Starlink от компании SpaceX, предоставляющего высокоскоростной доступ к сети в отдалённых и труднодоступных регионах, что открыло новый этап в доступности интернета по всему миру.',
          en: 'In 2021, large-scale COVID-19 vaccination campaigns took place around the world using vaccines from Pfizer/BioNTech, Moderna, AstraZeneca, Sinopharm, Sputnik V, and others. Despite logistical problems and distrust in some countries, billions of doses were delivered in record time. The campaign became the largest global vaccination effort in history and helped reduce deaths and severe disease. The year also saw the rapid expansion of Starlink satellite internet from SpaceX, bringing high-speed access to remote and hard-to-reach regions.',
        },
      },
      {
        year: 2022,
        text: {
          ru: '25 декабря 2021 года (по времени запуска) и 2022 года (по началу полноценной работы) был успешно выведен на орбиту космический телескоп James Webb — крупнейший и самый мощный телескоп в истории астрономии. Совместный проект NASA, ESA и CSA заменил телескоп Хаббл и был размещён в точке Лагранжа L2. James Webb оснащён зеркалом диаметром 6,5 метра и предназначен для наблюдения за ранней Вселенной, формированиями галактик, звёзд и экзопланет. Его инфракрасные инструменты позволяют заглянуть на миллиарды лет назад, исследуя процессы, происходившие вскоре после Большого взрыва. Телескоп открыл новую эру в астрономии, предоставив изображения с беспрецедентной детализацией и научной значимостью.',
          en: 'The James Webb Space Telescope was launched on December 25, 2021, and began full scientific operations in 2022. Built by NASA, ESA, and CSA, it became the largest and most powerful space telescope ever launched and was placed near the L2 Lagrange point. With a 6.5-meter mirror and infrared instruments, Webb observes the early universe, galaxy formation, stars, and exoplanets. Its images and data opened a new era in astronomy with unprecedented detail and scientific value.',
        },
      },
      {
        year: 2023,
        text: {
          ru: 'В 2023 году наблюдается стремительный рост популярности генеративного искусственного интеллекта. Модель ChatGPT от OpenAI, основанная на архитектуре GPT-4, становится массовым инструментом для общения, обучения, написания кода, генерации текстов и творческой поддержки. Параллельно развивается визуальный ИИ — такие системы, как Midjourney, DALL·E и Stable Diffusion, позволяют создавать фотореалистичные и стилизованные изображения по текстовому описанию. ИИ-технологии интегрируются в бизнес, образование, медиа и программирование. Это вызывает как восторг, так и опасения: обсуждаются вопросы авторского права, этики, подмены человеческого труда и регулирования новых технологий. 2023 год становится символом перехода от традиционного ПО к эпохе интеллектуальных ассистентов и цифрового творчества.',
          en: 'In 2023, generative artificial intelligence grew rapidly in popularity. ChatGPT from OpenAI, based on GPT-4, became a widely used tool for conversation, learning, coding, writing, and creative support. Visual AI systems such as Midjourney, DALL-E, and Stable Diffusion also advanced, allowing users to create realistic and stylized images from text prompts. AI tools entered business, education, media, and programming, raising both excitement and concerns about copyright, ethics, labor disruption, and regulation.',
        },
      },
      {
        year: 2024,
        text: {
          ru: 'В 2024 году продолжается активная подготовка к реализации программы NASA "Artemis", направленной на возвращение человека на Луну. Миссия "Artemis II", запланированная как первый пилотируемый облёт Луны с экипажем на борту корабля Orion, проходит финальные этапы подготовки. США, в партнёрстве с ESA, Японией и Канадой, формируют лунную программу как часть долгосрочной стратегии по созданию постоянного присутствия на Луне и подготовке к будущим миссиям на Марс. Также продолжается строительство окололунной станции Gateway, а частные компании, такие как SpaceX и Blue Origin, играют ключевую роль в поставках и технологиях. Лунная программа становится важнейшим этапом в новой эре освоения космоса человечеством.',
          en: 'In 2024, NASA continued preparations for the Artemis program, which aims to return humans to the Moon. Artemis II, planned as the first crewed lunar flyby using the Orion spacecraft, moved through final preparation stages. The United States, working with ESA, Japan, and Canada, framed the lunar program as part of a long-term strategy for a sustained presence on the Moon and future missions to Mars. Work also continued on the Gateway lunar station, with private companies such as SpaceX and Blue Origin playing important roles.',
        },
      },
    ],
  },
];

export const getLocalizedSegments = (language: Language): HistoricalSegment[] =>
  segmentsData.map((segment) => ({
    startYear: segment.startYear,
    endYear: segment.endYear,
    label: segment.label[language],
    events: segment.events.map((event) => ({
      year: event.year,
      text: event.text[language],
    })),
  }));
