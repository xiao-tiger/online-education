import React from 'react';


function Article(props) {
  let {data} = props;
  
  return (
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
  )
}

export default Article;
          
          
          
