import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bajs")
export default class BajController {
  @operation({
    summary: "Get Bajs",
  })
  @get()
  static getBajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Baj",
  })
  @post("{id}")
  static createBaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
