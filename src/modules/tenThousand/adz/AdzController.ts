import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adzs")
export default class AdzController {
  @operation({
    summary: "Get Adzs",
  })
  @get()
  static getAdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adz",
  })
  @post("{id}")
  static createAdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
