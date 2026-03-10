import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctd")
export default class CtdController {
  @operation({
    summary: "Get Ctd",
  })
  @get()
  static getCtd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctd",
  })
  @post("{id}")
  static createCtd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
