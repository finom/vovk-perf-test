import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnds")
export default class NndController {
  @operation({
    summary: "Get Nnds",
  })
  @get()
  static getNnds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnd",
  })
  @post("{id}")
  static createNnd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
