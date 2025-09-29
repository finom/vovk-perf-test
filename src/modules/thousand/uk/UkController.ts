import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uks")
export default class UkController {
  @operation({
    summary: "Get Uks",
  })
  @get()
  static getUks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Uk",
  })
  @post("{id}")
  static createUk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
