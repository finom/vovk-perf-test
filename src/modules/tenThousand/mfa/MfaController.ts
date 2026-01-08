import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfa")
export default class MfaController {
  @operation({
    summary: "Get Mfa",
  })
  @get()
  static getMfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfa",
  })
  @post("{id}")
  static createMfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
