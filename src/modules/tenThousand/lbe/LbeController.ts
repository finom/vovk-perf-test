import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbes")
export default class LbeController {
  @operation({
    summary: "Get Lbes",
  })
  @get()
  static getLbes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbe",
  })
  @post("{id}")
  static createLbe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
