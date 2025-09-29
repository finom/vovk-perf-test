import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctls")
export default class CtlController {
  @operation({
    summary: "Get Ctls",
  })
  @get()
  static getCtls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctl",
  })
  @post("{id}")
  static createCtl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
