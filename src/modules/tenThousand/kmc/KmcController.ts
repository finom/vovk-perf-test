import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmcs")
export default class KmcController {
  @operation({
    summary: "Get Kmcs",
  })
  @get()
  static getKmcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmc",
  })
  @post("{id}")
  static createKmc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
