import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("niys")
export default class NiyController {
  @operation({
    summary: "Get Niys",
  })
  @get()
  static getNiys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Niy",
  })
  @post("{id}")
  static createNiy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
