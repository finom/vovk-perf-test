import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldx")
export default class LdxController {
  @operation({
    summary: "Get Ldx",
  })
  @get()
  static getLdx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldx",
  })
  @post("{id}")
  static createLdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
