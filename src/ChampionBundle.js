import rengarImage from './images/champion-images/rengar.jpg'
import velkozImage from './images/champion-images/velkoz.jpg'
import volibearImage from './images/champion-images/volibear.jpg'
import ahriImage from './images/champion-images/ahri.jpg'
import annieImage from './images/champion-images/annie.jpg'
import brandImage from './images/champion-images/brand.jpg'
import dariusImage from './images/champion-images/darius.jpg'
import ekkoImage from './images/champion-images/ekko.jpg'
import ezrealImage from './images/champion-images/ezreal.jpg'
import katarinaImage from './images/champion-images/katarina.jpg'
import lucianImage from './images/champion-images/lucian.jpg'
import syndraImage from './images/champion-images/syndra.jpg'
import taliyahImage from './images/champion-images/taliyah.jpg'
import vayneImage from './images/champion-images/vayne.jpg'
import veigarImage from './images/champion-images/veigar.jpg'
import viktorImage from './images/champion-images/viktor.jpg'
import warwickImage from './images/champion-images/warwick.jpg'
import zedImage from './images/champion-images/zed.jpg'
import Champion from './Champion';
class ChampionBundle {

    constructor(){
        this.championList = [
            new Champion(rengarImage, ['"Tonight, we hunt!"']),
            new Champion(velkozImage, ['"Bones are surprisingly inflexible."']),
            new Champion(volibearImage, ['"Let the storm follow in my wake."']),
            new Champion(ahriImage, ['"Playtimes over."']),
            new Champion(annieImage, ['"Lets count to five!"']),
            new Champion(brandImage, ['"Im on a short fuse."']),
            new Champion(dariusImage, ['"Strength above all."']),
            new Champion(ekkoImage, ['"I could make this hurt less."']),
            new Champion(ezrealImage, ['"I always know a shortcut."']),
            new Champion(katarinaImage, ['"Keep friends close and enemies guessing."']),
            new Champion(lucianImage, ['"They never get tired of dying."']),
            new Champion(syndraImage, ['"I am in control."']),
            new Champion(taliyahImage, ['"Know the loom. Be the stone."']),
            new Champion(vayneImage, ['"I hear the innocent cry out."']),
            new Champion(veigarImage, ['"Even death trembles in my presence."']),
            new Champion(viktorImage, ['"I am the first of many."']),
            new Champion(warwickImage, ['"Pain... nothing!"']),
            new Champion(zedImage, ['"No technique is forbidden."'])
        ]

    }

    getList() {
        return this.championList;
    }
}

export default ChampionBundle;