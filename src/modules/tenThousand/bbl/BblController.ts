import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbls")
export default class BblController {
  @operation({
    summary: "Get Bbls",
  })
  @get()
  static getBbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbl",
  })
  @post("{id}")
  static createBbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
