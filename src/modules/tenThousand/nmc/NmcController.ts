import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmcs")
export default class NmcController {
  @operation({
    summary: "Get Nmcs",
  })
  @get()
  static getNmcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmc",
  })
  @post("{id}")
  static createNmc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
