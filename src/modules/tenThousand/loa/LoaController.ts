import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("loas")
export default class LoaController {
  @operation({
    summary: "Get Loas",
  })
  @get()
  static getLoas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Loa",
  })
  @post("{id}")
  static createLoa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
