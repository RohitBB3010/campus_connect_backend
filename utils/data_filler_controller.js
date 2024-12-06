import Committee from '../models/committee_model.js';
import Member from '../models/member_model.js';
import mongoose from 'mongoose';

export const memberFiller = async (req, res, next) => {

    const memberObjects = [
        {
            name: "Aarav Sharma",
            emailId: "aarav.sharma@example.com",
            committees: []
          },
          {
            name: "Sophia Wilson",
            emailId: "sophia.wilson@example.com",
            committees: []
          },
          {
            name: "Ali Khan",
            emailId: "ali.khan@example.com",
            committees: []
          },
          {
            name: "Wei Zhang",
            emailId: "wei.zhang@example.com",
            committees: []
          },
          {
            name: "Maria Gonzalez",
            emailId: "maria.gonzalez@example.com",
            committees: []
          },
          {
            name: "Ethan Brown",
            emailId: "ethan.brown@example.com",
            committees: []
          },
          {
            name: "Zara Ahmed",
            emailId: "zara.ahmed@example.com",
            committees: []
          },
          {
            name: "Hiroshi Tanaka",
            emailId: "hiroshi.tanaka@example.com",
            committees: []
          },
          {
            name: "Olivia Smith",
            emailId: "olivia.smith@example.com",
            committees: []
          },
          {
            name: "Arjun Reddy",
            emailId: "arjun.reddy@example.com",
            committees: []
          },
          {
            name: "Fatima Hassan",
            emailId: "fatima.hassan@example.com",
            committees: []
          },
          {
            name: "Liam Davis",
            emailId: "liam.davis@example.com",
            committees: []
          },
          {
            name: "Chun-Li Wang",
            emailId: "chun.li.wang@example.com",
            committees: []
          },
          {
            name: "Ananya Patel",
            emailId: "ananya.patel@example.com",
            committees: []
          },
          {
            name: "Michael Johnson",
            emailId: "michael.johnson@example.com",
            committees: []
          },
          {
            name: "Javier Martinez",
            emailId: "javier.martinez@example.com",
            committees: []
          },
          {
            name: "Sarah Lee",
            emailId: "sarah.lee@example.com",
            committees: []
          },
          {
            name: "Ravi Prasad",
            emailId: "ravi.prasad@example.com",
            committees: []
          },
          {
            name: "Emily Garcia",
            emailId: "emily.garcia@example.com",
            committees: []
          },
          {
            name: "Omar Abdallah",
            emailId: "omar.abdallah@example.com",
            committees: []
          }
    ];

    const additionalMembers = [
        { name: "Ishaan Verma", emailId: "ishaan.verma@example.com", committees: [] },
        { name: "Aisha Ali", emailId: "aisha.ali@example.com", committees: [] },
        { name: "Diego Ramirez", emailId: "diego.ramirez@example.com", committees: [] },
        { name: "Chen Wei", emailId: "chen.wei@example.com", committees: [] },
        { name: "Emma Johnson", emailId: "emma.johnson@example.com", committees: [] },
        { name: "Karan Patel", emailId: "karan.patel@example.com", committees: [] },
        { name: "Leila Hassan", emailId: "leila.hassan@example.com", committees: [] },
        { name: "Igor Petrov", emailId: "igor.petrov@example.com", committees: [] },
        { name: "Anna Schmidt", emailId: "anna.schmidt@example.com", committees: [] },
        { name: "Rajesh Kulkarni", emailId: "rajesh.kulkarni@example.com", committees: [] },
        { name: "Fatou Ndiaye", emailId: "fatou.ndiaye@example.com", committees: [] },
        { name: "William Clark", emailId: "william.clark@example.com", committees: [] },
        { name: "Nia Kim", emailId: "nia.kim@example.com", committees: [] },
        { name: "Hassan Omar", emailId: "hassan.omar@example.com", committees: [] },
        { name: "Tomás Silva", emailId: "tomas.silva@example.com", committees: [] },
        { name: "Priya Nair", emailId: "priya.nair@example.com", committees: [] },
        { name: "Yuuki Nakamura", emailId: "yuuki.nakamura@example.com", committees: [] },
        { name: "Chloe Baker", emailId: "chloe.baker@example.com", committees: [] },
        { name: "Luca Rossi", emailId: "luca.rossi@example.com", committees: [] },
        { name: "Sara Novak", emailId: "sara.novak@example.com", committees: [] },
        { name: "Amir El-Sayed", emailId: "amir.el-sayed@example.com", committees: [] },
        { name: "Sofia Morales", emailId: "sofia.morales@example.com", committees: [] },
        { name: "Jin Park", emailId: "jin.park@example.com", committees: [] },
        { name: "Lila Carter", emailId: "lila.carter@example.com", committees: [] },
        { name: "Elijah Thomas", emailId: "elijah.thomas@example.com", committees: [] },
        { name: "Nadia Bousaid", emailId: "nadia.bousaid@example.com", committees: [] },
        { name: "Mohammed Faisal", emailId: "mohammed.faisal@example.com", committees: [] },
        { name: "Anya Kaur", emailId: "anya.kaur@example.com", committees: [] },
        { name: "Benjamin Scott", emailId: "benjamin.scott@example.com", committees: [] },
        { name: "Clara Müller", emailId: "clara.mueller@example.com", committees: [] },
        { name: "David Nguyen", emailId: "david.nguyen@example.com", committees: [] },
        { name: "Alejandra Ruiz", emailId: "alejandra.ruiz@example.com", committees: [] },
        { name: "Eleanor Bell", emailId: "eleanor.bell@example.com", committees: [] },
        { name: "Arif Rahman", emailId: "arif.rahman@example.com", committees: [] },
        { name: "Talia Levy", emailId: "talia.levy@example.com", committees: [] },
        { name: "Victor Hernandez", emailId: "victor.hernandez@example.com", committees: [] },
        { name: "Yara Mostafa", emailId: "yara.mostafa@example.com", committees: [] },
        { name: "Nathan Young", emailId: "nathan.young@example.com", committees: [] },
        { name: "Irene Garcia", emailId: "irene.garcia@example.com", committees: [] },
        { name: "Ahmed Ibrahim", emailId: "ahmed.ibrahim@example.com", committees: [] },
        { name: "Keira Adams", emailId: "keira.adams@example.com", committees: [] },
        { name: "Noah Simmons", emailId: "noah.simmons@example.com", committees: [] },
        { name: "Mei Lin", emailId: "mei.lin@example.com", committees: [] },
        { name: "Gabriel Costa", emailId: "gabriel.costa@example.com", committees: [] },
        { name: "Selena Torres", emailId: "selena.torres@example.com", committees: [] },
        { name: "Ethan Brooks", emailId: "ethan.brooks@example.com", committees: [] },
        { name: "Huda Karim", emailId: "huda.karim@example.com", committees: [] },
        { name: "Maxime Dubois", emailId: "maxime.dubois@example.com", committees: [] },
        { name: "Sophia Amari", emailId: "sophia.amari@example.com", committees: [] },
        { name: "Liam Porter", emailId: "liam.porter@example.com", committees: [] },
        { name: "Aya Youssef", emailId: "aya.youssef@example.com", committees: [] },
        { name: "Dylan Morgan", emailId: "dylan.morgan@example.com", committees: [] },
        { name: "Ritu Singh", emailId: "ritu.singh@example.com", committees: [] },
        { name: "Zain Ali", emailId: "zain.ali@example.com", committees: [] },
        { name: "Aria King", emailId: "aria.king@example.com", committees: [] },
        { name: "Leon Santos", emailId: "leon.santos@example.com", committees: [] },
        { name: "Eva Fischer", emailId: "eva.fischer@example.com", committees: [] },
        { name: "Hugo Torres", emailId: "hugo.torres@example.com", committees: [] },
        { name: "Nia Malik", emailId: "nia.malik@example.com", committees: [] },
        { name: "Lucas Hayes", emailId: "lucas.hayes@example.com", committees: [] }
    ];
    
    const additional2 = [
        
            {
              name: 'Aarav Joshi',
              emailId: 'aarav.joshi@example.com',
              committees: []
            },
            {
              name: 'Emma Thompson',
              emailId: 'emma.thompson@example.com',
              committees: []
            },
            {
              name: 'Ishaan Mehta',
              emailId: 'ishaan.mehta@example.com',
              committees: []
            },
            {
              name: 'Olivia Garcia',
              emailId: 'olivia.garcia@example.com',
              committees: []
            },
            {
              name: 'Vikram Kumar',
              emailId: 'vikram.kumar@example.com',
              committees: []
            },
            {
              name: 'Lily Brown',
              emailId: 'lily.brown@example.com',
              committees: []
            },
            {
              name: 'Aarya Shah',
              emailId: 'aarya.shah@example.com',
              committees: []
            },
            {
              name: 'Lucas Martinez',
              emailId: 'lucas.martinez@example.com',
              committees: []
            },
            {
              name: 'Saanvi Patel',
              emailId: 'saanvi.patel@example.com',
              committees: []
            },
            {
              name: 'Mohamed Ali',
              emailId: 'mohamed.ali@example.com',
              committees: []
            },
            {
              name: 'Ravi Singh',
              emailId: 'ravi.singh@example.com',
              committees: []
            },
            {
              name: 'Sophia Johnson',
              emailId: 'sophia.johnson@example.com',
              committees: []
            },
            {
              name: 'Arjun Patel',
              emailId: 'arjun.patel@example.com',
              committees: []
            },
            {
              name: 'Mia Wilson',
              emailId: 'mia.wilson@example.com',
              committees: []
            },
            {
              name: 'Rajeev Sharma',
              emailId: 'rajeeve.sharma@example.com',
              committees: []
            },
            {
              name: 'Emma Clark',
              emailId: 'emma.clark@example.com',
              committees: []
            },
            {
              name: 'Nina Gupta',
              emailId: 'nina.gupta@example.com',
              committees: []
            },
            {
              name: 'Ethan Harris',
              emailId: 'ethan.harris@example.com',
              committees: []
            },
            {
              name: 'Priya Kapoor',
              emailId: 'priya.kapoor@example.com',
              committees: []
            },
            {
              name: 'James Smith',
              emailId: 'james.smith@example.com',
              committees: []
            },
            {
              name: 'Ayesha Khan',
              emailId: 'ayesha.khan@example.com',
              committees: []
            },
            {
              name: 'Aryan Gupta',
              emailId: 'aryan.gupta@example.com',
              committees: []
            },
            {
              name: 'Sarah Taylor',
              emailId: 'sarah.taylor@example.com',
              committees: []
            },
            {
              name: 'Simran Kaur',
              emailId: 'simran.kaur@example.com',
              committees: []
            },
            {
              name: 'Carlos Fernandez',
              emailId: 'carlos.fernandez@example.com',
              committees: []
            },
            {
              name: 'Karan Aggarwal',
              emailId: 'karan.aggarwal@example.com',
              committees: []
            },
            {
              name: 'Alice Cooper',
              emailId: 'alice.cooper@example.com',
              committees: []
            },
            {
              name: 'Meera Reddy',
              emailId: 'meera.reddy@example.com',
              committees: []
            },
            {
              name: 'Zara Thompson',
              emailId: 'zara.thompson@example.com',
              committees: []
            },
            {
              name: 'Nikhil Jain',
              emailId: 'nikhil.jain@example.com',
              committees: []
            },
            {
              name: 'Ella Williams',
              emailId: 'ella.williams@example.com',
              committees: []
            },
            {
              name: 'Avi Verma',
              emailId: 'avi.verma@example.com',
              committees: []
            },
            {
              name: 'Maya Ali',
              emailId: 'maya.ali@example.com',
              committees: []
            },
            {
              name: 'Liam Davis',
              emailId: 'liam.davis@example.com',
              committees: []
            },
            {
              name: 'Aditya Choudhary',
              emailId: 'aditya.choudhary@example.com',
              committees: []
            },
            {
              name: 'Sophia Lee',
              emailId: 'sophia.lee@example.com',
              committees: []
            },
            {
              name: 'Evan Moore',
              emailId: 'evan.moore@example.com',
              committees: []
            },
            {
              name: 'Riya Nair',
              emailId: 'riya.nair@example.com',
              committees: []
            },
            {
              name: 'Luca Rossi',
              emailId: 'luca.rossi@example.com',
              committees: []
            },
            {
              name: 'Siddharth Agarwal',
              emailId: 'siddharth.agarwal@example.com',
              committees: []
            },
            {
              name: 'Isabella Clark',
              emailId: 'isabella.clark@example.com',
              committees: []
            },
            {
              name: 'Zain Khan',
              emailId: 'zain.khan@example.com',
              committees: []
            },
            {
              name: 'Ananya Desai',
              emailId: 'ananya.desai@example.com',
              committees: []
            },
            {
              name: 'Nathan Allen',
              emailId: 'nathan.allen@example.com',
              committees: []
            },
            {
              name: 'Vivek Thakur',
              emailId: 'vivek.thakur@example.com',
              committees: []
            },
            {
              name: 'Gianna White',
              emailId: 'gianna.white@example.com',
              committees: []
            },
            {
              name: 'Ibrahim Ali',
              emailId: 'ibrahim.ali@example.com',
              committees: []
            },
            {
              name: 'Hannah Jackson',
              emailId: 'hannah.jackson@example.com',
              committees: []
            },
            {
              name: 'Arvind Rao',
              emailId: 'arvind.rao@example.com',
              committees: []
            },
            {
              name: 'Leo Hernandez',
              emailId: 'leo.hernandez@example.com',
              committees: []
            },
            {
              name: 'Ayush Yadav',
              emailId: 'ayush.yadav@example.com',
              committees: []
            },
            {
              name: 'Charlotte Lewis',
              emailId: 'charlotte.lewis@example.com',
              committees: []
            },
            {
              name: 'Madhavi Singh',
              emailId: 'madhavi.singh@example.com',
              committees: []
            },
            {
              name: 'Isaac Martin',
              emailId: 'isaac.martin@example.com',
              committees: []
            },
            {
              name: 'Ariya Mehra',
              emailId: 'ariya.mehra@example.com',
              committees: []
            },
            {
              name: 'Freya Allen',
              emailId: 'freya.allen@example.com',
              committees: []
            },
            {
              name: 'Vikram Soni',
              emailId: 'vikram.soni@example.com',
              committees: []
            },
            {
              name: 'Maya Patel',
              emailId: 'maya.patel@example.com',
              committees: []
            },
            {
              name: 'Jack Green',
              emailId: 'jack.green@example.com',
              committees: []
            },
            {
              name: 'Manisha Gupta',
              emailId: 'manisha.gupta@example.com',
              committees: []
            },
            {
              name: 'Joshua Lee',
              emailId: 'joshua.lee@example.com',
              committees: []
            },
            {
              name: 'Arden Zhou',
              emailId: 'arden.zhou@example.com',
              committees: []
            },
            {
              name: 'Priya Reddy',
              emailId: 'priya.reddy@example.com',
              committees: []
            },
            {
              name: 'Kaitlyn Young',
              emailId: 'kaitlyn.young@example.com',
              committees: []
            },
            {
              name: 'Anish Iyer',
              emailId: 'anish.iyer@example.com',
              committees: []
            },
            {
              name: 'Blake Anderson',
              emailId: 'blake.anderson@example.com',
              committees: []
            },
            {
              name: 'Neha Mehta',
              emailId: 'neha.mehta@example.com',
              committees: []
            },
            {
              name: 'Elliot Adams',
              emailId: 'elliot.adams@example.com',
              committees: []
            },
            {
              name: 'Karan Bhatia',
              emailId: 'karan.bhatia@example.com',
              committees: []
            },
            {
              name: 'Leah Scott',
              emailId: 'leah.scott@example.com',
              committees: []
            },
            {
              name: 'Tejas Nair',
              emailId: 'tejas.nair@example.com',
              committees: []
            },
            {
              name: 'Ashley Martinez',
              emailId: 'ashley.martinez@example.com',
              committees: []
            },
            {
              name: 'Shweta Verma',
              emailId: 'shweta.verma@example.com',
              committees: []
            },
            {
              name: 'Austin Wilson',
              emailId: 'austin.wilson@example.com',
              committees: []
            },
            {
              name: 'Snehal Patel',
              emailId: 'snehal.patel@example.com',
              committees: []
            },
            {
              name: 'Ethan Carter',
              emailId: 'ethan.carter@example.com',
              committees: []
            },
            {
              name: 'Maya Das',
              emailId: 'maya.das@example.com',
              committees: []
            },
            {
              name: 'Jacob Walker',
              emailId: 'jacob.walker@example.com',
              committees: []
            },
            {
              name: 'Pooja Saini',
              emailId: 'pooja.saini@example.com',
              committees: []
            },
            {
              name: 'Isaac Clark',
              emailId: 'isaac.clark@example.com',
              committees: []
            },
            {
              name: 'Farhan Malik',
              emailId: 'farhan.malik@example.com',
              committees: []
            },
            {
              name: 'Rhea Arora',
              emailId: 'rhea.arora@example.com',
              committees: []
            },
            {
              name: 'Benjamin King',
              emailId: 'benjamin.king@example.com',
              committees: []
            },
            {
              name: 'Meghan Fox',
              emailId: 'meghan.fox@example.com',
              committees: []
            },
            {
              name: 'Tanvi Deshmukh',
              emailId: 'tanvi.deshmukh@example.com',
              committees: []
            }
          
    ]

    const members = await Member.find();
    let count = 0;

    const randomMembers = getRandomMembers(members, 36);

    return res.status(200).json({
        message : "Out of loop",
        randomMembers : randomMembers
    });
};

