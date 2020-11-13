public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        List<Boat__c> boats = new List<Boat__c>();
        try {
            if(String.isEmpty(boatTypeId)){

                boats = [SELECT Id, Name, Picture__c, Contact__r.Name FROM Boat__c];
            }
            else{

                boats = [SELECT Id, Name, Picture__c, BoatType__c, Contact__r.Name 
                FROM Boat__c 
                WHERE BoatType__c = :boatTypeId];
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return boats;
    }
}
