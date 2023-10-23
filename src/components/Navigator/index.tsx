import { FC, useEffect, useState } from 'react';
import { api } from '../../provider/story.api';

const Navigator: FC = () => {
    const [type, setType] = useState('arts')
    const [ getStoryData ] = api.useGetStoriesMutation();
    
    const getData = async () => {
        await getStoryData({
            type
        });
    };
    useEffect(() => {
        getData();
    }, [type])

    return (
        <div className="flex flex-col sm:flex-row justify-start items-center gap-10 my-auto">
            <button onClick={()=>setType('arts')}>Arts</button>
            <button onClick={()=>setType('health')}>Health</button>
        </div>
    )
}

export default Navigator;