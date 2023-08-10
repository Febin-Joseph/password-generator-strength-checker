# password-generator-strength-checker


it is a simple password-strength-checker project developed by nihalavulan but i have added it
a password suggestion method based on the password strength if the password is not strong the suggestion 
will gives a random password the generated password always will be strong that satisfies all the requirements asking
for a secured password and if the user entered password is not strong it will give some suggestion like :

# if the user entered password it not strong if the password is like so :

![Screenshot 2023-08-01 140814](https://github.com/Febin-Joseph/password-generator-strength-checker/assets/128711401/bb4f6e35-83b1-448b-9147-c5bae16266b5)


# output

![Screenshot 2023-08-01 140437](https://github.com/Febin-Joseph/password-generator-strength-checker/assets/128711401/df59b9f8-cff0-4da3-bbc4-4e52bc39888c)


# if the password is strong the output will be 

![Screenshot 2023-08-01 141026](https://github.com/Febin-Joseph/password-generator-strength-checker/assets/128711401/aeb7e002-4de0-44a1-9dfe-dfc9b638e243)


# Bonus idea of the Package


| value         | Type     | Default Value  | Description                                                       |
| -----------   | -------- | -------------- | ----------------------------------------------------------------- |
| uppercase     | Boolean  | true           | Whether the password must contain at least one uppercase letter.  |
| lowercase     | Boolean  | true           | Whether the password must contain at least one lowercase letter.  |
| digits        | Boolean  | true           | Boolean. Whether the password must contain at least one number.   |  
| specialChars  | Boolean  | true           | Whether the password must contain at least one special charecter. |
| minLength     | Number   | 8              | Number. The minimum length of the password.                       |


#### The **getPasswordStrength** function returns an object with two properties:
- `messages`: An array of strings containing messages for each criterion that the password does not meet.
- `strength`: A string indicating the strength of the password. Possible values are "Weak", "Moderate", and "Strong".
- `suggestion`: Generates random password if the user doesn't meet the criteria.The generated password always will be strong
