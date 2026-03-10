import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwd")
export default class JwdController {
  @operation({
    summary: "Get Jwd",
  })
  @get()
  static getJwd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jwd",
  })
  @post("{id}")
  static createJwd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
