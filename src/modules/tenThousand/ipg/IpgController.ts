import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipgs")
export default class IpgController {
  @operation({
    summary: "Get Ipgs",
  })
  @get()
  static getIpgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipg",
  })
  @post("{id}")
  static createIpg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
