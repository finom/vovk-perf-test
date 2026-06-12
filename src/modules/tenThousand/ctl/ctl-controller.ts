import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctl")
export default class CtlController {
  @operation({
    summary: "Get Ctl",
  })
  @get()
  static getCtl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctl",
  })
  @post("{id}")
  static createCtl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
