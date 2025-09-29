import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnvs")
export default class DnvController {
  @operation({
    summary: "Get Dnvs",
  })
  @get()
  static getDnvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnv",
  })
  @post("{id}")
  static createDnv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
