from django.db import models



class Studentdata(models.Model):
    name = models.TextField(null=False, blank=True)
    section=models.CharField(null=True,blank=True,max_length=20)
    password=models.TextField(null=False,blank=True,max_length=40)
    rollNumber=models.IntegerField(primary_key=True,null=False,blank=True)
    department=models.TextField(null=True,blank=True)
    email=models.TextField(null=True,blank=True)
    group=models.TextField(null=True,blank=True)
    dob=models.TextField(null=True,blank=True)
    cnic=models.TextField(null=True,blank=True)
    nationality=models.TextField(null=True,blank=True)
    MobileNo=models.TextField(null=True,blank=True)
     
    def __str__(self):
        return str(self.rollNumber)

# Create your models here.


# class test(models.Model):

#     sectiontype=models.CharField(null=True,blank=True)
#     rollno = models.ForeignKey(Studentdata.rollNumber, on_delete=models.CASCADE)
    
#     def __str__(self):
#        return self.name[0:50]




# class test2(models.Model):
#     sectiontype=models.CharField(null=True,blank=True)
#     rollno = models.ForeignKey(Studentdata.rollNumber, on_delete=models.CASCADE)
    
#     def __str__(self):
#        return self.name[0:50]
    


# class test3(models.Model):
#     sectiontype=models.CharField(null=True,blank=True)
#     rollno = models.ForeignKey(Studentdata.rollNumber, on_delete=models.CASCADE)
    
#     def __str__(self):
#        return self.name[0:50]
   
class SectionA(models.Model):
    testtype=models.CharField(null=True,blank=True,max_length=30)
    rollno = models.ForeignKey(Studentdata, on_delete=models.CASCADE, to_field='rollNumber')
    English = models.IntegerField(default=0)
    Maths = models.IntegerField(default=0)
    Urdu = models.IntegerField(default=0)
    Chemistry = models.IntegerField(default=0)
    SocialStudies = models.IntegerField(default=0)
    Physics = models.IntegerField(default=0)
    class Meta:
        unique_together = ['rollno', 'testtype']
    

class SectionB(models.Model):
    testtype=models.CharField(null=True,blank=True,max_length=30)
    rollno = models.ForeignKey(Studentdata, on_delete=models.CASCADE, to_field='rollNumber')
    English = models.IntegerField(default=0)
    Chemistry = models.IntegerField(default=0)
    Urdu = models.IntegerField(default=0)
    Physics = models.IntegerField(default=0)
    SocialStudies = models.IntegerField(default=0)
    Biology= models.IntegerField(default=0)
    class Meta:
        unique_together = ['rollno', 'testtype']


class SectionC(models.Model):
    testtype=models.CharField(null=True,blank=True,max_length=30)
    rollno = models.ForeignKey(Studentdata, on_delete=models.CASCADE, to_field='rollNumber')
    English = models.IntegerField(default=0)
    Maths = models.IntegerField(default=0)
    Urdu = models.IntegerField(default=0)
    ComputerScience = models.IntegerField(default=0)
    SocialStudies = models.IntegerField(default=0)
    Physics= models.IntegerField(default=0)

    class Meta:
        unique_together = ['rollno', 'testtype']






class SectionAattendance(models.Model):
    rollno = models.ForeignKey(Studentdata, on_delete=models.CASCADE, to_field='rollNumber')
    attendance=models.CharField(null=True,blank=True,max_length=10)
    date=models.CharField(null=True,blank=True,max_length=15)
    class Meta:
        unique_together = ['rollno', 'date']
    

class SectionBattendance(models.Model):
    rollno = models.ForeignKey(Studentdata, on_delete=models.CASCADE, to_field='rollNumber')
    attendance=models.CharField(null=True,blank=True,max_length=15)
    date=models.CharField(null=True,blank=True,max_length=10)
    class Meta:
        unique_together = ['rollno', 'date']


class SectionCattendance(models.Model):
    rollno = models.ForeignKey(Studentdata, on_delete=models.CASCADE, to_field='rollNumber')
    attendance=models.CharField(null=True,blank=True,max_length=15)
    date=models.CharField(null=True,blank=True,max_length=10)
    class Meta:
        unique_together = ['rollno', 'date']


