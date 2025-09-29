import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czis")
export default class CziController {
  @operation({
    summary: "Get Czis",
  })
  @get()
  static getCzis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czi",
  })
  @post("{id}")
  static createCzi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
