import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uzs")
export default class UzController {
  @operation({
    summary: "Get Uzs",
  })
  @get()
  static getUzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Uz",
  })
  @post("{id}")
  static createUz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
