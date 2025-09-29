import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngxes")
export default class NgxController {
  @operation({
    summary: "Get Ngxes",
  })
  @get()
  static getNgxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngx",
  })
  @post("{id}")
  static createNgx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
