import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fojs")
export default class FojController {
  @operation({
    summary: "Get Fojs",
  })
  @get()
  static getFojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Foj",
  })
  @post("{id}")
  static createFoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
