import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dws")
export default class DwController {
  @operation({
    summary: "Get Dws",
  })
  @get()
  static getDws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dw",
  })
  @post("{id}")
  static createDw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
