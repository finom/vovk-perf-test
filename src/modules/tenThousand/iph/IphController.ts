import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iphs")
export default class IphController {
  @operation({
    summary: "Get Iphs",
  })
  @get()
  static getIphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iph",
  })
  @post("{id}")
  static createIph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
