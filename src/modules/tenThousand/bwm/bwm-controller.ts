import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwm")
export default class BwmController {
  @operation({
    summary: "Get Bwm",
  })
  @get()
  static getBwm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bwm",
  })
  @post("{id}")
  static createBwm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
