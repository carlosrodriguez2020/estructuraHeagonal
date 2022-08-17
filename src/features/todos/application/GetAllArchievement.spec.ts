import { ArchivementRepo } from "../infraestructura/Archievent-repo";
import { GetAllArchievment } from "./GetAllArcivement";
import{instance, mock, when} from 'ts-mockito'
import { Archieve } from "../domain/Archieve";
// import { Archievements } from "../domain/Archievement";

function extracted(){
    return ArchievementMother.learArchitecture()
}

class ArchievementMother{
    static learArchitecture(){
        return {id:"un-id-cualquiera", name:"Carlos y ts", date:new Date("17-08-2022")}
    }
}

describe('GetAllArchievment',()=>{
    it('should get all archievment', async()=>{
        //given
        const archievementRepository= mock<ArchivementRepo>()
        const getAllArchievement = new GetAllArchievment(instance(archievementRepository))

        //when
       when(archievementRepository.findAll()).thenResolve([
       ArchievementMother.learArchitecture()
    ])
        const actual = await getAllArchievement.execute()

        //then
        expect(actual).toEqual<Archieve[]>([ArchievementMother.learArchitecture()])

    })


})

