import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nens")
export default class NenController {
  @operation({
    summary: "Get Nens",
  })
  @get()
  static getNens = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nen",
  })
  @post("{id}")
  static createNen = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
