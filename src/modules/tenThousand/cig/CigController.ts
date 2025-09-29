import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cigs")
export default class CigController {
  @operation({
    summary: "Get Cigs",
  })
  @get()
  static getCigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cig",
  })
  @post("{id}")
  static createCig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
