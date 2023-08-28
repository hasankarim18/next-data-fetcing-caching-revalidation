import getBlogPost from '@/app/lib/getBlogPost';
import TextHeading from '@/components/urtils/TextHeading';
import React from 'react';

const Post = async ({params}) => {
    const {post: postId} = params;
   const singlePost =  await getBlogPost(postId)

    return (
      <div>
        <TextHeading> Single post : {postId} </TextHeading>
        <div className="mt-4">
          <h2 className="text-xl ">{singlePost.title}</h2>
          <p className="mt-2">
            <i className="capitalize font-semibold">description: </i>
            {singlePost?.body}
          </p>
          <div className="mt-4">
            {singlePost?.tags.map((tag, i) => (
              <div key={i} className="badge badge-neutral mr-2 ">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Post;