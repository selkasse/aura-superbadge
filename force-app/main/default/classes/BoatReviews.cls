public with sharing class BoatReviews {
    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId){
        List<BoatReview__c> reviews = new List<BoatReview__c>();
        try {
            reviews = [SELECT Id, Boat__c, Name, Comment__c, Rating__c, LastModifiedDate, CreatedDate, CreatedBy.Name, CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName
                        FROM BoatReview__c 
                        WHERE Boat__c = :boatId];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return reviews;
    }
}
