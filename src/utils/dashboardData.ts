export type Row = {
  id: number;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  status: string;

  assigned: "Assigned" | "Pending" | "Contacted";
  conversion: "Converted" | "Non Converted";

  converted: boolean;
  followUp: boolean;
  callDuration: number;
};

// export const generateData = (): Row[] => {
//   const statuses = ["Hot", "Cold", "Potential"];
//   const assignedValues = ["Assigned", "Pending", "Contacted"];
//   const conversionValues = ["Converted", "Non Converted"];

//   return Array.from({ length: 80 }, (_, i) => ({
//     id: i + 1,
//     name: `Lead ${i + 1}`,
//     phone: `91+ 90000 ${10000 + i}`,
//     email: `lead${i + 1}@gmail.com`,
//     date: `2025-${(i % 12) + 1}-${(i % 28) + 1}`,
//     time: `${(i % 12) + 1}:30 ${i % 2 === 0 ? "AM" : "PM"}`,
//     status: statuses[i % 3],

//     assigned: assignedValues[i % 3] as Row["assigned"],
//     conversion: conversionValues[i % 2] as Row["conversion"],

//     converted: i % 2 === 0,
//     followUp: i % 3 === 0,
//     callDuration: Math.floor(Math.random() * 5000),
//   }));
// };  

