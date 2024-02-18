const btn = document.querySelector('.btn');
const mobile = document.querySelector('.mobile-menu');
const icon = document.querySelector('.icon');
const cards = document.querySelector('.cards');


btn.addEventListener('click', function(){
    mobile.classList.add('show')
})

icon.addEventListener('click', function(){
    mobile.classList.remove('show')
   
})


function underMenu(menu, icon,increase) {
    const submenu = document.querySelector(menu);
    const plus = document.querySelector(icon);
    const increas = document.querySelector(increase);
    plus.addEventListener('click', function () {
        submenu.classList.toggle('show')
        increas.classList.toggle('show')

    });
    
}

underMenu('.submenu','.plus','.increase');
underMenu('.submenu2','.plus2','.increase2');

underMenu('.submenu3','.plus3','.increase3');
underMenu('.submenu4','.plus4','.increase4');



// plus.addEventListener('click', function () {
//     submenu.classList.toggle('show')
// });

// plus2.addEventListener('click', function () {
//     submenu2.classList.toggle('show')
// })
// plus3.addEventListener('click', function () {
//     submenu3.classList.toggle('show')
// })
// plus4.addEventListener('click', function () {
//     submenu4.classList.toggle('show')
// })


const data = [
    {
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdMYkyd_XqHcDqErnx5IeFpQm3Ho03pN3MmA&usqp=CAU'
    },
    {
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSSSVpwEXhn3BNXGj5QbBEuJlyuiBIt05Xyw&usqp=CAU'
    },
    {
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEo06qafN4D8UkXl1M6Q2CQJFaGjaza1AzKw&usqp=CAU'
    }, {
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsVWNj_MmM-QrtC2yAEpa7uOO1kJ9jomdPnr6hDoUCXUm2jMa5Z24IqQ0ihsWyXkFhsA&usqp=CAU'
    }, {
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHPEU0oiA9JbKq3gBErR3YFdTNksnLWZY_w&usqp=CAU'
    }, {
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvrf0FTaxRbf9HRCz684QO8NIgS1WEo61wLw&usqp=CAU'
    },
]

let writer=''

data.forEach(function (img) {
    writer += `
    <div class="car col-sm-12 col-md-4 col-lg-4">
                        <div class="inner">
                            <img src=${img.imgUrl} alt="image">
                        </div>
                    </div>
    `
})

cards.innerHTML = writer;






const inner = document.querySelectorAll('.inner');
inner.forEach(element => {
    element.addEventListener('mouseover',function(){
        element.style.scale = '1.5';
        
    })
});
inner.forEach(element => {
    element.addEventListener('mouseout',function(){
        element.style.scale = '0.9';
        
    })
});
console.log(inner);