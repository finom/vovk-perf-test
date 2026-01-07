import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctx")
export default class CtxController {
  @operation({
    summary: "Get Ctx",
  })
  @get()
  static getCtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctx",
  })
  @post("{id}")
  static createCtx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
