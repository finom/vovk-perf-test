import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fszs")
export default class FszController {
  @operation({
    summary: "Get Fszs",
  })
  @get()
  static getFszs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsz",
  })
  @post("{id}")
  static createFsz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
