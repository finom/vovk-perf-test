import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyts")
export default class HytController {
  @operation({
    summary: "Get Hyts",
  })
  @get()
  static getHyts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyt",
  })
  @post("{id}")
  static createHyt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
