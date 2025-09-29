import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhbs")
export default class LhbController {
  @operation({
    summary: "Get Lhbs",
  })
  @get()
  static getLhbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhb",
  })
  @post("{id}")
  static createLhb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
