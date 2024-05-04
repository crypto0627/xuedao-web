import React from "react";

import { Avatar, Grid, Typography, Box, Paper } from "@mui/material";
import Image from "next/image";
import { MemberType } from "@/models/types/uiTypes";
import Link from "next/link";

export function Contributor_Team() {
  const members: MemberType[] = [
    { id: 0, name: "Kevin", subtitle: "NTU | Econ", type: "Builders" },
    { id: 1, name: "Albert", subtitle: "NTU | EE", type: "Builders" },
    { id: 2, name: "Allen", subtitle: "NTU | IE", type: "Builders" },
    { id: 3, name: "Louis", subtitle: "NTU | CSIE", type: "Builders" },
    { id: 4, name: "Johnny", subtitle: "NTU | IB", type: "Builders" },
    { id: 5, name: "Terrance", subtitle: "NTU | CSIE", type: "Builders" },
    { id: 8, name: "Moven", subtitle: "NTU | Econ", type: "Builders" },
    { id: 9, name: "Paul", subtitle: "NTU | CSIE", type: "Builders" },
    { id: 10, name: "HongRu", subtitle: "NTU | EE", type: "Builders" },
    { id: 11, name: "Eric", subtitle: "NTU | EE", type: "Builders" },
    { id: 12, name: "Tim", subtitle: "NTU | IB", type: "Builders" },
    { id: 13, name: "Jourden", subtitle: "NTU | EE", type: "Builders" },
    { id: 6, name: "Jake", subtitle: "NKUST | CCE", type: "Builders" },
    { id: 7, name: "Jack", subtitle: "NCCU | BA", type: "Builders" },
    { id: 14, name: "Andrew", subtitle: "NCU | FIN", type: "Operation" },
    { id: 15, name: "CG", subtitle: "NTNU | History", type: "Operation" },
    { id: 16, name: "Rita", subtitle: "NCCU | Law", type: "Operation" },
    { id: 17, name: "Vincent", subtitle: "NCCU | RMI", type: "Operation" },
    { id: 18, name: "Jennifer", subtitle: "NCCU | IB", type: "Community" },
    { id: 19, name: "Benson", subtitle: "NCCU | Econ", type: "Community" },
    { id: 20, name: "RC", subtitle: "NCCU | LLM", type: "Community" },
    { id: 21, name: "Hank", subtitle: "NCKU | IB", type: "Community" },
    { id: 22, name: "Sara", subtitle: "NTPU | BA", type: "Community" },
    { id: 23, name: "Maxwell", subtitle: "NTU | FIN", type: "Community" },
    { id: 24, name: "Evelyn", subtitle: "NTHU | IEEM", type: "Community" },
    { id: 25, name: "Itarn", subtitle: "NTHU | MS", type: "Community" },
    { id: 26, name: "Debby", subtitle: "NTU | LING", type: "Community" },
    { id: 27, name: "Bill", subtitle: "NCCU | FIN", type: "Community" },
    { id: 28, name: "Ken", subtitle: "NTUT | IFM", type: "Community" },
    { id: 29, name: "Jordan", subtitle: "NTU | SM", type: "Community" },
  ];
  const builder = members.slice(0, 14);
  const operation = members.slice(14, 18);
  const community = members.slice(18, 30);
  interface MemberProps {
    name: string;
    subtitle: string;
  }

  const Member: React.FC<MemberProps> = ({ name, subtitle }) => (
    <Box className="flex flex-col items-center text-center">
      <div
        style={{
          width: 60,
          height: 60,
          overflow: "hidden",
          borderRadius: "50%",
        }}
      >
        <Image
        src={`/core-contributors/${name}.webp`}
        width={60}
        height={60}
        className="w-full h-full object-cover"
        alt={name}
      />

      </div>
      <Typography className="font-bold text-sm mt-2">{name}</Typography>
      <Typography className="font-bold text-xs">{subtitle}</Typography>
    </Box>
  );

  return (
    <Box className="flex w-full bg-gradient-to-b from-contributor to-contributor2 md:py-8 lg:py-12">
      <Box className="container flex flex-col mx-auto px-4 md:px-6">
        <Box className="items-center justify-center text-center">
          <Typography variant="h3" className="font-bold">
            XueDAO Contributor Team
          </Typography>
          <Typography variant="h4" className="p-5">
            Our proudest BOC Contributor Team!
          </Typography>
        </Box>
        <Box className="flex flex-col xl:flex-row justify-center items-center p-5 gap-5">
          <Box className="flex flex-col justify-center items-center text-center border-4 border-black p-2 xl:w-1/3 w-full h-full bg-white rounded-3xl">
            <Typography variant="h6">Builder (B)</Typography>
            <Box className="flex flex-wrap justify-center w-full p-5 gap-5">
              {builder.map((member) => (
                <Member
                  key={member.id}
                  name={member.name}
                  subtitle={member.subtitle}
                />
              ))}
            </Box>
          </Box>
          <Box className="flex flex-col items-center border-4 border-black p-5 xl:w-1/5 w-full h-full bg-white rounded-3xl gap-8">
            <Typography variant="h6">Operation (O)</Typography>
            <Box className="flex flex-wrap justify-center w-full p-5 gap-5">
            {operation.map((member) => (
                <Member
                  key={member.id}
                  name={member.name}
                  subtitle={member.subtitle}
                />
              ))}
              </Box>
          </Box>
          <Box className="flex flex-col justify-center items-center text-center border-4 border-black p-2 xl:w-1/3 w-full h-full bg-white rounded-3xl">
            <Typography variant="h6">Community (C)</Typography>
            <Box className="flex flex-wrap justify-center w-full p-5 gap-5">
            {community.map((member) => (
                <Member
                  key={member.id}
                  name={member.name}
                  subtitle={member.subtitle}
                />
              ))}
              </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