export const addCommittees = async (req, res, next) => {

    const id1 = await Member.findOne({ name: "Amir El-Sayed" }, { _id: 1 });
    const id2 = await Member.findOne({ name: "Mohammed Faisal" }, { _id: 1 });
    const id3 = await Member.findOne({ name: "Emma Thompson" }, { _id: 1 });
    const id4 = await Member.findOne({ name: "Lucas Martinez" }, { _id: 1 });
    const id5 = await Member.findOne({ name: "Liam Davis" }, { _id: 1 });
    const id6 = await Member.findOne({ name: "Avi Verma" }, { _id: 1 });

    const ids = [id1, id2, id3, id4, id5, id6];

    const committee = new Committee({
        name : "Unstop Igniters Club",
        members : [],
        authorities : [
            {
                position : "Head",
                memberId : id1,
            },
            {
                position : "Co-Head",
                memberId : id2,
            },
            {
                position : "Public Relations Lead",
                memberId : id3,
            },
            {
                position : "Sponsorship Lead",
                memberId : id4,
            },
            {
                position : "Tech Lead",
                memberId : id5,
            },
            {
                position : "Events Head",
                memberId : id6,
            },
        ],
        events : [],
        announcements : []
    });

    console.log(ids);

    await committee.save();

    return res.status(200).json({
        "message" : "Done",
        committee : committee
    });
}

