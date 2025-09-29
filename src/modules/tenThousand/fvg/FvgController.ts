import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvgs")
export default class FvgController {
  @operation({
    summary: "Get Fvgs",
  })
  @get()
  static getFvgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvg",
  })
  @post("{id}")
  static createFvg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
