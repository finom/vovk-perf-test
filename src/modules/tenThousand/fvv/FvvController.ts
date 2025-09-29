import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvvs")
export default class FvvController {
  @operation({
    summary: "Get Fvvs",
  })
  @get()
  static getFvvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvv",
  })
  @post("{id}")
  static createFvv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
