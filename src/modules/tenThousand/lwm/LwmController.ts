import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwm")
export default class LwmController {
  @operation({
    summary: "Get Lwm",
  })
  @get()
  static getLwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwm",
  })
  @post("{id}")
  static createLwm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
