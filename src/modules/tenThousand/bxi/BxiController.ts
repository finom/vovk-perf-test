import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxis")
export default class BxiController {
  @operation({
    summary: "Get Bxis",
  })
  @get()
  static getBxis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxi",
  })
  @post("{id}")
  static createBxi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
