import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctm")
export default class CtmController {
  @operation({
    summary: "Get Ctm",
  })
  @get()
  static getCtm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctm",
  })
  @post("{id}")
  static createCtm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
