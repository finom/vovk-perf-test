import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czies")
export default class CzyController {
  @operation({
    summary: "Get Czies",
  })
  @get()
  static getCzies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czy",
  })
  @post("{id}")
  static createCzy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
