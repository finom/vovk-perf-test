import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctms")
export default class CtmController {
  @operation({
    summary: "Get Ctms",
  })
  @get()
  static getCtms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctm",
  })
  @post("{id}")
  static createCtm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
