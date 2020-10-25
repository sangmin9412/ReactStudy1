import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumbers = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumbers];
}

const Lotto = () => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    const runTimeouts = () => {
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i],]);
            }, (i + 1) * 500);
        };
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 3500);
    }

    useEffect(() => {
        // ajax
    }, []);

    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            // ajax
        }
    }, [바뀌는값]);

    useEffect(() => {
        console.log('useEffect');
        runTimeouts();
        return () => {
            console.log('willUnmout')
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            })
        }
    }, [timeouts.current]); // 빈 배열이면 componentDidMount 와 동일
    // 배열에 요소가 있으면 componentDidMount 랑 componenetDidUpdate 둘 다 수행

    const onClickRedo = useCallback(() => {
        console.log('onClickRedo');
        console.log(winNumbers);
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }, [winNumbers]);

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => {
                    return(
                        <Ball key={v} number={v} />
                    )
                })}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    );

}

export default Lotto;