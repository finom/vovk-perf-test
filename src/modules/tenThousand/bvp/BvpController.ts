import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvps")
export default class BvpController {
  @operation({
    summary: "Get Bvps",
  })
  @get()
  static getBvps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvp",
  })
  @post("{id}")
  static createBvp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
