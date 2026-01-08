import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewm")
export default class EwmController {
  @operation({
    summary: "Get Ewm",
  })
  @get()
  static getEwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewm",
  })
  @post("{id}")
  static createEwm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
