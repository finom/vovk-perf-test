import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alcs")
export default class AlcController {
  @operation({
    summary: "Get Alcs",
  })
  @get()
  static getAlcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alc",
  })
  @post("{id}")
  static createAlc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
