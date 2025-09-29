import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nirs")
export default class NirController {
  @operation({
    summary: "Get Nirs",
  })
  @get()
  static getNirs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nir",
  })
  @post("{id}")
  static createNir = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
