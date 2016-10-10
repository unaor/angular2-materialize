export class SystemStatus {
  constructor(
    public enableCompliance: boolean,
    public enableSystemLog: boolean,
    public enableTrap: boolean,
    public enableDiscovery: boolean,
    public enableDisplaySystemCategories: boolean,
    public isComplianceWorking: boolean,
    public isTrapWorking: boolean,
    public isSysLogWorking: string,
    public isSwitchWorking: boolean,
    public isRouterWorking: boolean
  ){}
}
