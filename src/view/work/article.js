import React from 'react';


function Article(props) {
  let {data} = props;
  
  return (
    <div className="miiaov_box">
      <article className="miiaov_article">
        <h3>
          <span>{data.title}</span>
        </h3>
        <div className="miiaov_txt">
          <div
            dangerouslySetInnerHTML={{
              __html: data.content
            }}
          ></div>
        </div>
      </article>
    </div>
  )
}

export default Article;
          
          
          
