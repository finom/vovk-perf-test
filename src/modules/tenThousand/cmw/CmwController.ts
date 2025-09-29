import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmws")
export default class CmwController {
  @operation({
    summary: "Get Cmws",
  })
  @get()
  static getCmws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmw",
  })
  @post("{id}")
  static createCmw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
