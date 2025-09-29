import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icps")
export default class IcpController {
  @operation({
    summary: "Get Icps",
  })
  @get()
  static getIcps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icp",
  })
  @post("{id}")
  static createIcp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
