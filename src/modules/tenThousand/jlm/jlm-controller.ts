import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlm")
export default class JlmController {
  @operation({
    summary: "Get Jlm",
  })
  @get()
  static getJlm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jlm",
  })
  @post("{id}")
  static createJlm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
