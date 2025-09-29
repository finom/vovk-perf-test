import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctus")
export default class CtuController {
  @operation({
    summary: "Get Ctus",
  })
  @get()
  static getCtus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctu",
  })
  @post("{id}")
  static createCtu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
