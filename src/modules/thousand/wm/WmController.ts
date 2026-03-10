import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wm")
export default class WmController {
  @operation({
    summary: "Get Wm",
  })
  @get()
  static getWm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Wm",
  })
  @post("{id}")
  static createWm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
