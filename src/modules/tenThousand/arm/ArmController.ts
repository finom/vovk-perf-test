import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arms")
export default class ArmController {
  @operation({
    summary: "Get Arms",
  })
  @get()
  static getArms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arm",
  })
  @post("{id}")
  static createArm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
