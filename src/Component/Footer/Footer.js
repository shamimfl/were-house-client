import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>

      <div className='md:flex items-center justify-around mt-5'>
        <div className='flex items-center justify-center'>
          <img className='h-16' src="https://cdn.iconscout.com/icon/free/png-256/electric-3421954-2854380.png" alt="" />
          <h1 className='text-center text-xl text-black font-bold'>Electronic Were House</h1>
        </div>
        <div className='flex justify-center font-bold'>
          <div>
            <h1>Community</h1>
            <p>About US</p>
            <h1>Getting Started</h1>
            <h1>Guidelines and how to</h1>
            <h1>Resources</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <img className='p-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADmElEQVRoge3aTYxdYxgH8J8Wd0QMRUuIaNKphvjYiEhQG2k1QSwsqpVYdIGEqG5s7SRiUUGFsJHYSKy0pRKJr8aksfE5M53W15CgSGUiaGuuxXOP3Jyee+55zz135i76T57Nve/zvP//+/m873s4hdHCaQ3GWoFbcROuwhqswtmd///Ez/gaX+EjvI+jDXKojRa2Yh9OoJ1oJ/AWtnRiLTrOwg78WIFsVfsB2zG2WCI24VCDAvI2i43DFNDCM0MUkLdXRc83iovwySKKyOyAWDAawWrR3YstIrODHQ4DYSWml1BEZodwcV0RY5ZmOJUNs1pL9AsjQD5vz6aK2DQCpHvZhqoiWpgZAcK9bFbFTXPHCJDtZ4/2E9HSbNqRt3k8ievFijiBbfgyV+4zkUz2ijOnz8TfWpHQ3o6lDomJHvWejp3YJebA+grx7i0Tsq8iqXtEev5OxfJ/YV1ZxV24BIfxXZ+Ye3sFWKF6Kn5tx+dM1Zbp5yuKWC5WzKvxRp+YxzFeFOTuiiLauCHnexe+KSmfks0uF8Kr8LizKMDTCUIeKvAfw4NOnrjdPVgFLyXweKoowO6EAJ+KCdoL14hD0mvY7+QeLMP+BB5vFgU4mBDgqOjBYeBwAo/pzKm7Vc9PqOxmXCbS628HYV2AlCz3gqIf/1G9Je4bhGkJ1iZwaOPvzHFZzQofHsC3DI2c1X+V1hpPNFFpDikLThtHioLUyXhfFuf5JrBG+t3YVObcPTxma1T+m9iUzq3hm8fjYjNMwf+cu4VMFRTsh3HRK3/U8O3GFbi/hl8h55QUJbMFPFCDQDfOwGSNutu4oyjgeerd3/6LV9S/sklJjbrtmB5JI7xdM2hmu5SnLnk8NkBdu8sCb6kZ9F2RflfFMnFSHKTRNncHzL+PtESuc2kJiQ9E0nhErBrv4acEERNiKK5P8MljrhPnWFmh7fpP8NdxY2Lla8W9VEoq1MseyQcverEaw+d6n6+7MYU9+Bhf4Hext4yLJHSdSOFvF8KbeCGbwXWiQfpio8FbbRi2gNtSlT83AsTztjNVBDHxD4wA+cwmxWVHLVxodJ4VBk5OV0s7BjdtM7h8UBEZVlmaYTYprlYbRfYYurBIIl405Lf3DYY71KbVWGLroiWu9ucaFPC92LGX5AuIlrgV3yPuYlPJHxdZ7GYDLK00+1HNuPio5hZcKVKclTin8/88fhFL6RQ+FB/VzDfI4RRGBv8BbySMoggeUg0AAAAASUVORK5CYII=" />

        <img className='p-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC+klEQVRoge2ZPWgUQRTHfxv1xJggfiBaqAE9LYIgio3oIQgSsTJRBC00jaWdiKYJWmiRxkYh2oiNChaC4mchMYLYGINWKopdwGguiReNmLWYXdgbdteZ3be7J9wfXrFv5t57v5vZuZk5aKqpTOQIxmoDKp51AmVgpecHmAbGgPfAO2AIeO75C5cD7ANuAz8B19JmgFtAF7JfqpUOAaMRBSaxEaA7T4Ay8FQQQLfHwIasIXqAiQwhfJsEjmQB4AD9OQDodhHBd8cBrhQA4dtlKZgLBUL4dj4txOEGgPDtaFKIMjAlVMQMcA21ZJeB5cASYCnQAWwGBv4RowqsTwIitcQ+AVYb5Os1iPXQFuKgEMR9YL5hThMQFzhgCuEg84v9FTWFTGUK8pqQVawlJGAXas6m1SAwLhBH1xZgr+4MG/ZeoYQ3Y9q2AceAVQFfh0Xs48CjuA7tJNvFhq0w82IgfqWMXwNag0H1qbULWBhHaqhPwJ+ItpNAKWX8RcDOoEMHqaRM4Ksa07ZHKMfu4IMO0imU5EeE30GdGiVUV6sOslEoiRvhX+CZhOpq1UFWCCXJQ3W16iBt/D9qDz6Ybh/i1A0803y/I/rOAssi2s4Apyzy1v266yA17JfGaeC7Rf+ovmst804FH/SpNWYZTFKbLPvX1aqDfExXS2K1YL9iftADBPUmVTnJtQZty2Gg0eCD/o68SFBEGfim+apo35gnB9ga4t+eIO9wXGMr6uWVOFCFqSQQ20XtHBYHA+tTqwY8iCNtEN1D2waFHayu5lNLKg2adHKAtzTu1BoJCxw2Ii7QZ0JckM7afiDNdVBWI2J9HQTqDD3ZQCATxGxjwqaWr8+oC4Kos0WecoETwJc0Qc5R/Ij0pwEI6lKBIANSEL5OA3M5gswhOBK6elDniaxBxrG4402qdagtQlYgd1G74dy0H3gVUUwSkJeo/+wLUwW4gdq624JMAtcRuBiUuHwY8qyEusbcQfTlgwvcQR3ghlHnn1mBGppqKiv9BbQaq8hoJU0EAAAAAElFTkSuQmCC" />

        <img className='p-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACz0lEQVRoge2aXUtUQRjHf2Z0lEiS0gKVhLqpr1DpjRiWH6DNb7AQhR8juigKotvoG7QaRjeSgVnXuq5LF21dlF1IL5C1uF08Z+A0zDk7c94N//Cgzpzz8P85c2bnPLNwoHKpJ8Vcg8AkcBG4AJwFhoGjfv9P4DPwHlgHVoBlYCdFD7HlAXPAEtAGOo7RBp4DN/xcuasfmAc+WZi1jY/AbaAvL4gZoJkigB5bwJUsATzgfoYAejxBRj5VnQLe5QihYg1ZMFLRODLceUOoaPgeEmkIqBcIoaIJnI4L0Ucx0ylqmsVaoh+VwLweD1whZkpgOiymbSH6sfucqAEjwCiwmCNIA8spNm+ZcDRwz1iOIB3gVjcID/ttR5EgLbqMypxDskUfZgzZ+OUJ0gEqUSBLBRiKGwtB48H3kUFgG+iNIi2R2sAJ4BvAoUDHJPsHAuAwMKH+CIJcckzUo4VN/wpwHVm2PeQZq/jtcTRhaqzhNkd1deuvdjFVBf44enhmStTIGMRGVUcPdVOSryUAAZlmth62TQl2cwCZRXaxP/yf1wzXVBw8/CoCZDYkz1XtupGkIFlPrbched5o1/U6eDBOrc2MQcJG3PRftfWwoW4Ifo40TXQp6khIe5LC3Jb6JQiyniBhUTKOyOsCjCTVK1Pjcdzqt7pc++Neq+I3MKBuCI7IDvDSRFhSvcDf+cK/ICBlyv2ip1GdHlIVL/vUaqGtgvqI7AJ3I0CTGE+SS9cd5BmJlEc5yqRhYV0OAjmfKNqwKfaAKVsIpYclMK7HPVcIkOFbK4F5FauEb3O66iTleF6ayGFTIo3j/hqcZmwCZ5JCKA1TzDRbRQ6bUpU6DN3LCeIxGZ+9T5PtVKsTY4mNKw8p7bdSBPgA3KSgb0B4SNVjAffiWse/p4ZUH2MvrZDul2oGkPrxZeA8cA55UI/5/d+BL8hSuoG8FC377Qf67/QXu4F46BKPyR0AAAAASUVORK5CYII=" />

        <img className='p-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFA0lEQVRoge3aWahVVRgH8F910yOlppVpA2mWZpNQNJEFjRZRGTTZQBANEkXQQEbqSy89VAQN2GAPlQ8SFFFRGlhUVJBWBmWaRgVZD9pkqVne08O3N+vce8/dZ+97t1LhHzbr3rO/9Q17rf1Na7MT/y7sUjO/0TgNp+AITMQY7JHJ+h3rsQZf4D28iw016zEgNHANlmAbmhWvv7A44zF0B+sOhuEOrGtRajOWYi5mYApGYXd0ZX8fiYtwH97B3y3z1+Eu8XB2CM7H2hYFPsL1GDkAXmNwG1a18Ps6k7Hd0MD8FoHLcHZNvHfFlcKInP9TYuVrxVgszwT8gVuwW91ChGN4Qs/V3r8u5hOEp2lipdjn2xsX4JdM5nfYa7AMx0pGvC9c7I7AdZIXvHuwzBrSdnpfLHsVDMMhIq5Mw2Tl9nyrEbMrymyL/MVeqfxKTBHud5n2cWOrcLuzsW+b+bUbcb70Yh9Vgn4CFuoZFDcLN51H8FXY0nJ/Ex6R9n/tRgyT4sStJehvxp+S4fMxHUP64T1duNbcqHV4SM1GwJ0Zw+WKXWwXHs9ouzPlDqgg50A8q+fWq82IhpR2nNOB9jFpFS4dhMyZ+E2NRsDVUiAqws2SESfWIHdMDTx64E2h4PUFNBPE/u7GFXUrUAdGi2x0i+IEcKGUC/0rMUMouLSAZorwLn+o9mJvV3T1+n9aNr5VMOcSkak+h+9LyllbUa+yeFHUL33wmliRCwsm5ylLJ4/WiqpVY9nr41xA75p9NQ4T9fbKNgoNE1vqT/EOba1gCFHD14EDRJqzWeR/zd4EG7If+8urJmb311QUnD/BurBnC89RxF7vTUB0O9phbDb+WKNSA8HvYjXIHnpvQ/5L+DUbu+hryMZsHN7P5B+ycVzNSg0EuY7d9DXkp2zsL134QezL/bXPbHcUhkhF3i/0jSO515qkvdfaLFzecTgDb1RUoGrJugjftPl9VDZu00+X8gHxxOcVMJ+T0cyvoNBAYkTu4tvhWL28Z+84MgMv4W2c3g+Tw/G5yMcmKRfd7y9Bk+PijO8LuKwfmuuwAC8LnftglJQ0FrVfnhdPZEEFBctgnAi4TcWNv7zvNaeI2eKM6IYCmvFSGj+ziqYdsCiTXZTrkbqRJxcRXSW1Q4swSyqsTiqlZjHyQm0LphbQTc3o1uvrrHqgIfZ9UzQJivCoZMzl5fRtixukxkNRQQcPZnSPlWF8u5Rddmo+5MZ04xnRUCiLffC05KnmdqAfIWJdE8eXEdCQ2qS3laCfJbV2NuFJnKf9wU0XTsDD+Fla0U4rAffoXPj1wXktih1dgv5gUWz1btB9LRp0b+OzjF9+vxuvirZqJxwkOi1NEYwrIW/3fIm9S86ZjHtFF6Zb30C3DStEQ25KSZ67SEXfopJzeqCRKdTEB6o3sYcKV30KThUF20BOteZJnmq/Acwnm/iVZEzZlakL14iV/QtnDZbZBMmYVThmsAxL4lbpnZtVF9P9pG22SXizwoA0CIyUesJ/48a6BTQkB9DEJ8K71YUuXItvM/4/6ycprAvnSlst79rfJNUJVTFenNm3HnkvUSG4DuYTjobYt3dKHcetwiG8JWLGatGo2JjJGpFd44QHmyoa4Me18F0mPiZ4Rb2dl44YKs7HX9fzK4Yq13rRRz5zoErU/VHNSPFRzaki2B0qzgmHCxf6a3ZtEMXZCnyKD8VD2In/Df4BiJ6n2y7rNzUAAAAASUVORK5CYII=" />
      </div>
      <div className='bg-black h-1 w-full'></div>
      <h1 className='text-center text-bold mt-3'>
        <span className='font-bold p-3 cursor-pointer'>Terms of service</span>
        <span className='font-bold p-3 cursor-pointer'>Privacy Policy</span>
        <span className='font-bold p-3 cursor-pointer'>Security</span>
        </h1>
    </div>
  );
};

export default Footer;