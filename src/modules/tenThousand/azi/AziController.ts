import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azis")
export default class AziController {
  @operation({
    summary: "Get Azis",
  })
  @get()
  static getAzis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azi",
  })
  @post("{id}")
  static createAzi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
