import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctx")
export default class CtxController {
  @operation({
    summary: "Get Ctx",
  })
  @get()
  static getCtx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctx",
  })
  @post("{id}")
  static createCtx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
