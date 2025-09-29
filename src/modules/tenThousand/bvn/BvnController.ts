import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvns")
export default class BvnController {
  @operation({
    summary: "Get Bvns",
  })
  @get()
  static getBvns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvn",
  })
  @post("{id}")
  static createBvn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
