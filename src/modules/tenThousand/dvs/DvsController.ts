import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvs")
export default class DvsController {
  @operation({
    summary: "Get Dvs",
  })
  @get()
  static getDvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvs",
  })
  @post("{id}")
  static createDvs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
