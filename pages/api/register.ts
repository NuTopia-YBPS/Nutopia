import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

import { firestore } from "../../firebase/clientApp";
import { titleCase } from "../../functions";

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  req.body.participants &&
    req.body.participants.forEach((participant: any, index: any) => {
      if (participant.name === "" || participant.grade === "" || participant.phone === "") {
        req.body.participants.splice(index, 1);
      }
    });

  req.body.teams &&
    req.body.teams.forEach((team: any, index: any) => {
      if (team.teamName === "") {
        req.body.teams.splice(index, 1);
      }

      team.participants.forEach((participant: any) => {
        if (participant.name === "") req.body.teams.splice(index, 1);
      });
    });

  const { event, participants, teams, platform, userToken } = req.body;

  let success = true;
  let message = `Successfully registered ${titleCase(event.replaceAll("-", " "))}`;

  if (!req.body) {
    return res.status(200).json({
      success: false,
      message: "No body",
    });
  }

  // Database code here
  const accountsCollection = collection(firestore, "school_login_accounts");
  const userTokenQuery = query(accountsCollection, where("userToken", "==", userToken));
  const userDocumentSnapShot = await getDocs(userTokenQuery);
  const schoolIds: any = [];

  userDocumentSnapShot.forEach((doc) => {
    schoolIds.push(doc.get("schoolId"));
  });

  const schoolId = schoolIds[0];

  const registrationsCollection = collection(firestore, "registrations_season_2");
  const registrationsSnapshot = await getDocs(query(registrationsCollection, where("schoolId", "==", schoolId)));
  const registrations: any = [];

  registrationsSnapshot.forEach((doc) => {
    registrations.push(doc);
  });

  if (registrations.length > 0) {
    const phones: any = [];
    const tmpEvents: any = [];
    const teamName: any = [];

    registrations.forEach((registration: any) => {
      if (registration.get("event") === "arena-of-valor") {
        tmpEvents.push(`${registration.get("event")}:${registration.get("platform")}`);
      } else tmpEvents.push(registration.get("event"));
      phones.push(registration.get("phone"));
    });

    if (event === "arena-of-valor") {
      if (tmpEvents.includes(`${event}:${platform}`)) {
        success = false;
        return res.status(200).json({
          success,
          message: `Already registered under this platform (${platform})`,
        });
      }
    } else if (tmpEvents.includes(event)) {
      success = false;
      message = `Event already registered`;
      return res.status(200).json({
        success,
        message,
      });
    }

    if (teams) {
      teams.forEach((team: any) => {
        let teamNames: Array<any> = [];
        if (!teamNames.includes(team.teamName) || !teamName.includes(team.teamName)) {
          teamNames.push(team.teamName);
          teamName.push(team.teamName);
        } else {
          success = false;
          message = `Team name already registered`;
          return res.status(200).json({ success, message });
        }
        team.participants.forEach((participant: any, index: any) => {
          let formPhones: Array<any> = [];
          let formNames: Array<any> = [];

          teams.forEach((team: any) => {
            team.participants.forEach((participant: any, innerIndex: any) => {
              if (index !== innerIndex) {
                if (participant.phone !== "") {
                  formPhones.push(participant.phone);
                }
                if (participant.name !== "") {
                  formNames.push(participant.name);
                }
              }
            });
          });

          if (phones.includes(participant.phone)) {
            success = false;
            message = `Phone number already in use (Participant ${index + 1} : ${participant.phone})`;
          } else if (formPhones.includes(participant.phone)) {
            success = false;
            message = `Phone numbers cannot be same as other members (Participant ${index + 1} : ${participant.phone})`;
          }
        });
      });
    } else {
      participants.forEach((participant: any, index: any) => {
        let formPhones: any = [];
        let formNames: any = [];

        participants.forEach((participant: any, innerIndex: any) => {
          if (index !== innerIndex) {
            formPhones.push(participant.phone);
            formNames.push(participant.name);
          }
        });

        if (phones.includes(participant.phone)) {
          success = false;
          message = `Phone number already in use (Participant ${index + 1} : ${participant.phone})`;
        } else if (formPhones.includes(participant.phone)) {
          success = false;
          message = `Phone numbers cannot be same as participants (Participant ${index + 1} : ${participant.phone})`;
        }
      });
    }
  }

  const data: any = {
    event,
    schoolId,
  };

  if (teams) {
    data["teams"] = teams;
  }

  if (participants) {
    data["participants"] = participants;
  }

  if (platform) {
    data["platform"] = platform;
  }

  delete data.userToken;

  if (success) {
    addDoc(registrationsCollection, {
      ...data,
    });
  }

  res.status(200).json({
    success,
    message,
  });
}
