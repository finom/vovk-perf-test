import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egws")
export default class EgwController {
  @operation({
    summary: "Get Egws",
  })
  @get()
  static getEgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egw",
  })
  @post("{id}")
  static createEgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
