import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvks")
export default class FvkController {
  @operation({
    summary: "Get Fvks",
  })
  @get()
  static getFvks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvk",
  })
  @post("{id}")
  static createFvk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
