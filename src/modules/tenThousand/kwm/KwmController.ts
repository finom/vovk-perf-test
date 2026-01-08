import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwm")
export default class KwmController {
  @operation({
    summary: "Get Kwm",
  })
  @get()
  static getKwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwm",
  })
  @post("{id}")
  static createKwm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
