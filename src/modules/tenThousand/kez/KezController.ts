import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kezs")
export default class KezController {
  @operation({
    summary: "Get Kezs",
  })
  @get()
  static getKezs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kez",
  })
  @post("{id}")
  static createKez = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
