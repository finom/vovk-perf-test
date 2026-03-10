import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldl")
export default class LdlController {
  @operation({
    summary: "Get Ldl",
  })
  @get()
  static getLdl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldl",
  })
  @post("{id}")
  static createLdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
