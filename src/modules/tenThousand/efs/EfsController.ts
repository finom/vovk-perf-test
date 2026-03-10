import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efs")
export default class EfsController {
  @operation({
    summary: "Get Efs",
  })
  @get()
  static getEfs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efs",
  })
  @post("{id}")
  static createEfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
