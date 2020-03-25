class KeyControl {
    constructor() {
        this.keyName = {
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
    }

    listen() {
        document.addEventListener('keydown', e => {
            e = e || window.event;
            let keyCode = e.which || e.keyCode;
            let keyName = this.keyName[keyCode];
            if( keyName === "KeyRight" || keyName === "KeyLeft" ) {
                e.preventDefault();
            }
            this.keyPress(keyName);
        })
    }

    keyPress(keyName) {
        switch (keyName) {
            case 'KeyLeft':
                this.keyLeft();
                break;
            case 'KeyUp':
                this.keyUp();
                break;
            case 'KeyRight':
                this.keyRight();
                break;
            case 'KeyDown':
                this.keyDown();
                break;
            case 'KeyEnter':
                this.keyEnter();
                break;
            default:
                break;
        }
    }

    getHorizonEles() {
        let focusEleTop = remoteControl.elesTop[remoteControl.focusEleIndex];
        let focusEleBottom = remoteControl.elesBottom[remoteControl.focusEleIndex];
        let horizonIndex = [];
        remoteControl.elesTop.forEach( (top, i) => {
            let bottom = remoteControl.elesBottom[i];
            if( focusEleTop < bottom && top < focusEleBottom ) {
                horizonIndex.push(i);
            }
        })
        return horizonIndex;
    }

    getVerticleEles() {
        let focusEleLeft = remoteControl.elesLeft[remoteControl.focusEleIndex];
        let focusEleRight = remoteControl.elesRight[remoteControl.focusEleIndex];
        let verticleIndex = [];
        remoteControl.elesLeft.forEach( (left, i) => {
            let right = remoteControl.elesRight[i];
            if( focusEleLeft < right && left < focusEleRight ) {
                verticleIndex.push(i);
            }
        })
        return verticleIndex;
    }

    keyLeft() {
        let elesIndex = this.getHorizonEles();
        let nextEleIndex = -1;
        let focusEleLeft = remoteControl.elesLeft[remoteControl.focusEleIndex];
        let dists = elesIndex.map( i => remoteControl.elesLeft[i] - focusEleLeft );
        let minDist = -10000;
        for(let i=0; i<dists.length; i++) {
            if( dists[i] < 0 && dists[i] > minDist ) {
                minDist = dists[i];
                nextEleIndex = elesIndex[i];
            }
        }
        if( nextEleIndex === -1 ) return;
        remoteControl.eles[remoteControl.focusEleIndex].setAttribute('class', remoteControl.eles[remoteControl.focusEleIndex].getAttribute('class').replace(" myfocus", "") );
        remoteControl.eles[nextEleIndex].setAttribute('class', remoteControl.eles[nextEleIndex].getAttribute('class') + " myfocus");
        remoteControl.focusEleIndex = nextEleIndex;
    }

    keyRight() {
        let elesIndex = this.getHorizonEles();
        let nextEleIndex = -1;
        let focusEleRight = remoteControl.elesRight[remoteControl.focusEleIndex];
        let dists = elesIndex.map( i => remoteControl.elesRight[i] - focusEleRight );
        let maxDist = 10000;
        for(let i=0; i<dists.length; i++) {
            if( dists[i] > 0 && dists[i] < maxDist ) {
                maxDist = dists[i];
                nextEleIndex = elesIndex[i];
            }
        }
        if( nextEleIndex === -1 ) return;
        remoteControl.eles[remoteControl.focusEleIndex].setAttribute('class', remoteControl.eles[remoteControl.focusEleIndex].getAttribute('class').replace(" myfocus", "") );
        remoteControl.eles[nextEleIndex].setAttribute('class', remoteControl.eles[nextEleIndex].getAttribute('class') + " myfocus");
        remoteControl.focusEleIndex = nextEleIndex;
    }

    keyUp() {
        let elesIndex = this.getVerticleEles();
        let nextEleIndex = -1;
        let focusEleTop = remoteControl.elesTop[remoteControl.focusEleIndex];
        let dists = elesIndex.map( i => remoteControl.elesTop[i] - focusEleTop );
        let minDist = -10000;
        for(let i=0; i<dists.length; i++) {
            if( dists[i] < 0 && dists[i] > minDist ) {
                minDist = dists[i];
                nextEleIndex = elesIndex[i];
            }
        }
        if( nextEleIndex === -1 ) return;
        remoteControl.eles[remoteControl.focusEleIndex].setAttribute('class', remoteControl.eles[remoteControl.focusEleIndex].getAttribute('class').replace(" myfocus", "") );
        remoteControl.eles[nextEleIndex].setAttribute('class', remoteControl.eles[nextEleIndex].getAttribute('class') + " myfocus");
        remoteControl.focusEleIndex = nextEleIndex;
        scroll.scroll2middle(remoteControl.eles[nextEleIndex]);
    }

    keyDown() {
        let elesIndex = this.getVerticleEles();
        let nextEleIndex = -1;
        let focusEleBottom = remoteControl.elesBottom[remoteControl.focusEleIndex];
        let dists = elesIndex.map( i => remoteControl.elesBottom[i] - focusEleBottom );
        let maxDist = 10000;
        for(let i=0; i<dists.length; i++) {
            if( dists[i] > 0 && dists[i] < maxDist ) {
                maxDist = dists[i];
                nextEleIndex = elesIndex[i];
            }
        }
        if( nextEleIndex === -1 ) return;
        remoteControl.eles[remoteControl.focusEleIndex].setAttribute('class', remoteControl.eles[remoteControl.focusEleIndex].getAttribute('class').replace(" myfocus", "") );
        remoteControl.eles[nextEleIndex].setAttribute('class', remoteControl.eles[nextEleIndex].getAttribute('class') + " myfocus");
        remoteControl.focusEleIndex = nextEleIndex;
        scroll.scroll2middle(remoteControl.eles[nextEleIndex]);
        
    }

    keyEnter() {
        document.querySelector('.myfocus').click();
    }
}

var keyControl = new KeyControl();
keyControl.listen();