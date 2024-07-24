import { randomUUID } from 'crypto';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export class CommonUtils {

  /**
  recebendo um parametro @Req(nestjs)  utilizado para gerar url para download de arquivos.
  */
  static generateRequestUrl(req: any) {
    return `${req.protocol}://${req.get('host')}${req.baseUrl}`;
  }
  /**
  afim de recuperar um header para track de requisição ou gerar um novo uuid caso não seja enviado
  */
  static generateRequestId(req: any) {
    return req.headers['x-request-id'] ?? randomUUID().toString();
  }


  static getCurrentDateTimeWithTimezone(timeZone: string): string {
    const now = new Date();
    const zonedDate = toZonedTime(now, timeZone);
    const formattedDate = format(zonedDate, "yyyy-MM-dd'T'HH:mm:ss.SSSSSSxxx");
    return `${formattedDate} ${timeZone}`;
  }

  static parseDateTimeWithTimezone(strDate: string, timeZone: string): string {
    const date = new Date(strDate);
    const zonedDate = toZonedTime(date, timeZone);
    const formattedDate = format(zonedDate, "yyyy-MM-dd'T'HH:mm:ss.SSSSSSxxx");
    return `${formattedDate} ${timeZone}`;
  }

   static calculateDateDiff(startDate: string, endDate: string, timeZone?: string) {
    const dateA = new Date(startDate);
    const dateB = new Date(endDate);

    let millisecondsDiff;
    if (timeZone) {
      const zonedDateA = toZonedTime(dateA, timeZone);
      const zonedDateB = toZonedTime(dateB, timeZone);
      millisecondsDiff = Math.abs(zonedDateB.getTime() - zonedDateA.getTime());
    } else {
      millisecondsDiff = Math.abs(dateB.getTime() - dateA.getTime());
    }
    const secondsDiff = millisecondsDiff / 1000;
    const minutesDiff = secondsDiff / 60;
    const hoursDiff = minutesDiff / 60;
    const daysDiff = hoursDiff / 24;
    const monthDiff = Math.floor(daysDiff / 30.436875);
    const yearsDiff = monthDiff / 12;

    return {
      diffInMilliseconds: millisecondsDiff,
      diffInSeconds: secondsDiff,
      diffInMinutes: minutesDiff,
      diffInHours: hoursDiff,
      diffInDays: daysDiff,
      diffInMonth: monthDiff,
      diffInYears: yearsDiff
    };
  }
}
