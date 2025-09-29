import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bujs")
export default class BujController {
  @operation({
    summary: "Get Bujs",
  })
  @get()
  static getBujs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Buj",
  })
  @post("{id}")
  static createBuj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
