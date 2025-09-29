import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibs")
export default class IbController {
  @operation({
    summary: "Get Ibs",
  })
  @get()
  static getIbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ib",
  })
  @post("{id}")
  static createIb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
