import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etbs")
export default class EtbController {
  @operation({
    summary: "Get Etbs",
  })
  @get()
  static getEtbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etb",
  })
  @post("{id}")
  static createEtb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
