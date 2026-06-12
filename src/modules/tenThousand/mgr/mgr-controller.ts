import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgr")
export default class MgrController {
  @operation({
    summary: "Get Mgr",
  })
  @get()
  static getMgr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mgr",
  })
  @post("{id}")
  static createMgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
