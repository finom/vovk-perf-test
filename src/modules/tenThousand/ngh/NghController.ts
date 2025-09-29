import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nghs")
export default class NghController {
  @operation({
    summary: "Get Nghs",
  })
  @get()
  static getNghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngh",
  })
  @post("{id}")
  static createNgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
