import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nijs")
export default class NijController {
  @operation({
    summary: "Get Nijs",
  })
  @get()
  static getNijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nij",
  })
  @post("{id}")
  static createNij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
