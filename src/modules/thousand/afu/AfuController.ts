import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afus")
export default class AfuController {
  @operation({
    summary: "Get Afus",
  })
  @get()
  static getAfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afu",
  })
  @post("{id}")
  static createAfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
