import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvqs")
export default class FvqController {
  @operation({
    summary: "Get Fvqs",
  })
  @get()
  static getFvqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvq",
  })
  @post("{id}")
  static createFvq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
