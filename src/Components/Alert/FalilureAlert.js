import  React, { useContext } from 'react';
import { IMDBContext } from '../../Context';

export default function FailureAlert() {
  const{failureCreateAlert,failureUpdateAlert,failureDeleteAlert,failureAddAlertWish,
    failureDeleteAlertWish,failureAddAlertWishAlready}=useContext(IMDBContext)
  return (
    <div className='failure-alert'>
    {failureCreateAlert?"Can not Add Data"
    :failureUpdateAlert?"Can not Update Data"
    :failureDeleteAlert?"Can not Delete Data"
    :failureAddAlertWish?"Can not Add Wish List"
    :failureDeleteAlertWish?"Can not Remove Movie From Wish List"
    :failureAddAlertWishAlready?"Movie Already In Wish List"
    :""
    }
    </div>
  );
}

