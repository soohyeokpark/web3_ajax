var Designer = {
    "maker": "parkdex",

    setBody: function (button) {
        var element = document.querySelector('body');
        element.style.backgroundColor = button.value === 'day' ? 'white' : 'black';
        element.style.color = button.value === 'day' ? 'black' : 'white';
        button.value = button.value === 'day' ? 'night' : 'day';
    },

    setLink: function () {
        var aList = document.querySelectorAll('a');
        var i = 0;
        for (i = 0; i < aList.length; i++) {
            aList[i].style.color = Designer.getRandomColor();
        }
    },

    getRandomColor: function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

function nightDayHandler(button) {
    Designer.setBody(button);
    Designer.setLink();
    //alert("maker:" + Designer.maker);
}