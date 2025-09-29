import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krxes")
export default class KrxController {
  @operation({
    summary: "Get Krxes",
  })
  @get()
  static getKrxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krx",
  })
  @post("{id}")
  static createKrx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
