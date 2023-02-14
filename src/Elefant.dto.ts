import { IsOptional, IsDefined, IsString, IsNotEmpty } from 'class-validator';
export default class NewElefantDto {
  @IsOptional()
  elefantgender: string;
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  elefantname: string;
  elefantweight: number;
  elefantid: any;
}
