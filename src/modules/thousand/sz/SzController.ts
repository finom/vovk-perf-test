import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("szs")
export default class SzController {
  @operation({
    summary: "Get Szs",
  })
  @get()
  static getSzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sz",
  })
  @post("{id}")
  static createSz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
