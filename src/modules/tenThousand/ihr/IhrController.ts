import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihrs")
export default class IhrController {
  @operation({
    summary: "Get Ihrs",
  })
  @get()
  static getIhrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihr",
  })
  @post("{id}")
  static createIhr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
