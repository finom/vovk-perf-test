import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arm")
export default class ArmController {
  @operation({
    summary: "Get Arm",
  })
  @get()
  static getArm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Arm",
  })
  @post("{id}")
  static createArm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
