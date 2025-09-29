import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsbs")
export default class LsbController {
  @operation({
    summary: "Get Lsbs",
  })
  @get()
  static getLsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsb",
  })
  @post("{id}")
  static createLsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
