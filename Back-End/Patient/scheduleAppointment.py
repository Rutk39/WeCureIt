## Algorithm Outline:
## 1. Retrieve all available appointments based on data from the database
## 2. Based on the filter selected by the patient, modify the available appointments
## 3. Verify if there are available appointments. If not, return NULL.
## 4. Based on selected row, a pop-up view will be displayed.
## 5. Patient selects a specific appointment length
## 6. Time based on appointment length is provided
## 7. Patient selects a time
## 8. Recommendation is provided - NOTE: IN A DIFFERENT TICKET
## 9. Confirmation screen is displayed - Appointment should be stored into database

from datetime import date, datetime, timedelta

# Input: List of all appointments
## 1. doctorSchedule: [scheduleID, doctorID, daysVisiting, facilityVisiting, timeVisit, specialties]
## 2. filterRequested: [specialty, facility, doctor, date]
def filterAppointments(doctorSchedule, filterRequested):
    # Check if all of the filterRequested is "No Preference":
    totalNoPreferece = 0
    for i in range(len(filterRequested)):
        if filterRequested[i] == "No Preference":
            totalNoPreferece += 1
    
    # Since no filter was set, just return all of the available appointments
    if totalNoPreferece == 4:
        return doctorSchedule
    
    # Edge Case: Date is past today's date
    if type(filterRequested[3]) == date:
        todayDate = date.today()

        if filterRequested[3] < todayDate:
            return None
    
    # Move appointments that match the filter to a different list to return
    filterAppointmentList = []
    for i in range(len(filterRequested)):
        if i == 0 and filterRequested[i] != "No Preference":   # Verify specialty
            for j in range(len(doctorSchedule)):
                if doctorSchedule[j][5] == filterRequested[i]:
                    filterAppointmentList.append(doctorSchedule[j])

    return filterAppointmentList

# Input: Selcted appointment length
## 1. selectedAppLength: 15, 30, or 1
def calculateTimeInterval(startTime, endTime, selectedAppLength):
    if selectedAppLength == 1:
        selectedAppLength = 60 # Convert to minutes
    
    seconds = (endTime - startTime).total_seconds()

    step = timedelta(minutes=selectedAppLength)
    availableTime = []
    for i in range(0, int(seconds), int(step.total_seconds())):
        availableTime.append(startTime + timedelta(seconds=i))
    
    availableTime = [i.strftime('%Y-%m-%d %H:%M%:%S') for i in availableTime]
    return availableTime


##### TESTING #####
def main():
    # Test #1: No filter set
    # Doctor's schedule:
    doctorSchedule = []
    doctorSchedule.append([0, 0, "Monday", "The George Washington University Hospital", 8, "Cardiology"])
    doctorSchedule.append([1, 1, "Wednesday", "Holy Cross Hospital", 7, "Internal Medicine"])

    # Filter requested by patient:
    filterRequested = ["No Preference", "No Preference", "No Preference", "No Preference"]

    availableAppointments = filterAppointments(doctorSchedule, filterRequested)
    if len(availableAppointments) == 2:
        print("Test #1: SUCCESSFUL")
    else:
        print("Test #1: UNSUCCESSFUL")

    # Test #2: One filter set = 1 available appointment
    filterRequested = ["Cardiology", "No Preference", "No Preference", "No Preference"]

    availableAppointments = filterAppointments(doctorSchedule, filterRequested)
    if len(availableAppointments) == 1:
        print("Test #2: SUCCESSFUL")
    else:
        print("Test #2: UNSUCCESSFUL")

    # Test #3: Multiple filter set - TODO IN THE FUTURE
        
    # Test #4: No available appointments
    filterRequested = ["Psychiatry", "No Preference", "No Preference", "No Preference"]

    availableAppointments = filterAppointments(doctorSchedule, filterRequested)
    if len(availableAppointments) == 0:
        print("Test #4: SUCCESSFUL")
    else:
        print("Test #4: UNSUCCESSFUL")

    # Test #5: Edge case testing
    pastDate = date.today() - timedelta(days=5)
    filterRequested = ["Cardiology", "No Preference", "No Preference", pastDate]

    availableAppointments = filterAppointments(doctorSchedule, filterRequested)
    if availableAppointments == None:
        print("Test #5: SUCCESSFUL")
    else:
        print("Test #5: UNSUCCESSFUL")

    # Test #6: Appointment Length = 1 hours == 60 minutes from 7 AM to 5 PM
    startTime = datetime(2024, 4, 1, 7, 0, 0)
    endTime = datetime(2024, 4, 1, 17, 0, 0)
    
    availableTimes = calculateTimeInterval(startTime, endTime, 1)
    if len(availableTimes) == 10:
        print("Test #6: SUCCESSFUL")
    else:
        print("Test #6: UNSUCCESSFUL")

    # Test #7: Appointment Length = 30 minutes from 7 AM to 5 PM
    availableTimes = calculateTimeInterval(startTime, endTime, 30)
    if len(availableTimes) == 20:
        print("Test #7: SUCCESSFUL")
    else:
        print("Test #7: UNSUCCESSFUL")


if __name__ == "__main__":
    main()