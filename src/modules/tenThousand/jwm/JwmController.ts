import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwm")
export default class JwmController {
  @operation({
    summary: "Get Jwm",
  })
  @get()
  static getJwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwm",
  })
  @post("{id}")
  static createJwm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
