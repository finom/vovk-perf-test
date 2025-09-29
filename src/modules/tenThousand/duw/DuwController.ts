import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duws")
export default class DuwController {
  @operation({
    summary: "Get Duws",
  })
  @get()
  static getDuws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Duw",
  })
  @post("{id}")
  static createDuw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
