import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgws")
export default class BgwController {
  @operation({
    summary: "Get Bgws",
  })
  @get()
  static getBgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgw",
  })
  @post("{id}")
  static createBgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
