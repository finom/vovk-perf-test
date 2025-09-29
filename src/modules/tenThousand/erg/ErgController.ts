import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ergs")
export default class ErgController {
  @operation({
    summary: "Get Ergs",
  })
  @get()
  static getErgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erg",
  })
  @post("{id}")
  static createErg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
