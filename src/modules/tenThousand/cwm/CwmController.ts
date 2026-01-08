import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwm")
export default class CwmController {
  @operation({
    summary: "Get Cwm",
  })
  @get()
  static getCwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwm",
  })
  @post("{id}")
  static createCwm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
