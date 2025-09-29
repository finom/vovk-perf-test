import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctis")
export default class CtiController {
  @operation({
    summary: "Get Ctis",
  })
  @get()
  static getCtis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cti",
  })
  @post("{id}")
  static createCti = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
