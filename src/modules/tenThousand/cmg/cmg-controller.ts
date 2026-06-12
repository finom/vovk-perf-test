import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmg")
export default class CmgController {
  @operation({
    summary: "Get Cmg",
  })
  @get()
  static getCmg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cmg",
  })
  @post("{id}")
  static createCmg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
