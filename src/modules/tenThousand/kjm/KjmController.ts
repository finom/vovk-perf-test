import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjms")
export default class KjmController {
  @operation({
    summary: "Get Kjms",
  })
  @get()
  static getKjms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjm",
  })
  @post("{id}")
  static createKjm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
