import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvjs")
export default class FvjController {
  @operation({
    summary: "Get Fvjs",
  })
  @get()
  static getFvjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvj",
  })
  @post("{id}")
  static createFvj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
