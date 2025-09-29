import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bszs")
export default class BszController {
  @operation({
    summary: "Get Bszs",
  })
  @get()
  static getBszs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsz",
  })
  @post("{id}")
  static createBsz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
