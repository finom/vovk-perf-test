import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bts")
export default class BtsController {
  @operation({
    summary: "Get Bts",
  })
  @get()
  static getBts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bts",
  })
  @post("{id}")
  static createBts = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
