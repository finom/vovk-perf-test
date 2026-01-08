import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwm")
export default class MwmController {
  @operation({
    summary: "Get Mwm",
  })
  @get()
  static getMwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwm",
  })
  @post("{id}")
  static createMwm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
