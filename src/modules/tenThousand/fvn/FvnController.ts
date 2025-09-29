import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvns")
export default class FvnController {
  @operation({
    summary: "Get Fvns",
  })
  @get()
  static getFvns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvn",
  })
  @post("{id}")
  static createFvn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
