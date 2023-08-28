
import TextHeading from '@/components/urtils/TextHeading';
import React from 'react';
import getAllPosts from '../lib/getAllPosts';
import Link from 'next/link';



const Blog = async () => {
    const {posts, users} = await getAllPosts()

    return (
      <div>
        <TextHeading> Blogs </TextHeading>
       
        <ul className="grid grid-cols-1 gap-4">
          {posts.posts.map((post) => {
            const user = users.users.find(user => post.userId === user.id)
          
            return (
              <li key={post.id} className="card w-full bg-base-100 border">
                <div className="flex justify-between p-4">
                  {/* author info */}
                  <div>
                    {user?.id ? (
                      <h3 className="text-xl mb-2 font-bold border p-2 rounded-md">
                        <span className="mr-1">Name: {user?.firstName}</span>
                        <span className="mr-2"> {user?.lastName}</span>
                        <br />
                        <span>id: {user?.id}</span>
                      </h3>
                    ) : (
                      <h3 className="text-xl text-secondary">User Info Not Found</h3>
                    )}
                  </div>
                  {/* post brief */}
                  <div className="grid grid-cols-1 gap-4">
                    <h2 className="card-title">{post.title}</h2>
                    <div className="flex items-center">
                      <div className="flex justify-end items-center ">
                        Tags: 
                        {post.tags.map((tag, i) => (
                          <div
                            key={i}
                            className="badge badge-secondary mr-1 ml-1 uppercase "
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div className="card-actions justify-end">
                        <Link
                          href={`/blog/${post.id}  `}
                          className="btn btn-primary btn-outline"
                        >
                          View details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default Blog;