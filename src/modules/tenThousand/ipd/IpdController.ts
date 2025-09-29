import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipds")
export default class IpdController {
  @operation({
    summary: "Get Ipds",
  })
  @get()
  static getIpds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipd",
  })
  @post("{id}")
  static createIpd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
