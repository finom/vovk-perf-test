import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilvs")
export default class IlvController {
  @operation({
    summary: "Get Ilvs",
  })
  @get()
  static getIlvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilv",
  })
  @post("{id}")
  static createIlv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