export const updateMembersWithCommittees = async () => {
    try {
        // Step 1: Fetch all committees
        const committees = await Committee.find().populate('authorities.memberId');  // Populate memberId in authorities

        for (const committee of committees) {
            // Step 2: For each committee, iterate through the authorities array
            for (const authority of committee.authorities) {
                // Step 3: Extract the memberId and committee details
                const memberId = authority.memberId._id;
                const committeeDetails = {
                    committee_doc: committee._id,
                    committee_name: committee.name,
                    role: authority.position
                };

                // Step 4: Find the member and update their committees field
                const updatedMember = await Member.findOneAndUpdate(
                    { _id: memberId }, // Match the member by _id
                    { $push: { committees: committeeDetails } }, // Add the committeeDetails to the committees array
                    { new: true } // Return the updated member document
                );

                if (!updatedMember) {
                    console.log(`Member with ID ${memberId} not found.`);
                } else {
                    console.log(`Updated member: ${updatedMember.name} with new committee: ${committee.name}`);
                }
            }
        }

        console.log("Members have been updated with committees and authorities.");
    } catch (error) {
        console.error("Error during updating members:", error);
    }
};

// export const memToCom = async (req, res, next) => {
//   try {
//       // Step 1: Fetch all member names from committees
//       const auth = await Committee.find().populate('authorities.memberId');
//       const memberNames = auth.flatMap(committee =>
//           committee.authorities.map(authority => authority.memberId?.name).filter(name => name)
//       );

