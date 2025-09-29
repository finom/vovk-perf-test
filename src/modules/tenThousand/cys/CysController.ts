import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cys")
export default class CysController {
  @operation({
    summary: "Get Cys",
  })
  @get()
  static getCys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cys",
  })
  @post("{id}")
  static createCys = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
