import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipjs")
export default class IpjController {
  @operation({
    summary: "Get Ipjs",
  })
  @get()
  static getIpjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipj",
  })
  @post("{id}")
  static createIpj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
