import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngzs")
export default class NgzController {
  @operation({
    summary: "Get Ngzs",
  })
  @get()
  static getNgzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngz",
  })
  @post("{id}")
  static createNgz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
