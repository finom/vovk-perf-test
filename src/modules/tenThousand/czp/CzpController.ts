import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czps")
export default class CzpController {
  @operation({
    summary: "Get Czps",
  })
  @get()
  static getCzps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czp",
  })
  @post("{id}")
  static createCzp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
