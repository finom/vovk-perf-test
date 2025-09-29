import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alds")
export default class AldController {
  @operation({
    summary: "Get Alds",
  })
  @get()
  static getAlds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ald",
  })
  @post("{id}")
  static createAld = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
