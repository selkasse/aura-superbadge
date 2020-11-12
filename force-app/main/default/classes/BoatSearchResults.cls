public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(){
        List<Boat__c> boats = new List<Boat__c>();
        try {
            boats = [SELECT Id, Name FROM Boat__c];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return boats;
    }
}
