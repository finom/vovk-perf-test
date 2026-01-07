import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arm")
export default class ArmController {
  @operation({
    summary: "Get Arm",
  })
  @get()
  static getArm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arm",
  })
  @post("{id}")
  static createArm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
