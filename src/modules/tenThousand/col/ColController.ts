import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cols")
export default class ColController {
  @operation({
    summary: "Get Cols",
  })
  @get()
  static getCols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Col",
  })
  @post("{id}")
  static createCol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
