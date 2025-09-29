import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctbs")
export default class CtbController {
  @operation({
    summary: "Get Ctbs",
  })
  @get()
  static getCtbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctb",
  })
  @post("{id}")
  static createCtb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
