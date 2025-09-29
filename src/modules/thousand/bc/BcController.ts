import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcs")
export default class BcController {
  @operation({
    summary: "Get Bcs",
  })
  @get()
  static getBcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bc",
  })
  @post("{id}")
  static createBc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
