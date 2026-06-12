import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldv")
export default class LdvController {
  @operation({
    summary: "Get Ldv",
  })
  @get()
  static getLdv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldv",
  })
  @post("{id}")
  static createLdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
