import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixgs")
export default class IxgController {
  @operation({
    summary: "Get Ixgs",
  })
  @get()
  static getIxgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixg",
  })
  @post("{id}")
  static createIxg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
