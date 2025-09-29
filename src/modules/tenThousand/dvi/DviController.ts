import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvis")
export default class DviController {
  @operation({
    summary: "Get Dvis",
  })
  @get()
  static getDvis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvi",
  })
  @post("{id}")
  static createDvi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
