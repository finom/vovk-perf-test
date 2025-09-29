import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hybs")
export default class HybController {
  @operation({
    summary: "Get Hybs",
  })
  @get()
  static getHybs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyb",
  })
  @post("{id}")
  static createHyb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
