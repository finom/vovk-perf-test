import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngds")
export default class NgdController {
  @operation({
    summary: "Get Ngds",
  })
  @get()
  static getNgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngd",
  })
  @post("{id}")
  static createNgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
