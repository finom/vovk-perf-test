import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngks")
export default class NgkController {
  @operation({
    summary: "Get Ngks",
  })
  @get()
  static getNgks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngk",
  })
  @post("{id}")
  static createNgk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
