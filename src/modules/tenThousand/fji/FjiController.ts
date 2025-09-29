import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjis")
export default class FjiController {
  @operation({
    summary: "Get Fjis",
  })
  @get()
  static getFjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fji",
  })
  @post("{id}")
  static createFji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
