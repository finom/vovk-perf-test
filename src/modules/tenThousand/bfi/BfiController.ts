import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfis")
export default class BfiController {
  @operation({
    summary: "Get Bfis",
  })
  @get()
  static getBfis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfi",
  })
  @post("{id}")
  static createBfi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
