import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frps")
export default class FrpController {
  @operation({
    summary: "Get Frps",
  })
  @get()
  static getFrps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frp",
  })
  @post("{id}")
  static createFrp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
