import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buws")
export default class BuwController {
  @operation({
    summary: "Get Buws",
  })
  @get()
  static getBuws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Buw",
  })
  @post("{id}")
  static createBuw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
