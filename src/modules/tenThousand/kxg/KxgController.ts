import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxgs")
export default class KxgController {
  @operation({
    summary: "Get Kxgs",
  })
  @get()
  static getKxgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxg",
  })
  @post("{id}")
  static createKxg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
