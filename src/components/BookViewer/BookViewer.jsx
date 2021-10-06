import React from 'react';
import {Book} from "../Book/Book";

export const BookViewer = (props) => {
  return(

    <div className="row row-space">


      {/*will need a button soon*/}
      <div className="col-md-4">
        <button onClick={props.previousBook}>Previous book</button>
      </div>

      <div className="col-md-4">
        <Book book={props.book} />
      </div>
      <div className="col-md-4">
        <button onClick={props.nextBook}>Next Book</button>

      </div>


    </div>
  );
}
