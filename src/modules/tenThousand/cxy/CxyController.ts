import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxies")
export default class CxyController {
  @operation({
    summary: "Get Cxies",
  })
  @get()
  static getCxies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxy",
  })
  @post("{id}")
  static createCxy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
