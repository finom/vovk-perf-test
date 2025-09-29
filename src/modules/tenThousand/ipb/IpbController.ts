import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipbs")
export default class IpbController {
  @operation({
    summary: "Get Ipbs",
  })
  @get()
  static getIpbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipb",
  })
  @post("{id}")
  static createIpb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