//       // Step 2: Fetch all members excluding those in memberNames
//       const excludedMemberIds = await Member.find({ name: { $in: memberNames } }, "_id");
//       const excludedIdsSet = new Set(excludedMemberIds.map(member => member._id.toString()));

//       const remainingMembers = await Member.find(
//           { _id: { $nin: Array.from(excludedIdsSet) } }, // Exclude members by _id
//           "_id" // Fetch only _id
//       );

//       if (remainingMembers.length < 42) {
//           return res.status(400).json({
//               message: "Not enough members available to select 42 unique IDs."
//           });
//       }

//       // Step 3: Randomly select 42 unique members
//       const shuffled = remainingMembers.sort(() => 0.5 - Math.random());
//       const selectedMembers = shuffled.slice(0, 42).map(member => member._id.toString());

//       // Step 4: Initialize committee assignments
//       const committeeAssignments = {
//           0: [],
//           1: [],
//           2: [],
//           3: []
//       };

//       // Assign the first 4 members to 3 completely different committees each
//       for (let i = 0; i < 4; i++) {
//           const committees = [0, 1, 2, 3].sort(() => 0.5 - Math.random()).slice(0, 3); // Random 3 committees
//           for (const committee of committees) {
//               committeeAssignments[committee].push(selectedMembers[i]);
//           }
//       }

