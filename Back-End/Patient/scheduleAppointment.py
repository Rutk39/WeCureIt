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
    
    # Move appointments that match the filter to a different list to return
    filterAppointmentList = []
    for i in range(len(filterRequested)):
        if i == 0 and filterRequested[i] != "No Preference":   # Verify specialty
            for j in range(len(doctorSchedule)):
                if doctorSchedule[j][5] == filterRequested[i]:
                    filterAppointmentList.append(doctorSchedule[j])

        elif i == 1 and filterRequested[i] != "No Preference": # Verify facility
            print("TODO")
        elif i == 2 and filterRequested[i] != "No Preference": # Verify doctor
            print("TODO")
        elif i == 3 and filterRequested[i] != "No Preference": # Verify date
            print("TODO")

    return filterAppointmentList


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

    # Test #3: Multiple filter set - TODO
        
    # Test #4: No available appointments
    filterRequested = ["Psychiatry", "No Preference", "No Preference", "No Preference"]

    availableAppointments = filterAppointments(doctorSchedule, filterRequested)
    if len(availableAppointments) == 0:
        print("Test #4: SUCCESSFUL")
    else:
        print("Test #4: UNSUCCESSFUL")


if __name__ == "__main__":
    main()