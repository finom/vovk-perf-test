import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czks")
export default class CzkController {
  @operation({
    summary: "Get Czks",
  })
  @get()
  static getCzks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czk",
  })
  @post("{id}")
  static createCzk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
