import projectsData from './projects_list.json'
import modelLeaning from './model-leaning.jpeg'
import purpleComputer from './purple-computer.jpeg'

const images = [modelLeaning, purpleComputer]

export const projectsList = projectsData.map((projectData) => {
    const image = images[projectData.imageId]
    const {title, description} = projectData
    return {title, description, image}
})

export {default as logo} from './logo.svg'