import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mats")
export default class MatController {
  @operation({
    summary: "Get Mats",
  })
  @get()
  static getMats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mat",
  })
  @post("{id}")
  static createMat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
