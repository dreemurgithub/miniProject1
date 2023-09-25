import path from 'path'

const fileDirection = (name: string)=>{
    return path.join('./models/dataFile',name)
}
const fileOne = fileDirection('file1.json')
const fileTwo = fileDirection('file2.json')


export {fileOne , fileTwo}