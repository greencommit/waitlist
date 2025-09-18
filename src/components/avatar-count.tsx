import {
  AvatarGroup,
  AvatarGroupTooltip,
} from "@/components/animate-ui/components/animate/avatar-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATARS = [
  {
    src: "https://pbs.twimg.com/profile_images/1948770261848756224/oPwqXMD6_400x400.jpg",
    fallback: "SK",
    tooltip: "Skyleen",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
    fallback: "CN",
    tooltip: "Shadcn",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg",
    fallback: "AW",
    tooltip: "Adam Wathan",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg",
    fallback: "GR",
    tooltip: "Guillermo Rauch",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg",
    fallback: "JH",
    tooltip: "Jhey",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1927474594102784000/Al0g-I6o_400x400.jpg",
    fallback: "DH",
    tooltip: "David Haz",
  },
];

const AvatarCount = () => {
  return (
    <div className="mx-auto flex w-fit flex-col items-center gap-4 sm:flex-row">
      <span className="inline-flex items-center -space-x-4">
        <AvatarGroup>
          {AVATARS.map((avatar, index) => (
            <Avatar key={index} className="border-background size-12 border-3">
              <AvatarImage src={avatar.src} />
              <AvatarFallback>{avatar.fallback}</AvatarFallback>
              <AvatarGroupTooltip>{avatar.tooltip}</AvatarGroupTooltip>
            </Avatar>
          ))}
        </AvatarGroup>
      </span>
      <div className="text-muted-foreground text-sm">
        Joined {AVATARS.length}+ others.
      </div>
    </div>
  );
};

export default AvatarCount;
