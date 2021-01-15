import Repository from "../Model/Repository"
import {httpGet,httpPost} from "../Utils/http"
import Base from "./base"

const api = {
    getPullRequest(repository:Repository,PullRequestId?:number){
        if(PullRequestId === undefined){
            return httpGet(Base.BaseUrl+"/"+`${repository.Org}`+"/"+`${repository.Name}`+Base.PullRequest)
        }else{
            return httpGet(Base.BaseUrl+"/"+`${repository.Org}`+"/"+`${repository.Name}`+Base.PullRequest+"/"+`${PullRequestId}`)
        }
        
    }
}

export default api