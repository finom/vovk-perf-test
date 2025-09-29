import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctgs")
export default class CtgController {
  @operation({
    summary: "Get Ctgs",
  })
  @get()
  static getCtgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctg",
  })
  @post("{id}")
  static createCtg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
