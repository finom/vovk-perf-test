import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuws")
export default class FuwController {
  @operation({
    summary: "Get Fuws",
  })
  @get()
  static getFuws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fuw",
  })
  @post("{id}")
  static createFuw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
