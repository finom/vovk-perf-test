import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfns")
export default class HfnController {
  @operation({
    summary: "Get Hfns",
  })
  @get()
  static getHfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfn",
  })
  @post("{id}")
  static createHfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
