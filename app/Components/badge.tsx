import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex justify-start gap-2">
      <Badge variant={"default"} >Badge</Badge>
      <Badge variant={"destructive"}>Badge</Badge>
      <Badge variant={"outline"}>Badge</Badge>
      <Badge variant={"secondary"}>Badge</Badge>
    </div>
  );
}
