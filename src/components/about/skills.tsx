import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Card>
      <CardContent>
        {skills.map((skill) => (
          <div key={skill.type} style={{ marginBottom: "0.5rem" }}>
            <strong>{skill.type}:</strong> {skill.list.join(", ")}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
