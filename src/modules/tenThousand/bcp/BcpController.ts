import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcps")
export default class BcpController {
  @operation({
    summary: "Get Bcps",
  })
  @get()
  static getBcps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcp",
  })
  @post("{id}")
  static createBcp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
