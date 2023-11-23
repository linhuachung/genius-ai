import React from 'react';
import {auth} from "@clerk/nextjs";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const UserAvatar = () => {
    const {user} = auth()
    return (
        <Avatar className={'h-8 w-8'}>
            <AvatarImage src={user?.profileImageUrl}/>
            <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
            </AvatarFallback>
        </Avatar>
    )
};

export default UserAvatar;
