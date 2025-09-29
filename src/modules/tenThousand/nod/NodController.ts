import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nods")
export default class NodController {
  @operation({
    summary: "Get Nods",
  })
  @get()
  static getNods = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nod",
  })
  @post("{id}")
  static createNod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
