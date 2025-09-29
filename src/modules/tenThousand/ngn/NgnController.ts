import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngns")
export default class NgnController {
  @operation({
    summary: "Get Ngns",
  })
  @get()
  static getNgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngn",
  })
  @post("{id}")
  static createNgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
