import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("niws")
export default class NiwController {
  @operation({
    summary: "Get Niws",
  })
  @get()
  static getNiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Niw",
  })
  @post("{id}")
  static createNiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
