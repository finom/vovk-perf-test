import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgr")
export default class JgrController {
  @operation({
    summary: "Get Jgr",
  })
  @get()
  static getJgr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jgr",
  })
  @post("{id}")
  static createJgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
