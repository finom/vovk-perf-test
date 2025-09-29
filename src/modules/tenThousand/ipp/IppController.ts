import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipps")
export default class IppController {
  @operation({
    summary: "Get Ipps",
  })
  @get()
  static getIpps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipp",
  })
  @post("{id}")
  static createIpp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
