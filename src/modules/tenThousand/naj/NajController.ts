import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("najs")
export default class NajController {
  @operation({
    summary: "Get Najs",
  })
  @get()
  static getNajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Naj",
  })
  @post("{id}")
  static createNaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
