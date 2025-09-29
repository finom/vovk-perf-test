import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewts")
export default class EwtController {
  @operation({
    summary: "Get Ewts",
  })
  @get()
  static getEwts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewt",
  })
  @post("{id}")
  static createEwt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
