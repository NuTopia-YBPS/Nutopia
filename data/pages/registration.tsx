import { ArenaOfValor, KnockOut, TruthOrDebug, LogAndBlog, Designscape, Otakuiz } from "./events"

const Registration = {
	title: "Pre-Registration Information",
	commonRules: [
		"Registrations are open for students from grades 9 to 12. Teacher in charge should fill in the details of the teams/participants from the respective school.",
		"An individual is allowed to participate in ONLY ONE event.",
		"Each event is to be registered SEPARATELY in the respective columns",
		"Only WhatsApp enabled numbers to be submitted in the registration form",
		"Participants are to join the Whatsapp group through the link which will be sent to your respective mail ID after registration",
		"Further instructions for the event will be sent via WhatsApp group ONLY.",
		"Any queries regarding registration and any problems to be addressed on the SAME DAY through EMAIL ONLY",
		"Participants who submit mismatched information will be disqualified."
	],

	eventRules: [
		{
			title: ArenaOfValor.title,
			rules: ArenaOfValor.headings.registration
		},
		{
			title: KnockOut.title,
			rules: KnockOut.headings.registration
		},
		{
			title: TruthOrDebug.title,
			rules: TruthOrDebug.headings.registration
		},
		{
			title: LogAndBlog.title,
			rules: LogAndBlog.headings.registration
		},
		{
			title: Designscape.title,
			rules: Designscape.headings.registration
		},
		{
			title: Otakuiz.title,
			rules: Otakuiz.headings.registration
		}
	]
}

export default Registration