//       // Assign the next 10 members to 2 different committees each
//       for (let i = 4; i < 14; i++) {
//           const committees = [0, 1, 2, 3].sort(() => 0.5 - Math.random()).slice(0, 2); // Random 2 committees
//           for (const committee of committees) {
//               committeeAssignments[committee].push(selectedMembers[i]);
//           }
//       }

//       // Assign the remaining members to 1 committee each
//       for (let i = 14; i < 42; i++) {
//           const committee = [0, 1, 2, 3].sort(() => 0.5 - Math.random())[0]; // Random 1 committee
//           committeeAssignments[committee].push(selectedMembers[i]);
//       }

//       // Step 5: Update Committees in MongoDB
//       const committees = await Committee.find({}, "_id name");
//       const committeeIds = committees.map(committee => committee._id.toString());

//       for (const [index, memberIds] of Object.entries(committeeAssignments)) {
//           const committeeId = committeeIds[index]; // Map index to actual committee _id

//           // Add member IDs to 'members' and 'authorities'
//           await Committee.findByIdAndUpdate(
//               committeeId,
//               {
//                   $addToSet: { // Ensures no duplicates
//                       members: { $each: memberIds },
//                       authorities: memberIds.map(memberId => ({ memberId }))
//                   }
//               },
//               { new: true }
//           );
//       }

