import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dges")
export default class DgeController {
  @operation({
    summary: "Get Dges",
  })
  @get()
  static getDges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dge",
  })
  @post("{id}")
  static createDge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
