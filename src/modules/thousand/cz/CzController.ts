import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czs")
export default class CzController {
  @operation({
    summary: "Get Czs",
  })
  @get()
  static getCzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cz",
  })
  @post("{id}")
  static createCz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
