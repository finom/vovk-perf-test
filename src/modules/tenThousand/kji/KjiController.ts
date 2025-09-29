import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjis")
export default class KjiController {
  @operation({
    summary: "Get Kjis",
  })
  @get()
  static getKjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kji",
  })
  @post("{id}")
  static createKji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
