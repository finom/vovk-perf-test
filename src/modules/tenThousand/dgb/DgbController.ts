import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgbs")
export default class DgbController {
  @operation({
    summary: "Get Dgbs",
  })
  @get()
  static getDgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgb",
  })
  @post("{id}")
  static createDgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
