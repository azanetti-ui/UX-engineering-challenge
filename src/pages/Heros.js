
import localFont from 'next/font/local';
import { Open_Sans } from 'next/font/google';

import Button from '../components/button/button';
import Input from '../components/input/input';
import { IoIosSearch } from "react-icons/io";


const AvantGarde = localFont({ src: './fonts/AvantGardeDemi.woff' })
const OpenSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400' , '600']
})

export default function Heros() {
  return (
<>
      <view>
        <div className="hero-wrapper">
        <div className="hero-img-wrapper"></div>
          <div className="hero-text-wrapper">
            <p className={OpenSans.className + ' heading-block caption'} >Caption</p>
            <h1 className={AvantGarde.className + ' heading-block h1'}>Title</h1>
            <p className={OpenSans.className + ' heading-block subtitle'}>Lorem ipsum dolor sit amet consectetur. Aliquam non facilisis sit purus. Parturient sagittis eu adipiscing congue dignissim tristique risus eu.</p>
            <div className="cta">
                <Button children={'Label'}></Button>
                <Button variant={'secondary'} children={'Label'}></Button>
            </div>
          </div>
        </div>
      </view>
      <view>
        <div className="hero-wrapper">
        <div className="hero-img-wrapper"></div>
          <div className="hero-text-wrapper">
            <p className={OpenSans.className + ' heading-block caption'} >Caption</p>
            <h1 className={AvantGarde.className + ' heading-block h1'}>Title</h1>
            <p className={OpenSans.className + ' heading-block subtitle'}>Lorem ipsum dolor sit amet consectetur. Aliquam non facilisis sit purus. Parturient sagittis eu adipiscing congue dignissim tristique risus eu.</p>
            <div className='cta'>
              <form className='input-addon'>
                <IoIosSearch className="input-icon"/>
                <Input></Input>   
              </form>
              <Button children={'Label'}></Button>
            </div>
          </div>
        </div>
      </view>
</>


 );
}
