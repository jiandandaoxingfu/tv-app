document.addEventListener('keydown', e => {
    e.preventDefault();
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
        /*
            焦点移到上一个聚焦元素的左侧元素，如果已经是最左侧元素，则无反应。
        */
        if( this.eleId % this.rowEleNum == 1 ) {
            // console.log('已经是最左边元素，不能向左');
        } else {
            let preEle = selector.item(this.PageId, this.RowId, this.eleId - 1);
            changeClass.remove(this.ele, 'focus');
            changeClass.remove(this.ele, 'tab');
            changeClass.add(preEle, 'focus');
            if( this.PageId == 0 ) {
                preEle.click();
                // changePage(this.eleId - 1);
            }
        }
    },

    keyUp: function() {
        /*
            如果上一个聚焦元素
                - 在页头Row中，则无反应。
                - 在页面Row中，焦点移到该Row上一行对应的Col。如果没有上一行，
                               焦点移到上一个Row最后一行对应的Col。如果没有上一个Row，
                               则进入页头相应的元素。
                               
        */
        let preEleId = this.eleId - this.rowEleNum; // 上一行对应元素的编号
        let preEle;
        if( preEleId > 0 ) { // 上一行
            preEle = selector.item(this.PageId, this.RowId, preEleId);
        } else if( this.RowId > 1 ){ // 进入上一个Row
            // 主要在于获取下一个获得焦点的元素的eleId
            let preRow = selector.Row(this.PageId, this.RowId - 1);
            let preRowEleCount = preRow.childNodes.length;
            let pre_rowEleNum = 24 / parseInt( preRow.firstChild.className.match( /ant-col-(\d+)/)[1] );
            let preRowNum = preRowEleCount / pre_rowEleNum; // Row的行数
            preEleId = Math.floor( this.eleId * pre_rowEleNum/this.rowEleNum );
            if( preEleId == 0 ) preEleId = 1;
            preEleId += (preRowNum - 1) * pre_rowEleNum;
            preEle = selector.item(this.PageId, this.RowId - 1, preEleId);
        } else if( this.PageId > 0 ){ // 进入页头按钮
            preEle = selector.item(0, 1, this.PageId);
        } else {
            // console.log('已经到顶部了，不能向上');
        }
        if( preEle ) {
            changeClass.remove(this.ele, 'focus');
            changeClass.remove(preEle, 'tab');
            changeClass.add(preEle, 'focus');
            scroll.scroll2middle(preEle);
        }
    }, 

    keyRight: function() {
        /*
            焦点移到上一个聚焦元素的右侧元素，如果已经是最右侧元素，则无反应。
        */
        if( this.eleId % this.rowEleNum == 0 ) {
            // console.log('已经是最右边元素，不能向右');
        } else {
            let nextEle = selector.item(this.PageId, this.RowId, this.eleId + 1);
            changeClass.remove(this.ele, 'focus');
            changeClass.remove(this.ele, 'tab');
            changeClass.add(nextEle, 'focus');
            if( this.PageId == 0 ) {
                nextEle.click();
                // changePage(this.eleId + 1);
            }
        }
    }, 

    keyDown: function() {
        /*
            如果上一个聚焦元素
                - 在页头Row中，焦点移到相应页面第一个Row的第一个Col (默认页头只有一个Row，且只有一行。)
                - 在页面Row中，焦点移到该Row下一行对应的Col。如果没有下一行，
                               焦点移到下一个Row第一行对应的Col。如果没有下一个Row，
                               则无反应。
        */
        let nextEleId = this.eleId + this.rowEleNum; // 下一行对应元素的编号
        let nextEle;
        if( nextEleId <= this.RowEleCount ) { // 下一行
            nextEle = selector.item(this.PageId, this.RowId, nextEleId);
        } else if( this.PageId == 0 ) { // 从页头按钮下来
            nextEle = selector.item(this.eleId, 1, 1); // 页头按钮id对应下面PageId
        } else if( selector.Row(this.PageId, this.RowId + 1) ) {  // 下个Row
            // 主要在于获取下一个获得焦点的元素的eleId
            let nextRow = selector.Row(this.PageId, this.RowId + 1);
            let next_rowEleNum = 24 / parseInt( nextRow.firstChild.className.match( /ant-col-(\d+)/)[1] );
            let rowNum = this.RowEleCount / this.rowEleNum;
            let eleId_in_row = this.eleId - this.rowEleNum * (rowNum - 1);
            nextEleId = Math.floor( eleId_in_row * next_rowEleNum/this.rowEleNum );
            if( nextEleId == 0 ) nextEleId = 1;
            nextEle = selector.item(this.PageId, this.RowId + 1, nextEleId);
        } else {
            // console.log('已经是底部，不能向下');
        }
        if( nextEle ) {
            changeClass.remove(this.ele, 'focus');
            if( this.PageId == 0 ) {
                changeClass.add(this.ele, 'tab');
            }
            changeClass.add(nextEle, 'focus');
            scroll.scroll2middle(nextEle);
        }
    }, 

    keyEnter: function() {
        
    }, 

    keyAlt: function() {
        
    }
}

// 页面切换：在更新state值时已经更新。
// function changePage(PageId) {
//     let lastPage = document.querySelector('.page.display');
//     let nowPage = selector.Page(PageId);
//     lastPage.setAttribute('class', 'page hidden');
//     nowPage.setAttribute('class', 'page display');
// }