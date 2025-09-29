import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctxes")
export default class CtxController {
  @operation({
    summary: "Get Ctxes",
  })
  @get()
  static getCtxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctx",
  })
  @post("{id}")
  static createCtx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
