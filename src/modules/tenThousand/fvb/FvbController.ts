import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvbs")
export default class FvbController {
  @operation({
    summary: "Get Fvbs",
  })
  @get()
  static getFvbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvb",
  })
  @post("{id}")
  static createFvb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
