import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwm")
export default class FwmController {
  @operation({
    summary: "Get Fwm",
  })
  @get()
  static getFwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwm",
  })
  @post("{id}")
  static createFwm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
