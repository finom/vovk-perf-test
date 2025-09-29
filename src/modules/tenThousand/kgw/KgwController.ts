import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgws")
export default class KgwController {
  @operation({
    summary: "Get Kgws",
  })
  @get()
  static getKgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgw",
  })
  @post("{id}")
  static createKgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
