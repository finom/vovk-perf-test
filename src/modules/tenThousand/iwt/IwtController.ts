import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwts")
export default class IwtController {
  @operation({
    summary: "Get Iwts",
  })
  @get()
  static getIwts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwt",
  })
  @post("{id}")
  static createIwt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
