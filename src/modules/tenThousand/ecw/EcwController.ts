import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecws")
export default class EcwController {
  @operation({
    summary: "Get Ecws",
  })
  @get()
  static getEcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecw",
  })
  @post("{id}")
  static createEcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
