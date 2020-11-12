public with sharing class BoatSearchController {
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        List<BoatType__c> boatTypes = new List<BoatType__c>();
        try {
            boatTypes = [SELECT Id, Name FROM BoatType__c];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return boatTypes;
    }

}
