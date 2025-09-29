import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipies")
export default class IpyController {
  @operation({
    summary: "Get Ipies",
  })
  @get()
  static getIpies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipy",
  })
  @post("{id}")
  static createIpy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
