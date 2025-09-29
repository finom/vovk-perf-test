import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngws")
export default class NgwController {
  @operation({
    summary: "Get Ngws",
  })
  @get()
  static getNgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngw",
  })
  @post("{id}")
  static createNgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
