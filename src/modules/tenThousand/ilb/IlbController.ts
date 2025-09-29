import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilbs")
export default class IlbController {
  @operation({
    summary: "Get Ilbs",
  })
  @get()
  static getIlbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilb",
  })
  @post("{id}")
  static createIlb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
