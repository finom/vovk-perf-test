import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcps")
export default class KcpController {
  @operation({
    summary: "Get Kcps",
  })
  @get()
  static getKcps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcp",
  })
  @post("{id}")
  static createKcp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
