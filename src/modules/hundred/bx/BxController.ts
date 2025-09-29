import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxes")
export default class BxController {
  @operation({
    summary: "Get Bxes",
  })
  @get()
  static getBxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bx",
  })
  @post("{id}")
  static createBx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
