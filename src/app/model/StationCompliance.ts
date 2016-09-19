export class StationCompliance {
  constructor(
    public id: number,
    public result: string,
    public stationIp: string,
    public activeUser: string,
    public switchIp: string,
    public slotNumber: number,
    public portNumber: number,
    public complexRuleDescription: string,
    public policyName: string,
    public ruleName: string,
    public conditionName: string,
    public message: string,
    public action: string,
    public vlanNumberAction: number,
    public addToBlackList: boolean,
    public date: Date,
    public siteName: string,
    public description: string,
    public macAddress: string,
    public dnsName: string,
    public nifIndex: number
  ){
    date = new Date(date);
  }
}
