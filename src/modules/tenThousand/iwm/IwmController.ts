import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwm")
export default class IwmController {
  @operation({
    summary: "Get Iwm",
  })
  @get()
  static getIwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwm",
  })
  @post("{id}")
  static createIwm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
