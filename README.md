<img width="300" alt="logo" src="https://user-images.githubusercontent.com/57605485/157790880-620d837b-c936-472b-a502-3871cd9530eb.png"><br/>
Personalized Recruiter Bot for searching, filtering and inviting targeted Linkedin profiles<br/>
Automate your own Linkedin account from the CLI or use it from a CI env.

# Install
```terminal
npm i -g puntorigen/hola
```

## Summary
This CLI allows you to automatically search/invite new candidates for a given profile template and send them customized messages using any free LinkedIn personal free account. None of your existing contacts within your Linkedin network will get a message. All required options for a command, can be specified as either arguments/env variables, so you can you use it inside any CI env. Additionally the bot includes an internal DB which help track which users received which template invitation from. This DB can be exported/imported as a JSON file, so you can track the changes within a CI enviroment.

## Workflow
To use the bot you need to first create a profile template (hola templates create), then grow your network inviting friends that match that template (hola grow), and then send customized chat messages to your newly added first level connections (that were previously invited by the bot for that template) using the command: hola invite. You'd typically use the following commands in a bash script or GH action:

```terminal
hola grow --template "profilename"
hola invite --template "profilename"
```

By using it daily, this process never stops adding new invitations.

## Create a profile template
You can create any number of profile templates and the bot will save them in the internal DB. For this, you need to give the template a name and specify the required values when prompted (this is the only command that prompts for values; but you'd typically run it before deploying it as a bot). 
```terminal
hola template create profilename
```
This command will walk you through the following questions:
- template name; example: typescript
- keywords to use for searching new profiles; example: senior typescript
- keywords that profiles shouldn't have; example: austin software, designer, founder, ceo
- countries of origin for the profiles: you can choose one or multiple; currently supported: Argentina,Chile,Colombia,Mexico,Peru,Uruguay,USA
- list people that you don't want to include; can be empty or list of names separated by commas
- add a message template for the profile; this will be the message that users get when they accept the invitation for this profile template (can be in any language); example: Hi {firstName}, thanks for accepting my in your network.\nI saw your profile and thought your profile was great for the company I'm working for! do you want me to send you more info about it?

