import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvhs")
export default class FvhController {
  @operation({
    summary: "Get Fvhs",
  })
  @get()
  static getFvhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvh",
  })
  @post("{id}")
  static createFvh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
