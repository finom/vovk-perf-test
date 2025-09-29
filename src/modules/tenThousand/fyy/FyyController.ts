import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyys")
export default class FyyController {
  @operation({
    summary: "Get Fyys",
  })
  @get()
  static getFyys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyy",
  })
  @post("{id}")
  static createFyy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
