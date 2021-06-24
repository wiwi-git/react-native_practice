import React, { useEffect, useState } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect( () => {
        console.log('마운트 될 때만 실행됨');
    }, []);

    useEffect( () => {
        console.log('랜더링 완료');
        console.log({
            name,
            nickname
        });
    });

    useEffect(() => {
        console.log(name)
    }, [name]);// name이 변경될때마다 실행

    useEffect( () => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChageNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChageNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;