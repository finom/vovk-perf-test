import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwjs")
export default class DwjController {
  @operation({
    summary: "Get Dwjs",
  })
  @get()
  static getDwjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwj",
  })
  @post("{id}")
  static createDwj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
