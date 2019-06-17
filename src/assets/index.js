// Import data
import projectsData from './projects_list.json'

// Import images
import moodmancerLogo from './Moodmancer_logo.png'
import moodmancerScreenshot from './Moodmancer Screenshot.png'
import purpleComputer from './purple-computer.jpeg'
import salarySimScreenshot from './purple-computer.jpeg'
import cauriGuide from './Cauri Guide Screenshot.png'
import cauriGuideScreenshot from './Cauri Guide Screenshot.png'
import lmccLogo from './LMCC_Logo.png'
import lmccScreenshot from './LMCC Screenshot.png'

const images = [moodmancerLogo, purpleComputer, cauriGuide, lmccLogo, moodmancerScreenshot, salarySimScreenshot, cauriGuideScreenshot, lmccScreenshot]

export const projectsList = projectsData.map((projectData) => {
    const image = images[projectData.imageId]
    return {...projectData, image}
})

export {default as logo} from './logo.svg'