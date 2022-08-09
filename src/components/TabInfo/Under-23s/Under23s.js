import CardInfo from "../../Cards/Card"
import classNames from "classnames/bind"
import styles from './Under23s.css'

const cx = classNames.bind(styles)

function Under23s ()
{
    return(
        <div className={cx('wrapper')}>
            <div className={cx('goalkeeper')}>
                <h1>Goalkeepers</h1>

                <div className={cx('nb')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/67/1000239/Nathan_Bishop1626940745920.jpg'}   
                        playerName={'NATHAN BISHOP'}
                        playerNumber={'30'}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('mk')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/106/1010234/AL3I9513_202108131136118971629202322915.webp'}   
                        playerName={'MATEJ KOVAR'}
                        playerNumber={'51'}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('om')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/112/1011763/Ondrej_Mastny21656626753303.webp'}   
                        playerName={'ONDREJ MASTNY'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('rv')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/112/1011785/Radek_Vitek61656626894856.webp'}   
                        playerName={'RADEK VITEK'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('dm')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/111/1011711/Dermot_Mee61656627045649.webp'}   
                        playerName={'DERMOT MEE'}
                        playerNumber={''}
                    />
                </div>
            </div>
            <div className={cx('defenders')}>
                <h1>Defenders</h1>

                <div className={cx('el')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/112/1011727/Ethan_Laird41656627151275.webp'}   
                        playerName={'ETHAN LAIRD'}
                        playerNumber={'41'}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('wf')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/67/1000238/Will_Fish1626940831413.jpg'}   
                        playerName={'WILL FISH'}
                        playerNumber={'48'}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('db')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/67/1000237/Di_Shon_Bernard1626940645200.jpg'}   
                        playerName={"DI'SHON BERNARD"}
                        playerNumber={'58'}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('lp')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/113/1012129/Logan_Pye61656628509328.webp'}   
                        playerName={'LOGAN PYE'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('rb')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/113/1012159/Rhys_Bennett61656628298238.webp'}   
                        playerName={'RHYS BENNETT'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('bh')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/111/1011687/Bjorn_Hardley61629199151622.webp'}   
                        playerName={'BJORN HARDLEY'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('mj')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106668/Marc_Jurado_71656628599416.webp'}   
                        playerName={'MARC JURADO'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('wk')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/195/1033182/MUFC_Academy_Profiles_Extras_61656628412464.webp'}   
                        playerName={'WILLY KAMBWALA'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('af')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/177/1094104/Alvaro_Fernandez_grid_image_May_20221653569626933.webp'}   
                        playerName={'ALVARO FERNANDEZ'}
                        playerNumber={''}
                    />
                </div>
            </div>
            <div className={cx('midfielders')}>
                <h1>Midfielders</h1>

                <div className={cx('eg')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/67/1000235/Ethan_Galbraith1626941024597.jpg'}   
                        playerName={'ETHAN GALBRAITH'}
                        playerNumber={'54'}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('ih')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106666/Isak_Hansen_Aaroen_71656628903113.webp'}   
                        playerName={'ISAK HANSEN'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('cs')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106654/Charlie_Savage_no_Kohler1656608225936.webp'}   
                        playerName={"CHARLIE SAVAGE"}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('cw')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106656/Charlie_Wellens_71656608828965.webp'}   
                        playerName={'CHARLIE WELLENS'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('of')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106672/Omari_Forson_71656629049321.webp'}   
                        playerName={'OMARI FORSON'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('zi')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/113/1012189/Zidane_Iqbal61629212047354.webp'}   
                        playerName={'ZIDANE IQBAL'}
                        playerNumber={''}
                    />
                </div>
            </div>
            <div className={cx('forwards')}>
                <h1>Forwards</h1>

                <div className={cx('ag')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/225/1106203/Player_Profile_Thumbnail_Mens_Garnacho1656601154930.jpg'}   
                        playerName={'ALEJANDRO GARNACHO'}
                        playerNumber={'75'}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('mm')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106669/Mateo_Mejia_71656629247046.webp'}   
                        playerName={'MATEO MEJIA'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('ne')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106671/Noam_Emeran_71656629152589.webp'}   
                        playerName={"NOAM EMERAN"}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('jh')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/15/195/1033190/MUFC_Academy_Profiles_Extras_141656629357956.webp'}   
                        playerName={'JOE HUGILL'}
                        playerNumber={''}
                    />
                </div>

                &nbsp;&nbsp;

                <div className={cx('cm')}>
                    <CardInfo 
                        image={'https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106653/Charlie_McNeill_71656607338078.webp'}   
                        playerName={'CHARLIE MCNEILL'}
                        playerNumber={''}
                    />
                </div>
            </div>
        </div>
    )
}

export default Under23s