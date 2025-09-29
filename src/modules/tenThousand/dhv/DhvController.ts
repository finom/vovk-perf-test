import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhvs")
export default class DhvController {
  @operation({
    summary: "Get Dhvs",
  })
  @get()
  static getDhvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhv",
  })
  @post("{id}")
  static createDhv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
