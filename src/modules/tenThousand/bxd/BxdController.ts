import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxds")
export default class BxdController {
  @operation({
    summary: "Get Bxds",
  })
  @get()
  static getBxds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxd",
  })
  @post("{id}")
  static createBxd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
