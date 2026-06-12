import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgm")
export default class MgmController {
  @operation({
    summary: "Get Mgm",
  })
  @get()
  static getMgm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mgm",
  })
  @post("{id}")
  static createMgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
