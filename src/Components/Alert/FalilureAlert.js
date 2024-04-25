import  React, { useContext } from 'react';
import { IMDBContext } from '../../Context';

export default function FailureAlert() {
  const{failureCreateAlert,failureUpdateAlert,failureDeleteAlert,failureAddAlertWish,
    failureDeleteAlertWish,failureAddAlertWishAlready}=useContext(IMDBContext);

    let content=failureCreateAlert?"Can not Create Data"
    :failureUpdateAlert?"Can not Update Data"
    :failureDeleteAlert?"Can not Delete Data"
    :failureAddAlertWish?"Can not Add Wish List"
    :failureDeleteAlertWish?"Can not Remove Movie From Wish List"
    :failureAddAlertWishAlready?"Movie Already In Wish List"
    :""
    
  return (
    <div className='failure-alert'>
    {content}
    </div>
  );
}

