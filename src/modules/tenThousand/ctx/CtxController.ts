import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctxes")
export default class CtxController {
  @operation({
    summary: "Get Ctxes",
  })
  @get()
  static getCtxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctx",
  })
  @post("{id}")
  static createCtx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
