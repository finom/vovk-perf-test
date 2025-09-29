import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epvs")
export default class EpvController {
  @operation({
    summary: "Get Epvs",
  })
  @get()
  static getEpvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epv",
  })
  @post("{id}")
  static createEpv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
