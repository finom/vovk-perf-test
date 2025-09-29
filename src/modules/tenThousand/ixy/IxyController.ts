import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixies")
export default class IxyController {
  @operation({
    summary: "Get Ixies",
  })
  @get()
  static getIxies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixy",
  })
  @post("{id}")
  static createIxy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
