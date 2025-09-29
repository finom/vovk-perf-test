import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mujs")
export default class MujController {
  @operation({
    summary: "Get Mujs",
  })
  @get()
  static getMujs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Muj",
  })
  @post("{id}")
  static createMuj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
