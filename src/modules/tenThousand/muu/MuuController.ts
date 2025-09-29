import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muus")
export default class MuuController {
  @operation({
    summary: "Get Muus",
  })
  @get()
  static getMuus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Muu",
  })
  @post("{id}")
  static createMuu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
