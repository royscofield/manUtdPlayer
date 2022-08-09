import CardInfo from "../../Cards/Card"
import classNames from "classnames/bind"
import styles from './Under18.css'

const cx = classNames.bind(styles)

function Under18s () {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('goalkeeper')}>
                <h1>Goalkeepers</h1>

                <div className={cx('tw')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/113/1012173/Tom_Wooster21656629622699.webp'}   
                        playerName={'TOM WOOSTER'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('eh')}>    
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106664/Eric_Hanbury_71656629503233.webp'}   
                        playerName={'ERIC HANBURY'}
                        playerNumber={''}
                        />
                </div>
            </div>
            <div className={cx('defenders')}>
                <h1>Defenders</h1>

                <div className={cx('ml')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/15/1052549/_RMR4937_copy_26e555d1_f9cb_4244_a546_78addc16ab531648719379416.webp'}   
                        playerName={'MARCUS LAWRENCE'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('tf')}>    
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106677/Tyler_Fredricson_71656629709342.webp'}   
                        playerName={'TYLER FREDRICSON'}
                        playerNumber={''}
                        />
                </div>

                &nbsp;&nbsp;

                <div className={cx('mo')}>    
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106670/Maxi_Oyedele_71656630069002.webp'}   
                        playerName={'MAXIMILLIAN OYEDELE'}
                        playerNumber={''}
                        />
                </div>

                &nbsp;&nbsp;

                <div className={cx('sm')}>    
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106674/Sam_Murray_71656629888896.webp'}   
                        playerName={'SAM MURRAY'}
                        playerNumber={''}
                        />
                </div>

                &nbsp;&nbsp;

                <div className={cx('sa')}>    
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106676/Sonny_Aljofree1656629790256.webp'}   
                        playerName={'SONNY ALJOFREE'}
                        playerNumber={''}
                        />
                </div>
            </div>
            <div className={cx('midfielders')}>
                <h1>Midfielders</h1>

                <div className={cx('sm')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106673/Sam_Mather_71656629969706.webp'}   
                        playerName={'SAM MATHER'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('km')}>    
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106667/Kobbie_Mainoo_71656630849796.webp'}   
                        playerName={'KOBBIE MAINOO'}
                        playerNumber={''}
                        />
                </div>

                &nbsp;&nbsp;

                <div className={cx('dg')}>    
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106662/Daniel_Gore_71656630627152.webp'}   
                        playerName={'DANIEL GORE'}
                        playerNumber={''}
                        />
                </div>
            </div>
            <div className={cx('forwards')}>
                <h1>Forwards</h1>

                <div className={cx('mn')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/113/1012135/Manni_Norkett61656630969695.webp'}   
                        playerName={'MANNI MORKETT'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('ee')}>    
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106665/Ethan_Ennis_31656630728230.webp'}   
                        playerName={'ETHAN ENNIS'}
                        playerNumber={''}
                        />
                </div>
            </div>
        </div>
    )
}

export default Under18s