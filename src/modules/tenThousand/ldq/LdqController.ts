import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldq")
export default class LdqController {
  @operation({
    summary: "Get Ldq",
  })
  @get()
  static getLdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldq",
  })
  @post("{id}")
  static createLdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
