import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbs")
export default class FbController {
  @operation({
    summary: "Get Fbs",
  })
  @get()
  static getFbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fb",
  })
  @post("{id}")
  static createFb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
