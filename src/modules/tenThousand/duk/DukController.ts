import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duks")
export default class DukController {
  @operation({
    summary: "Get Duks",
  })
  @get()
  static getDuks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Duk",
  })
  @post("{id}")
  static createDuk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
