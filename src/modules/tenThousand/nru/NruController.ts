import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrus")
export default class NruController {
  @operation({
    summary: "Get Nrus",
  })
  @get()
  static getNrus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nru",
  })
  @post("{id}")
  static createNru = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
