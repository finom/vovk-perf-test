import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldes")
export default class LdeController {
  @operation({
    summary: "Get Ldes",
  })
  @get()
  static getLdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lde",
  })
  @post("{id}")
  static createLde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
