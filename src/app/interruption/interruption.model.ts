export interface Interruption{
    id? : number,
    voltage: string,
    interruptionNumber: number,
    substation: string,
    numberOfCustomers: number,
    type1: string,
    type2: string,
    type3: string,
    type4: string,
    failureObject: string,
    failureProtection: string,
    causeObject: string,
    cable: boolean,
    description: string,
    dispatch: string,
    planBeginning: Date,
    planEnd: Date,
    realizationBeginning: Date,
    realizationEnd: Date,
    durationBefore: number,
    durationAfter: number,
    durationPlanned: number,
    durationUnplanned: number,
    duration: number
}
