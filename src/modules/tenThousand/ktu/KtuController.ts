import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktus")
export default class KtuController {
  @operation({
    summary: "Get Ktus",
  })
  @get()
  static getKtus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktu",
  })
  @post("{id}")
  static createKtu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
