import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epks")
export default class EpkController {
  @operation({
    summary: "Get Epks",
  })
  @get()
  static getEpks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epk",
  })
  @post("{id}")
  static createEpk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
