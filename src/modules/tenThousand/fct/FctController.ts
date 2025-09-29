import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcts")
export default class FctController {
  @operation({
    summary: "Get Fcts",
  })
  @get()
  static getFcts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fct",
  })
  @post("{id}")
  static createFct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
