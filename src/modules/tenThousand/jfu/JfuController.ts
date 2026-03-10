import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfu")
export default class JfuController {
  @operation({
    summary: "Get Jfu",
  })
  @get()
  static getJfu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jfu",
  })
  @post("{id}")
  static createJfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
