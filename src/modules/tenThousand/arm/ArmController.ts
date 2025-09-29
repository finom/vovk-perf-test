import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arms")
export default class ArmController {
  @operation({
    summary: "Get Arms",
  })
  @get()
  static getArms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arm",
  })
  @post("{id}")
  static createArm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
