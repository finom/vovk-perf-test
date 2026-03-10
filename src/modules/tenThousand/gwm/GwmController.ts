import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwm")
export default class GwmController {
  @operation({
    summary: "Get Gwm",
  })
  @get()
  static getGwm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gwm",
  })
  @post("{id}")
  static createGwm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
