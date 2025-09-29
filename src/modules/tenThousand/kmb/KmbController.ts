import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmbs")
export default class KmbController {
  @operation({
    summary: "Get Kmbs",
  })
  @get()
  static getKmbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmb",
  })
  @post("{id}")
  static createKmb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
