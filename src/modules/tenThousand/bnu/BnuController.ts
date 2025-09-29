import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnus")
export default class BnuController {
  @operation({
    summary: "Get Bnus",
  })
  @get()
  static getBnus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnu",
  })
  @post("{id}")
  static createBnu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
