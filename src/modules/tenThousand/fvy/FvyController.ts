import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvies")
export default class FvyController {
  @operation({
    summary: "Get Fvies",
  })
  @get()
  static getFvies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvy",
  })
  @post("{id}")
  static createFvy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
