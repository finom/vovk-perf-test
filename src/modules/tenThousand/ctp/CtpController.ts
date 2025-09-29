import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctps")
export default class CtpController {
  @operation({
    summary: "Get Ctps",
  })
  @get()
  static getCtps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctp",
  })
  @post("{id}")
  static createCtp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
