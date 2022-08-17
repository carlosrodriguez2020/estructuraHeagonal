import { ArchivementRepo } from "../infraestructura/Archievent-repo";

import { ArchievementDto } from "../infraestructura/ArchievementDto";
import { Archieve } from "./Archieve";

export class ArchievmentHttp implements ArchivementRepo{
async findAll():Promise<Archieve[]>

{
     
    const archievementDto: ArchievementDto[] =[{id:"un-id-cualquiera", name:"Carlos y ts", date:"17-08-2022"
    }]

    return archievementDto.map(x=>({...x, date:new Date(x.date)}))

  }
}