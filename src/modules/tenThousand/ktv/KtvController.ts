import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktvs")
export default class KtvController {
  @operation({
    summary: "Get Ktvs",
  })
  @get()
  static getKtvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktv",
  })
  @post("{id}")
  static createKtv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
