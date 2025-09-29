import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvcs")
export default class BvcController {
  @operation({
    summary: "Get Bvcs",
  })
  @get()
  static getBvcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvc",
  })
  @post("{id}")
  static createBvc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
