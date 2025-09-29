import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efus")
export default class EfuController {
  @operation({
    summary: "Get Efus",
  })
  @get()
  static getEfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efu",
  })
  @post("{id}")
  static createEfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
