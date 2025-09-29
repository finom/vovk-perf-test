import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuis")
export default class CuiController {
  @operation({
    summary: "Get Cuis",
  })
  @get()
  static getCuis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cui",
  })
  @post("{id}")
  static createCui = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
