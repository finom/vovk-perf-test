import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lshes")
export default class LshController {
  @operation({
    summary: "Get Lshes",
  })
  @get()
  static getLshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsh",
  })
  @post("{id}")
  static createLsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
