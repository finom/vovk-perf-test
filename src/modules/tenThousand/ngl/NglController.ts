import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngls")
export default class NglController {
  @operation({
    summary: "Get Ngls",
  })
  @get()
  static getNgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngl",
  })
  @post("{id}")
  static createNgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