//       // Step 6: Update Members in MongoDB
//       for (const memberId of selectedMembers) {
//           const assignedCommittees = [];
//           for (const [index, memberIds] of Object.entries(committeeAssignments)) {
//               if (memberIds.includes(memberId)) {
//                   const committee = committees[index];
//                   assignedCommittees.push({
//                       committee_doc: committee._id,
//                       committee_name: committee.name,
//                       role: "Member" // Assuming role is 'Member'; adjust if needed
//                   });
//               }
//           }

//           // Update member's committees field
//           await Member.findByIdAndUpdate(
//               memberId,
//               { $addToSet: { committees: { $each: assignedCommittees } } }, // Avoid duplicates
//               { new: true }
//           );
//       }

//       return res.status(200).json({
//           message: "All good. Committees and members have been updated.",
//           committeeAssignments
//       });
//   } catch (error) {
//       console.error("Error in memToCom:", error);
//       return res.status(500).json({
//           message: "Something went wrong.",
//           error: error.message
//       });
//   }
// };


export const memToCom = async (req, res, next) => {
  try {
      // Step 1: Fetch all committees with their current members
      const committees = await Committee.find().populate('members');
      const targetCount = 15; // Desired number of members per committee

      const overpopulated = []; // Committees with more than 15 members
      const underpopulated = []; // Committees with less than 15 members
      const excessMembers = []; // Members to redistribute
      const allMembersSet = new Set(); // To avoid duplicate assignments

      // Step 2: Classify committees and collect excess members
      for (const committee of committees) {
          committee.members.forEach(member => allMembersSet.add(member._id.toString())); // Track existing members
          if (committee.members.length > targetCount) {
              overpopulated.push({
                  committeeId: committee._id,
                  extraMembers: committee.members.slice(targetCount).map(member => member._id)
              });
              excessMembers.push(
                  ...committee.members.slice(targetCount).map(member => member._id.toString())
              );
          } else if (committee.members.length < targetCount) {
              underpopulated.push({
                  committeeId: committee._id,
                  currentCount: committee.members.length
              });
          }
      }

      // Step 3: Fill underpopulated committees
      for (const underpopulatedCommittee of underpopulated) {
          const { committeeId, currentCount } = underpopulatedCommittee;
          const membersNeeded = targetCount - currentCount;

          const newMembers = [];
          while (newMembers.length < membersNeeded && excessMembers.length > 0) {
              const memberId = excessMembers.pop(); // Get an excess member
              newMembers.push(memberId); // Add to the current committee
              allMembersSet.add(memberId); // Track member usage
          }

          if (newMembers.length < membersNeeded) {
              // Fetch additional members from the database to fill the gap
              const remainingNeeded = membersNeeded - newMembers.length;
              const additionalMembers = await Member.find({
                  _id: { $nin: Array.from(allMembersSet) } // Avoid duplicates
              })
                  .limit(remainingNeeded)
                  .select('_id');

              newMembers.push(...additionalMembers.map(member => member._id.toString()));
              additionalMembers.forEach(member => allMembersSet.add(member._id.toString()));
          }

          // Update the committee with new members
          await Committee.findByIdAndUpdate(
              committeeId,
              { $addToSet: { members: { $each: newMembers } } },
              { new: true }
          );
      }

      // Step 4: Remove excess members from overpopulated committees
      for (const overpopulatedCommittee of overpopulated) {
          const { committeeId, extraMembers } = overpopulatedCommittee;

          await Committee.findByIdAndUpdate(
              committeeId,
              { $pull: { members: { $in: extraMembers } } },
              { new: true }
          );
      }

      return res.status(200).json({
          message: "Committees balanced to have exactly 15 members each."
      });
  } catch (error) {
      console.error("Error balancing committees:", error);
      return res.status(500).json({
          message: "Failed to balance committees.",
          error: error.message
      });
  }
};
