import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apas")
export default class ApaController {
  @operation({
    summary: "Get Apas",
  })
  @get()
  static getApas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apa",
  })
  @post("{id}")
  static createApa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
