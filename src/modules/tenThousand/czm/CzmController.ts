import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czms")
export default class CzmController {
  @operation({
    summary: "Get Czms",
  })
  @get()
  static getCzms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czm",
  })
  @post("{id}")
  static createCzm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
