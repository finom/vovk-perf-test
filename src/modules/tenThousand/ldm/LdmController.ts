import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldm")
export default class LdmController {
  @operation({
    summary: "Get Ldm",
  })
  @get()
  static getLdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldm",
  })
  @post("{id}")
  static createLdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
