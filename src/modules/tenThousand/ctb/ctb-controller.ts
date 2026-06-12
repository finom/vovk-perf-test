import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctb")
export default class CtbController {
  @operation({
    summary: "Get Ctb",
  })
  @get()
  static getCtb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctb",
  })
  @post("{id}")
  static createCtb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
