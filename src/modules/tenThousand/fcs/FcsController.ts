import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcs")
export default class FcsController {
  @operation({
    summary: "Get Fcs",
  })
  @get()
  static getFcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcs",
  })
  @post("{id}")
  static createFcs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
