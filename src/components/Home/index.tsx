import { FC } from 'react';
import { Card } from "../UI/Card.ui";
import Navigator from '../Navigator';
import { useSelector } from 'react-redux';
import { selecStoryData } from '../../provider/story/story.selectors';

const Home: FC = () => {
    const storyData = useSelector(selecStoryData)
    return (
        <>  
            <Navigator />
            <div className="grid grid-cols-4 gap-5 my-auto mt-5">
                {
                    storyData.map((story) => {
                        return (
                            <Card image={story.image} title={story.title} url={story.url} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;