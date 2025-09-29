import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("feks")
export default class FekController {
  @operation({
    summary: "Get Feks",
  })
  @get()
  static getFeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fek",
  })
  @post("{id}")
  static createFek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
