import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbm")
export default class JbmController {
  @operation({
    summary: "Get Jbm",
  })
  @get()
  static getJbm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jbm",
  })
  @post("{id}")
  static createJbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
