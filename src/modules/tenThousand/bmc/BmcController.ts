import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmcs")
export default class BmcController {
  @operation({
    summary: "Get Bmcs",
  })
  @get()
  static getBmcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmc",
  })
  @post("{id}")
  static createBmc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
