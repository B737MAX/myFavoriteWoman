const array = ["Почти месяц назад мы познакомились", 
                "На следующее утро, после нашего знакомства, когда я проснулся, моей первой мыслью было", 
                'написать тебе "Доброе Утро"', 
                "Я был удивлен...", 
                "Мне редко хочется кому либо писать или звонить", 
                "Мне было легко с тобой общаться на разные темы, что то обсуждать", 
                "Тогда я решил пригласить тебя на свидание", 
                'Это свидание было точно моим "ТОП 1 Фейлом 2021"', 
                'но', 
                "я кое что понял для себя", 
                "Встреча с тобой изменила меня", 
                "Я подкоректировал свои цели", 
                "начал работать над своими слабыми сторонами", 
                "постепенно улучшаю себя", 
                "У меня мало людей, которые меня мотивируют и ради которых я готов меняться",
                "Которых я ценю, уважаю и прислушиваюсь к их мнению",
                "За этот короткий промежуток времени",
                "Ты стала одной из таких людей",
                "Для меня ты больше чем подруга или знакомая",
                "Ты такая хрупкая на вид",
                "и в то же время сильная",
                "умная и красивая",
                "добрая (злой я тебя не видел)",
                "у тебя стройная фигура",
                "очень красивый голос",
                "и еще ты печёшь вппетитную выпечку )",
                "Я не думал что смогу что то чувствовать к кому нибудь, после определённых событий в моей жизни",
                "Но Ты постепенно заполняешь ту пустоту которая образовалась у меня внутри за полседние годы",
                "У меня к тебе по настоящему теплые чувства...",
                "И мне это нравится",
                "Пусть даже чувства будут не взаимны",
                "Я очень рад что у меня есть возможность",
                'каждый день писать тебе утром "Доброе утро"',
                'и перед сном "Спокойной ночи"',
                'Я рад тому что в течении дня могу думать о тебе',
                'о том как ты себя чувствуешь',
                'о том как твои дела',
                'о твоем настроении',
                'голодна ли ты',
                'тепло ли одета',
                'Благодаря тебе я становлюсь лучше с каждым новым днеи',
                'Дария',
                'Спасибо дорогая, за то что ты есть!!!'];

const text = document.querySelector(`.text`);
const span = document.querySelector(`.toggle`);
let i = 0;

function textChange() {
    if(i < array.length){
        span.classList.add('span');
        setTimeout(function(){
            span.textContent = array[i];
            setTimeout(function(){
                span.classList.remove('span');
            },3200);
            setTimeout(function(){
                i++;
            }, 1500)
        }, 4700);
    }else if(i == array.length) {
        span.textContent = array[i - 1];
    }

};

text.addEventListener('click', textChange);




