import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvies")
export default class BvyController {
  @operation({
    summary: "Get Bvies",
  })
  @get()
  static getBvies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvy",
  })
  @post("{id}")
  static createBvy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
