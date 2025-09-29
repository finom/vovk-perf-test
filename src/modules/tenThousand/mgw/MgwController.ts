import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgws")
export default class MgwController {
  @operation({
    summary: "Get Mgws",
  })
  @get()
  static getMgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgw",
  })
  @post("{id}")
  static createMgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
