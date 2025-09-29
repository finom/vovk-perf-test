import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iprs")
export default class IprController {
  @operation({
    summary: "Get Iprs",
  })
  @get()
  static getIprs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipr",
  })
  @post("{id}")
  static createIpr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
