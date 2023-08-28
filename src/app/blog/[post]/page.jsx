import TextHeading from '@/components/urtils/TextHeading';
import React from 'react';

const page = ({params}) => {
    const {post} = params;
    return (
        <div>
            <TextHeading> Single post : {post} </TextHeading>
        </div>
    );
};

export default page;