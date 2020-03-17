document.addEventListener('keydown', e => {
    var KeyName = {
        19:'KeyUp',
        38:'KeyUp', //Keyboard
        20:'KeyDown',
        40:'KeyDown', //Keyboard
        21:'KeyLeft',
        37:'KeyLeft', //Keyboard
        22:'KeyRight',
        39:'KeyRight', //Keyboard
        23:'KeyEnter',
        13:'KeyEnter', //Keyboard
        4:'KeyAlt',
        18:'KeyAlt', //Keyboard Alt键
        27:'KeyAlt', //Keyboard ESC
        24:'KeyAlt', //Keyboard ESC
        66:'KeyEnter',
        111:'KeyAlt'
    };
    e = e || window.event;
    var KeyCode = e.which || e.keyCode;
    keyPress(KeyName[KeyCode]);
});

function keyPress(KeyName) {
    keyController.getObj();
    switch (KeyName) {
        case 'KeyLeft':
            keyController.keyLeft();
            break;
        case 'KeyUp':
            keyController.keyUp();
            break;
        case 'KeyRight':
            keyController.keyRight();
            break;
        case 'KeyDown':
            keyController.keyDown();
            break;
        case 'KeyEnter':
            keyController.keyEnter();
            break;
        case 'KeyAlt':
            keyController.keyAlt();
            break;
    };
};

var keyController = {
    getObj: function() {
        this.ele = document.querySelector('.focus') ||
                    document.querySelector('.focus') ||
                    document.querySelector('.focus');
        let idArr = this.ele.id.match(/\d+/g).map( d => parseInt(d));
        this.PageId = idArr[0];
        this.RowId = idArr[1];
        this.eleId = idArr[2];
        let Col = this.ele.parentNode;
        let Row = Col.parentNode;
        this.RowEleCount = Row.childNodes.length; // 所在Row的元素总数
        this.rowEleNum = 24 / parseInt( Col.className.match(/ant-col-(\d+)/)[1] ); // 所在Row的行元素数
    },

    keyLeft: function() {
        if( this.eleId % this.rowEleNum == 1 ) {
            // console.log('已经是最左边元素，不能向左');
        } else {
            let preEle = selector.item(this.PageId, this.RowId, this.eleId - 1);
            changeClass.remove(this.ele, 'focus');
            changeClass.add(preEle, 'focus');
            if( this.PageId == 0 ) {
                changePage(this.eleId - 1);
            }
        }
    },

    keyUp: function() {
        let preEleId = this.eleId - this.rowEleNum; // 上一行对应元素的编号
        let preEle;
        if( preEleId > 0 ) { // 上一行
            preEle = selector.item(this.PageId, this.RowId, preEleId);
        } else if( this.RowId > 1 ){ // 进入上一个Row
            preEleId = 1;
            preEle = selector.item(this.PageId, this.RowId - 1, preEleId);
        } else if( this.PageId > 0 ){ // 进入页头按钮
            preEle = selector.item(0, 1, this.PageId);
            changePage(1);
        } else {
            // console.log('已经到顶部了，不能向上');
        }
        if( preEle ) {
            changeClass.remove(this.ele, 'focus');
            changeClass.add(preEle, 'focus');
            scroll.scroll2middle(preEle);
        }
    }, 

    keyRight: function() {
        if( this.eleId % this.rowEleNum == 0 ) {
            console.log('已经是最右边元素，不能向右');
        } else {
            let nextEle = selector.item(this.PageId, this.RowId, this.eleId + 1);
            changeClass.remove(this.ele, 'focus');
            changeClass.add(nextEle, 'focus');
            if( this.PageId == 0 ) {
                changePage(this.eleId + 1);
            }
        }
    }, 

    keyDown: function() {
        let nextEleId = this.eleId + this.rowEleNum; // 下一行对应元素的编号
        let nextEle;
        if( nextEleId <= this.RowEleCount ) { // 下一行
            nextEle = selector.item(this.PageId, this.RowId, nextEleId);
        } else if( this.PageId == 0 ) { // 从页头按钮下来
            nextEle = selector.item(this.eleId, 1, 1); // 页头按钮id对应下面PageId
        } else if( selector.Row(this.PageId, this.RowId + 1) ) {  // 下个Row
            nextEleId = 1;
            nextEle = selector.item(this.PageId, this.RowId + 1, nextEleId);
        } else {
            // console.log('已经是底部，不能向下');
        }
        if( nextEle ) {
            changeClass.remove(this.ele, 'focus');
            changeClass.add(nextEle, 'focus');
            scroll.scroll2middle(nextEle);
        }
    }, 

    keyEnter: function() {
        alert(1);
    }, 

    keyAlt: function() {
        console.log(1);
    },
}

// 页面切换
function changePage(PageId) {
    let lastPage = document.querySelector('.page.display');
    let nowPage = selector.Page(PageId);
    lastPage.setAttribute('class', 'page hidden');
    nowPage.setAttribute('class', 'page display');
}