import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgvs")
export default class MgvController {
  @operation({
    summary: "Get Mgvs",
  })
  @get()
  static getMgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgv",
  })
  @post("{id}")
  static createMgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
