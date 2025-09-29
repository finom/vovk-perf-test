import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajos")
export default class AjoController {
  @operation({
    summary: "Get Ajos",
  })
  @get()
  static getAjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajo",
  })
  @post("{id}")
  static createAjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
