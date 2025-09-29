import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fols")
export default class FolController {
  @operation({
    summary: "Get Fols",
  })
  @get()
  static getFols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fol",
  })
  @post("{id}")
  static createFol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
