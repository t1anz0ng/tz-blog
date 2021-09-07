import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(),'posts')

export function getSortedPostsData(){
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(filename => {
        const id = filename.replace(/\.md$/,'')

        const fullP = path.join(postsDirectory, filename)
        const fileContent = fs.readFileSync(fullP,'utf8')

        const matterResult = matter(fileContent)
        return {
            id,
            ...matterResult.data
        }
    })

    return allPostsData.sort(({date: a},{data: b}) =>{
        if (a<b){
            return 1
        }else if (a > b){
            return -1
        }else{
            return 0
        }
    })
}