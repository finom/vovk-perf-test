import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctx")
export default class CtxController {
  @operation({
    summary: "Get Ctx",
  })
  @get()
  static getCtx = procedure({
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
