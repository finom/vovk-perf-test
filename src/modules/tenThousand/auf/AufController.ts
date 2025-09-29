import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aufs")
export default class AufController {
  @operation({
    summary: "Get Aufs",
  })
  @get()
  static getAufs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Auf",
  })
  @post("{id}")
  static createAuf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
