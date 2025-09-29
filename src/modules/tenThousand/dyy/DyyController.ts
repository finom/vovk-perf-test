import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyys")
export default class DyyController {
  @operation({
    summary: "Get Dyys",
  })
  @get()
  static getDyys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyy",
  })
  @post("{id}")
  static createDyy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