export const generateData = (): Row[] => [
  { id:1, name:"Lead 1", phone:"+91 90000 10001", email:"lead1@gmail.com", date:"2025-01-01", time:"1:30 AM", status:"Hot", assigned:"Assigned", conversion:"Converted", converted:true, followUp:true, callDuration:1200 },

  { id:2, name:"Lead 2", phone:"+91 90000 10002", email:"lead2@gmail.com", date:"2025-01-05", time:"2:30 PM", status:"Cold", assigned:"Pending", conversion:"Converted", converted:true, followUp:false, callDuration:1800 },

  { id:3, name:"Lead 3", phone:"+91 90000 10003", email:"lead3@gmail.com", date:"2025-01-10", time:"3:30 AM", status:"Hot", assigned:"Contacted", conversion:"Converted", converted:false, followUp:false, callDuration:1500 },
  { id:4, name:"Lead 4", phone:"+91 90000 10004", email:"lead4@gmail.com", date:"2025-01-15", time:"4:30 PM", status:"Hot", assigned:"Assigned", conversion:"Non Converted", converted:false, followUp:true, callDuration:2000 },
  { id:5, name:"Lead 5", phone:"+91 90000 10005", email:"lead5@gmail.com", date:"2025-01-20", time:"5:30 AM", status:"Cold", assigned:"Pending", conversion:"Non Converted", converted:true, followUp:false, callDuration:1700 },
  { id:6, name:"Lead 6", phone:"+91 90000 10006", email:"lead6@gmail.com", date:"2025-01-25", time:"6:30 PM", status:"Potential", assigned:"Contacted", conversion:"Non Converted", converted:false, followUp:true, callDuration:2200 },

  { id:7, name:"Lead 7", phone:"+91 90000 10007", email:"lead7@gmail.com", date:"2025-02-02", time:"7:30 AM", status:"Hot", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:2100 },
  { id:8, name:"Lead 8", phone:"+91 90000 10008", email:"lead8@gmail.com", date:"2025-02-06", time:"8:30 PM", status:"Cold", assigned:"Pending", conversion:"Converted", converted:false, followUp:true, callDuration:1400 },
  { id:9, name:"Lead 9", phone:"+91 90000 10009", email:"lead9@gmail.com", date:"2025-02-12", time:"9:30 AM", status:"Potential", assigned:"Contacted", conversion:"Converted", converted:true, followUp:false, callDuration:2600 },
  { id:10, name:"Lead 10", phone:"+91 90000 10010", email:"lead10@gmail.com", date:"2025-02-18", time:"10:30 PM", status:"Hot", assigned:"Assigned", conversion:"Non Converted", converted:false, followUp:true, callDuration:1900 },
  { id:11, name:"Lead 11", phone:"+91 90000 10011", email:"lead11@gmail.com", date:"2025-02-22", time:"11:30 AM", status:"Hot", assigned:"Pending", conversion:"Converted", converted:true, followUp:false, callDuration:3000 },
  { id:12, name:"Lead 12", phone:"+91 90000 10012", email:"lead12@gmail.com", date:"2025-02-27", time:"12:30 PM", status:"Cold", assigned:"Contacted", conversion:"Converted", converted:false, followUp:true, callDuration:1600 },

  { id:13, name:"Lead 13", phone:"+91 90000 10013", email:"lead13@gmail.com", date:"2025-03-03", time:"1:15 AM", status:"Hot", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:2800 },
  { id:14, name:"Lead 14", phone:"+91 90000 10014", email:"lead14@gmail.com", date:"2025-03-08", time:"2:45 PM", status:"Hot", assigned:"Pending", conversion:"Non Converted", converted:false, followUp:true, callDuration:1100 },
  { id:15, name:"Lead 15", phone:"+91 90000 10015", email:"lead15@gmail.com", date:"2025-03-12", time:"3:10 AM", status:"Potential", assigned:"Contacted", conversion:"Converted", converted:true, followUp:false, callDuration:2500 },
  { id:16, name:"Lead 16", phone:"+91 90000 10016", email:"lead16@gmail.com", date:"2025-03-18", time:"4:55 PM", status:"Hot", assigned:"Assigned", conversion:"Non Converted", converted:false, followUp:true, callDuration:1900 },
  { id:17, name:"Lead 17", phone:"+91 90000 10017", email:"lead17@gmail.com", date:"2025-03-22", time:"5:20 AM", status:"Cold", assigned:"Pending", conversion:"Converted", converted:true, followUp:false, callDuration:1700 },
  { id:18, name:"Lead 18", phone:"+91 90000 10018", email:"lead18@gmail.com", date:"2025-03-27", time:"6:40 PM", status:"Potential", assigned:"Contacted", conversion:"Non Converted", converted:false, followUp:true, callDuration:2100 },

  { id:19, name:"Lead 19", phone:"+91 90000 10019", email:"lead19@gmail.com", date:"2025-04-02", time:"7:10 AM", status:"Hot", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:2000 },
  { id:20, name:"Lead 20", phone:"+91 90000 10020", email:"lead20@gmail.com", date:"2025-04-06", time:"8:50 PM", status:"Cold", assigned:"Pending", conversion:"Non Converted", converted:false, followUp:true, callDuration:1800 },
  { id:21, name:"Lead 21", phone:"+91 90000 10021", email:"lead21@gmail.com", date:"2025-04-11", time:"9:15 AM", status:"Cold", assigned:"Contacted", conversion:"Converted", converted:true, followUp:false, callDuration:2300 },
  { id:22, name:"Lead 22", phone:"+91 90000 10022", email:"lead22@gmail.com", date:"2025-04-16", time:"10:25 PM", status:"Hot", assigned:"Assigned", conversion:"Non Converted", converted:false, followUp:true, callDuration:2600 },
  { id:23, name:"Lead 23", phone:"+91 90000 10023", email:"lead23@gmail.com", date:"2025-04-20", time:"11:40 AM", status:"Cold", assigned:"Pending", conversion:"Converted", converted:true, followUp:false, callDuration:1700 },
  { id:24, name:"Lead 24", phone:"+91 90000 10024", email:"lead24@gmail.com", date:"2025-04-25", time:"12:20 PM", status:"Cold", assigned:"Contacted", conversion:"Converted", converted:false, followUp:true, callDuration:1900 },

  

  { id:25, name:"Lead 25", phone:"+91 90000 10025", email:"lead25@gmail.com", date:"2025-05-02", time:"1:30 AM", status:"Cold", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:2100 },
  { id:26, name:"Lead 26", phone:"+91 90000 10026", email:"lead26@gmail.com", date:"2025-05-05", time:"2:30 PM", status:"Cold", assigned:"Pending", conversion:"Converted", converted:false, followUp:true, callDuration:1500 },
  { id:27, name:"Lead 27", phone:"+91 90000 10027", email:"lead27@gmail.com", date:"2025-05-10", time:"3:30 AM", status:"Hot", assigned:"Contacted", conversion:"Converted", converted:true, followUp:false, callDuration:2600 },
  { id:28, name:"Lead 28", phone:"+91 90000 10028", email:"lead28@gmail.com", date:"2025-05-15", time:"4:30 PM", status:"Cold", assigned:"Assigned", conversion:"Converted", converted:false, followUp:true, callDuration:2000 },
  { id:29, name:"Lead 29", phone:"+91 90000 10029", email:"lead29@gmail.com", date:"2025-05-20", time:"5:30 AM", status:"Cold", assigned:"Pending", conversion:"Converted", converted:true, followUp:false, callDuration:1800 },
  { id:30, name:"Lead 30", phone:"+91 90000 10030", email:"lead30@gmail.com", date:"2025-05-25", time:"6:30 PM", status:"Hot", assigned:"Contacted", conversion:"Non Converted", converted:false, followUp:true, callDuration:2200 },

  { id:31, name:"Lead 31", phone:"+91 90000 10031", email:"lead31@gmail.com", date:"2025-06-02", time:"7:30 AM", status:"Cold", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:2100 },
{ id:32, name:"Lead 32", phone:"+91 90000 10032", email:"lead32@gmail.com", date:"2025-06-06", time:"8:30 PM", status:"Cold", assigned:"Pending", conversion:"Non Converted", converted:false, followUp:true, callDuration:1400 },
{ id:33, name:"Lead 33", phone:"+91 90000 10033", email:"lead33@gmail.com", date:"2025-06-12", time:"9:30 AM", status:"Cold", assigned:"Contacted", conversion:"Converted", converted:true, followUp:false, callDuration:2600 },
{ id:34, name:"Lead 34", phone:"+91 90000 10034", email:"lead34@gmail.com", date:"2025-06-18", time:"10:30 PM", status:"Hot", assigned:"Pending", conversion:"Non Converted", converted:false, followUp:true, callDuration:1900 },
{ id:35, name:"Lead 35", phone:"+91 90000 10035", email:"lead35@gmail.com", date:"2025-06-22", time:"11:30 AM", status:"Cold", assigned:"Pending", conversion:"Converted", converted:true, followUp:false, callDuration:3000 },
{ id:36, name:"Lead 36", phone:"+91 90000 10036", email:"lead36@gmail.com", date:"2025-06-27", time:"12:30 PM", status:"Potential", assigned:"Contacted", conversion:"Converted", converted:false, followUp:true, callDuration:1600 },

{ id:37, name:"Lead 37", phone:"+91 90000 10037", email:"lead37@gmail.com", date:"2025-07-03", time:"1:15 AM", status:"Hot", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:2800 },
{ id:38, name:"Lead 38", phone:"+91 90000 10038", email:"lead38@gmail.com", date:"2025-07-08", time:"2:45 PM", status:"Cold", assigned:"Pending", conversion:"Non Converted", converted:false, followUp:true, callDuration:1100 },
{ id:39, name:"Lead 39", phone:"+91 90000 10039", email:"lead39@gmail.com", date:"2025-07-12", time:"3:10 AM", status:"Potential", assigned:"Contacted", conversion:"Converted", converted:true, followUp:false, callDuration:2500 },
{ id:40, name:"Lead 40", phone:"+91 90000 10040", email:"lead40@gmail.com", date:"2025-07-18", time:"4:55 PM", status:"Hot", assigned:"Pending", conversion:"Converted", converted:false, followUp:true, callDuration:1900 },
{ id:41, name:"Lead 41", phone:"+91 90000 10041", email:"lead41@gmail.com", date:"2025-07-22", time:"5:20 AM", status:"Cold", assigned:"Pending", conversion:"Converted", converted:true, followUp:false, callDuration:1700 },
{ id:42, name:"Lead 42", phone:"+91 90000 10042", email:"lead42@gmail.com", date:"2025-07-27", time:"6:40 PM", status:"Potential", assigned:"Contacted", conversion:"Non Converted", converted:false, followUp:true, callDuration:2100 },

{ id:43, name:"Lead 43", phone:"+91 90000 10043", email:"lead43@gmail.com", date:"2025-08-02", time:"7:10 AM", status:"Hot", assigned:"Assigned", conversion:"Non Converted", converted:true, followUp:false, callDuration:2000 },
{ id:44, name:"Lead 44", phone:"+91 90000 10044", email:"lead44@gmail.com", date:"2025-08-06", time:"8:50 PM", status:"Cold", assigned:"Contacted", conversion:"Converted", converted:false, followUp:true, callDuration:1800 },
{ id:45, name:"Lead 45", phone:"+91 90000 10045", email:"lead45@gmail.com", date:"2025-08-11", time:"9:15 AM", status:"Cold", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:2300 },
{ id:46, name:"Lead 46", phone:"+91 90000 10046", email:"lead46@gmail.com", date:"2025-08-16", time:"10:25 PM", status:"Hot", assigned:"Assigned", conversion:"Converted", converted:false, followUp:true, callDuration:2600 },
{ id:47, name:"Lead 47", phone:"+91 90000 10047", email:"lead47@gmail.com", date:"2025-08-20", time:"11:40 AM", status:"Cold", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:1700 },
{ id:48, name:"Lead 48", phone:"+91 90000 10048", email:"lead48@gmail.com", date:"2025-08-25", time:"12:20 PM", status:"Cold", assigned:"Assigned", conversion:"Non Converted", converted:false, followUp:true, callDuration:1900 },

{ id:49, name:"Lead 49", phone:"+91 90000 10049", email:"lead49@gmail.com", date:"2025-09-02", time:"1:30 AM", status:"Hot", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:2100 },
{ id:50, name:"Lead 50", phone:"+91 90000 10050", email:"lead50@gmail.com", date:"2025-09-05", time:"2:30 PM", status:"Cold", assigned:"Assigned", conversion:"Non Converted", converted:false, followUp:true, callDuration:1500 },
{ id:51, name:"Lead 51", phone:"+91 90000 10051", email:"lead51@gmail.com", date:"2025-09-10", time:"3:30 AM", status:"Potential", assigned:"Assigned", conversion:"Non Converted", converted:true, followUp:false, callDuration:2600 },
{ id:52, name:"Lead 52", phone:"+91 90000 10052", email:"lead52@gmail.com", date:"2025-09-15", time:"4:30 PM", status:"Hot", assigned:"Assigned", conversion:"Converted", converted:false, followUp:true, callDuration:2000 },
{ id:53, name:"Lead 53", phone:"+91 90000 10053", email:"lead53@gmail.com", date:"2025-09-20", time:"5:30 AM", status:"Cold", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:1800 },
{ id:54, name:"Lead 54", phone:"+91 90000 10054", email:"lead54@gmail.com", date:"2025-09-25", time:"6:30 PM", status:"Cold", assigned:"Assigned", conversion:"Converted", converted:false, followUp:true, callDuration:2200 },

{ id:55, name:"Lead 55", phone:"+91 90000 10055", email:"lead55@gmail.com", date:"2025-10-02", time:"7:30 AM", status:"Hot", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:2100 },
{ id:56, name:"Lead 56", phone:"+91 90000 10056", email:"lead56@gmail.com", date:"2025-10-06", time:"8:30 PM", status:"Cold", assigned:"Assigned", conversion:"Non Converted", converted:false, followUp:true, callDuration:1400 },
{ id:57, name:"Lead 57", phone:"+91 90000 10057", email:"lead57@gmail.com", date:"2025-10-12", time:"9:30 AM", status:"Hot", assigned:"Assigned", conversion:"Non Converted", converted:true, followUp:false, callDuration:2600 },
{ id:58, name:"Lead 58", phone:"+91 90000 10058", email:"lead58@gmail.com", date:"2025-10-18", time:"10:30 PM", status:"Hot", assigned:"Assigned", conversion:"Non Converted", converted:false, followUp:true, callDuration:1900 },
{ id:59, name:"Lead 59", phone:"+91 90000 10059", email:"lead59@gmail.com", date:"2025-10-22", time:"11:30 AM", status:"Cold", assigned:"Pending", conversion:"Non Converted", converted:true, followUp:false, callDuration:3000 },
{ id:60, name:"Lead 60", phone:"+91 90000 10060", email:"lead60@gmail.com", date:"2025-10-27", time:"12:30 PM", status:"Cold", assigned:"Contacted", conversion:"Non Converted", converted:false, followUp:true, callDuration:1600 },

{ id:61, name:"Lead 61", phone:"+91 90000 10061", email:"lead61@gmail.com", date:"2025-11-03", time:"1:15 AM", status:"Hot", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:2800 },
{ id:62, name:"Lead 62", phone:"+91 90000 10062", email:"lead62@gmail.com", date:"2025-11-08", time:"2:45 PM", status:"Cold", assigned:"Pending", conversion:"Non Converted", converted:false, followUp:true, callDuration:1100 },
{ id:63, name:"Lead 63", phone:"+91 90000 10063", email:"lead63@gmail.com", date:"2025-11-12", time:"3:10 AM", status:"Hot", assigned:"Contacted", conversion:"Converted", converted:true, followUp:false, callDuration:2500 },
{ id:64, name:"Lead 64", phone:"+91 90000 10064", email:"lead64@gmail.com", date:"2025-11-18", time:"4:55 PM", status:"Cold", assigned:"Assigned", conversion:"Non Converted", converted:false, followUp:true, callDuration:1900 },
{ id:65, name:"Lead 65", phone:"+91 90000 10065", email:"lead65@gmail.com", date:"2025-11-22", time:"5:20 AM", status:"Cold", assigned:"Pending", conversion:"Converted", converted:true, followUp:false, callDuration:1700 },
{ id:66, name:"Lead 66", phone:"+91 90000 10066", email:"lead66@gmail.com", date:"2025-11-27", time:"6:40 PM", status:"Cold", assigned:"Contacted", conversion:"Non Converted", converted:false, followUp:true, callDuration:2100 },

{ id:67, name:"Lead 67", phone:"+91 90000 10067", email:"lead67@gmail.com", date:"2025-12-02", time:"7:10 AM", status:"Cold", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:2000 },
{ id:68, name:"Lead 68", phone:"+91 90000 10068", email:"lead68@gmail.com", date:"2025-12-06", time:"8:50 PM", status:"Cold", assigned:"Pending", conversion:"Non Converted", converted:false, followUp:true, callDuration:1800 },
{ id:69, name:"Lead 69", phone:"+91 90000 10069", email:"lead69@gmail.com", date:"2025-12-11", time:"9:15 AM", status:"Hot", assigned:"Contacted", conversion:"Converted", converted:true, followUp:false, callDuration:2300 },
{ id:70, name:"Lead 70", phone:"+91 90000 10070", email:"lead70@gmail.com", date:"2025-12-16", time:"10:25 PM", status:"Cold", assigned:"Assigned", conversion:"Non Converted", converted:false, followUp:true, callDuration:2600 },
{ id:71, name:"Lead 71", phone:"+91 90000 10071", email:"lead71@gmail.com", date:"2025-12-20", time:"11:40 AM", status:"Cold", assigned:"Pending", conversion:"Converted", converted:true, followUp:false, callDuration:1700 },
{ id:72, name:"Lead 72", phone:"+91 90000 10072", email:"lead72@gmail.com", date:"2025-12-25", time:"12:20 PM", status:"Hot", assigned:"Contacted", conversion:"Non Converted", converted:false, followUp:true, callDuration:1900 },

{ id:73, name:"Lead 73", phone:"+91 90000 10073", email:"lead73@gmail.com", date:"2025-12-26", time:"1:30 AM", status:"Hot", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:2100 },
{ id:74, name:"Lead 74", phone:"+91 90000 10074", email:"lead74@gmail.com", date:"2025-12-27", time:"2:30 PM", status:"Cold", assigned:"Pending", conversion:"Non Converted", converted:false, followUp:true, callDuration:1500 },
{ id:75, name:"Lead 75", phone:"+91 90000 10075", email:"lead75@gmail.com", date:"2025-12-28", time:"3:30 AM", status:"Cold", assigned:"Contacted", conversion:"Converted", converted:true, followUp:false, callDuration:2600 },
{ id:76, name:"Lead 76", phone:"+91 90000 10076", email:"lead76@gmail.com", date:"2025-12-29", time:"4:30 PM", status:"Hot", assigned:"Assigned", conversion:"Non Converted", converted:false, followUp:true, callDuration:2000 },
{ id:77, name:"Lead 77", phone:"+91 90000 10077", email:"lead77@gmail.com", date:"2025-12-30", time:"5:30 AM", status:"Cold", assigned:"Pending", conversion:"Converted", converted:true, followUp:false, callDuration:1800 },
{ id:78, name:"Lead 78", phone:"+91 90000 10078", email:"lead78@gmail.com", date:"2025-12-31", time:"6:30 PM", status:"Hot", assigned:"Contacted", conversion:"Non Converted", converted:false, followUp:true, callDuration:2200 },
{ id:79, name:"Lead 79", phone:"+91 90000 10079", email:"lead79@gmail.com", date:"2025-12-31", time:"7:30 AM", status:"Cold", assigned:"Assigned", conversion:"Converted", converted:true, followUp:false, callDuration:2100 },

  { id:80, name:"Lead 80", phone:"+91 90000 10080", email:"lead80@gmail.com", date:"2025-12-28", time:"8:45 PM", status:"Cold", assigned:"Pending", conversion:"Non Converted", converted:false, followUp:true, callDuration:2100 }
];