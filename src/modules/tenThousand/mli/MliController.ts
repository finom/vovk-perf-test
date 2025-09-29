import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlis")
export default class MliController {
  @operation({
    summary: "Get Mlis",
  })
  @get()
  static getMlis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mli",
  })
  @post("{id}")
  static createMli = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
