// Import data
import projectsData from './projects_list.json'

// Import images
import moodmancer from './Moodmancer Screenshot.png'
import purpleComputer from './purple-computer.jpeg'
import cauriGuide from './Cauri Guide Screenshot.png'
import lmcc from './LMCC Screenshot.png'

const images = [moodmancer, purpleComputer, cauriGuide, lmcc]

export const projectsList = projectsData.map((projectData) => {
    const image = images[projectData.imageId]
    const {title, description} = projectData
    return {title, description, image}
})

export {default as logo} from './logo.svg'