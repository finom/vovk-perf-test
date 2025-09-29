import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lys")
export default class LysController {
  @operation({
    summary: "Get Lys",
  })
  @get()
  static getLys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lys",
  })
  @post("{id}")
  static createLys = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
