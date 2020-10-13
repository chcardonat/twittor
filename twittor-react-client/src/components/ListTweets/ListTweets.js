import React, {useEffect, useState} from 'react';
import { Image } from "react-bootstrap";
import {map} from "lodash";
import moment from "moment";
import AvatarNoFound from "../../assests/png/avatar-no-found.png";
import {API_HOST} from "../../utils/constant";
import {getUserApi} from "../../api/user";
import "./ListTweets.scss";
import {replaceURLWithHTMLLinks} from "../../utils/functions";


export default function ListTweets(props) {
    const {tweets} = props;
    return (
        <div className="list-tweets">
            {map(tweets, (tweet,index) => (
                <Tweet key={index}  tweet={tweet} />
            ))}
        </div>
    )
}

function Tweet(props){
    const {tweet} = props;

    const [userInfo, setUserInfo] = useState(null);

    const [avatarUrl, setvAtarUrl] = useState(null);

    useEffect(() => {
        getUserApi(tweet.userId).then(response => {
            setUserInfo(response)
            setvAtarUrl(
                response?.avatar ? `${API_HOST}/obtenerAvatar?id=${response.id}` : AvatarNoFound
            )
        })
    }, [tweet])

return (
    <div className="tweet">
        <Image className="avatar" src={avatarUrl} roundedCircle/>
        <div>
            <div className="name"> 
                {userInfo?.nombre } {userInfo?.apellidos}
                <span>
                    {moment(tweet.fecha).calendar()}
                </span>
            </div>
            <div dangerouslySetInnerHTML={{__html: replaceURLWithHTMLLinks(tweet.mensaje)}} />
        </div>
    </div>
);
    
}