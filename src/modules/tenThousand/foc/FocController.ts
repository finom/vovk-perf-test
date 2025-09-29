import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("focs")
export default class FocController {
  @operation({
    summary: "Get Focs",
  })
  @get()
  static getFocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Foc",
  })
  @post("{id}")
  static createFoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
