import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjs")
export default class CjController {
  @operation({
    summary: "Get Cjs",
  })
  @get()
  static getCjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cj",
  })
  @post("{id}")
  static createCj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
