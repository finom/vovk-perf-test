import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dszs")
export default class DszController {
  @operation({
    summary: "Get Dszs",
  })
  @get()
  static getDszs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsz",
  })
  @post("{id}")
  static createDsz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
