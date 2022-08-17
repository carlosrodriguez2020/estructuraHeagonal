
// import { Archievements } from "../domain/Archievement";
import { Archieve } from "../domain/Archieve";
import { ArchivementRepo } from "../infraestructura/Archievent-repo";

export class GetAllArchievment {
//polimorfismo
    constructor(private readonly archivementRepo: ArchivementRepo){

    }
    execute():Promise<Archieve[]>{
        return this.archivementRepo.findAll()
    }

}